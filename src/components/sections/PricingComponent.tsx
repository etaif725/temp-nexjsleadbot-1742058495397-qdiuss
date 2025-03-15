import { Zap } from 'lucide-react';
import React from 'react';

const PricingComponent: React.FC = () => {
  return (
    <div id="flex flex-col items-center justify-center py-12 relative">
      <div className="flex-col items-center justify-center">
        <div className="pricing-banner-vector-wrap">
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 py-10 md:py-20 flex-wrap">
          {[
            'Appointment Booking',
            'Customer Service Agent',
            'Auto SMS Sending',
            'Always on 24/7/365',
            'Voicemail Detection/Drop (optional)',
            'Real Time Analytics',
            '1 M+ Conversations Handled',
            'Call Recording & Transcript',
            'IVR System',
            'Live Human Transfer',
            'GoHighLevel Integrations'
          ].map((item, index) => (
            <div className="flex items-center justify-start gap-2 p-4 border-2 border-border rounded-xl" key={index}>
              <Zap className="h-8 w-8 p-2 fill-primary text-primary" />
              <div>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;