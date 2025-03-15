import Link from "next/link";
import SectionBadge from '../ui/section-badge';
import React from 'react';
import iphone1 from '../../../public/assets/ezgif-7-c3d7585b77.webp';
const UseCases: React.FC = () => {
  return (
    <>
    <section className="flex flex-col md:grid md:grid-cols-2 w-full md:w-full mx-auto my-auto gap-y-24">
      <div className="inline-block items-center justify-between mx-auto my-auto">
        <div>
            <img
            src="/assets/ezgif-7-c3d7585b77.webp"
            width={312}
            height={312}
            alt="iPhone LeadBot Mockup 1"
            className="my-[-12%] md:mx-auto md:my-auto"
            />
        </div>
      </div>
      <div className="relative overflow-hidden rounded-xl">
        {/* <h2 className="text-3xl md:text-4xl text-white font-semibold my-88">Unlock the Power of Collaboration</h2> */}
        <p className="text-muted-foreground md:text-lg mt-20">
        Work smarter with our intuitive AI and Automation tools. Boost productivity, enhance communication, and enjoy exceptional results.
        </p>
        <div className="overflow-x-clip">
          <div className="justify-center flex flex-wrap max-w-lg">
            <div className="my-12 ml-16">
              <SectionBadge 
                title="CS Agent"
              />
            </div>
            <div className="my-16 mx-auto md:mx-0 md:my-36">
              <SectionBadge 
                title="Virtual Assistant"
              />
            </div>
            <div className="-my-8 mx-auto md:mx-0 md:my-20">
              <SectionBadge 
                title="Appointment Setter"
              />
            </div>
            <div className="mt-6 -ml-24 mx-auto md:mx-0">
              <SectionBadge 
                title="Lead Qualifier"
              />
            </div>
            <div className="md:-my-24 mx-auto md:mx-0">
              <SectionBadge 
                title="Sales Agent"
              />
            </div>
          </div>
        </div>
        {/* <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary w-full px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mb-12"
          prefetch={false}
        >
          Get Started
        </Link> */}
      </div>

      {/* <div className="relative overflow-hidden rounded-xl">
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary w-full px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mb-12"
          prefetch={false}
        >
          Get Started
        </Link>
      </div>

        {/* <div className="inline-block items-end justify-between gap-8 mx-auto my-auto">
            <div>
                <img
                src="/assets/ai-chatbot.png"
                width={256}
                height={256}
                alt="iPhone LeadBot Mockup 1"
                className="mx-auto my-auto pt-20 md:pt-0"
                />
            </div>
        </div> */}
    </section>
    </>
  );
};

export default UseCases;
