"use client";

import React from 'react'
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { PlusIcon, MinusCircledIcon } from "@radix-ui/react-icons";

const items = [
    {
        question: 'What is LeadBot AI 2.0?',
        answer: 'LeadBot AI 2.0 is an advanced AI-powered chatbot that helps you increase revenue, cut costs, and save time by maximizing ROI and conversions on your website. It is mobile-friendly, easy to use, and integrates seamlessly with your existing systems.',
    },
    {
        question: 'How do I get started with LeadBot AI 2.0?',
        answer: 'Getting started with LeadBot AI 2.0 is easy! First, create a free account. Then, personalize your AI by filling out a form about your business. In about 72 hours, LeadBot AI will be fully trained and ready to integrate with your website.',
    },
    {
        question: 'How long does it take for LeadBot AI to learn about my business?',
        answer: 'LeadBot AI will learn everything about your business in approximately 72 hours. The training process is quick and efficient, so you can start using your AI chatbot within a few days, not weeks.',
    },
    {
        question: 'Can LeadBot AI integrate with my existing website?',
        answer: 'Yes, LeadBot AI integrates seamlessly with any website you currently own, whether it’s built on a CMS, MERP, or another platform. We support a wide range of systems to ensure smooth integration.',
    },
    {
        question: 'What are the benefits of using LeadBot AI?',
        answer: 'LeadBot AI offers numerous benefits, including saving time, increasing Monthly Recurring Revenue (MRR), reducing costs, and boosting sales conversions. It is also highly customizable to meet your specific business needs.',
    },
    {
        question: 'Is LeadBot AI customizable?',
        answer: 'Absolutely! LeadBot AI 2.0 has been tested with over 120 companies in 9+ different niches. Our AI Agents can be tailored to meet your specific requirements, whether it’s for sales, customer service, or e-commerce.',
    },
    {
        question: 'How does LeadBot AI help with sales?',
        answer: 'LeadBot AI is oriented towards sales, with pre-trained AI Agents designed to maximize sales conversions. From getting an appointment approved to pitching clients and providing customer service, LeadBot AI helps close more deals.',
    },
    {
        question: 'Can LeadBot AI help with e-commerce?',
        answer: 'Yes, LeadBot AI is ready for e-commerce. It can offer potential visitors immediate solutions and sync with your Shopify catalogues to help complete purchases quickly.',
    },
    {
        question: 'How secure is my data with LeadBot AI?',
        answer: 'Your data is securely and reliably hosted with us. We do not store chat histories locally on our servers, ensuring that your training data remains private and secure.',
    },
    {
        question: 'What if I encounter technical problems with LeadBot AI?',
        answer: 'With LeadBot AI, you will no longer lose potential clients due to technical problems, delays, or missed calls. Our AI responds quickly to ensure you never miss an opportunity to engage with your visitors.',
    },
];


const AccordionItem = ({ 
    question, 
    answer 
}: { 
    question: string; 
    answer: string 
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="py-7 border-b" style={{ borderImage: 'conic-gradient(from 90deg at 50% 50%, #1d4ed8 0%, #a5b4fc 50%, #1d4ed8 100%) 1' }}
        onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex items-center">
                <span className="flex-1 text-md font-semibold pr-5">{question}</span>
                {isOpen ? (
                    <MinusCircledIcon className="faq-icon" />
                ) : (
                    <PlusIcon className="faq-icon" />
                )}
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                    initial={{
                        opacity: 0,
                        height: 0,
                        marginTop: 0,
                    }}
                    animate={{
                        opacity: 1,
                        height: "auto",
                        marginTop: "16px",
                    }}
                    exit={{
                        opacity: 0,
                        height: 0,
                        marginTop: 0,
                    }}
                    >
                        {answer}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const FAQs = () => {
  return (
    <div className="bg-transparent py-20">
        <div className="">
            <div className="">
                    {items.map(({ question, answer }) =>(
                        <AccordionItem question={question} answer={answer} key={question} />
                    ))}
                </div>
            </div>
        </div>
  )
};

export default FAQs;
