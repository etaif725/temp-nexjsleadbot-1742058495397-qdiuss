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
            'Appointment scheduling',
            'Customer service representative',
            'Sending SMS automatically',
            'Available 24 x 7',
            'Voicemail Detection & Drop',
            'Providing real-time analytics',
            'Handled over 300K conversations',
            'Transcripts and recordings of calls',
            'Automated IVR Service',
            'Live Agent Transfer Available',
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