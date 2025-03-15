'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card';
import { Zap } from 'lucide-react';
import { CostEstimator } from '../global/CostCalc';

interface PricingCard {
    priceId: string;
    title: string;
    price: string;
    description: string;
    highlight: string;
    features: string[];
    buttonText: string;
    url: string;
}

interface PricingCardsProps {
    pricingCards: PricingCard[];
}

export const PricingCards: React.FC<PricingCardsProps> = ({ pricingCards }) => {
    const [expandedCard, setExpandedCard] = useState<string | null>(null);

    const handleExpand = (title: string, url?: string) => {
        if (title === 'Estimator') {
            setExpandedCard(expandedCard === title ? null : title);
        } else if (url) {
            window.location.href = url; // Redirect to URL if title is not "Custom"
        }
    };

    const handleCollapse = () => {
        setExpandedCard(null);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 my-auto max-auto gap-5 w-full md:gap-10 flex-wrap max-w-full">
            {pricingCards.map((card) => (
                <React.Fragment key={card.priceId}>
                    {/* Main Card */}
                    <Card
                        className={`flex flex-col w-full border-slate-700 ${
                            card.title === 'Business' ? 'border-2 border-primary' : ''
                        }`}
                    >
                        <CardHeader className="border-b-2 border-border">
                            <span>{card.title}</span>
                            <CardTitle className={card.title !== 'Business' ? 'text-muted-foreground' : ''}>
                                {card.price}
                            </CardTitle>
                            <CardDescription>{card.description}</CardDescription>
                        </CardHeader>
                        <CardDescription className="flex items-center gap-2 mt-6 mx-6">
                            {card.highlight}
                        </CardDescription>

                        {/* Card Content */}
                        <CardContent className="py-6 space-y-3 flex-grow">
                            {card.title === 'Estimator' && expandedCard === 'Estimator' ? (
                                <>
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    transition={{ duration: 0.3 }}
                                    className=""
                                >
                                    <CostEstimator />
                                </motion.div>
                                </>
                            ) : (
                                <>
                                    {card.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-2">
                                            <Zap className="h-4 w-4 fill-primary text-primary" />
                                            <p>{feature}</p>
                                        </div>
                                    ))}
                                </>
                            )}
                        </CardContent>
                        
                        {/* Conditionally render button */}
                        <CardFooter className="my-auto w-full">
                            {(card.title !== 'Estimator' || expandedCard !== 'Estimator') ? (
                                <>
                                <button
                                    onClick={() => handleExpand(card.title, card.url)}
                                    className={`w-full text-center text-primary-foreground bg-primary p-2 rounded-md text-sm font-medium ${
                                        card.title !== 'Business' ? '!bg-foreground !text-background' : ''
                                    }`}
                                >
                                    {card.buttonText}
                                </button> 
                                </>
                            ) : (
                                <>
                                <button
                                    onClick={handleCollapse}
                                    className="w-full text-center text-primary-foreground bg-primary p-2 rounded-md text-sm font-medium"
                                >
                                    Close Estimator
                                </button>
                                </>
                            )}
                        </CardFooter>
                    </Card>
                </React.Fragment>
            ))}
        </div>
    );
};
