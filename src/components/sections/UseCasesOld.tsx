import Link from "next/link";
import SectionBadge from '../ui/section-badge';
import React from 'react';
import iphone1 from '../../../public/assets/ezgif-7-c3d7585b77.webp';
const UseCasesOld: React.FC = () => {
  return (
    <>
    <section className="grid grid-cols-2 w-full md:w-full mx-auto my-auto gap-y-24">
      <div className="inline-block items-center justify-between mx-auto my-auto">
        <div>
            <img
            src="/assets/ezgif-7-c3d7585b77.webp"
            width={256}
            height={256}
            alt="iPhone LeadBot Mockup 1"
            className="my-[-12%] md:mx-auto md:my-auto"
            />
        </div>
      </div>
      <div className="relative overflow-hidden rounded-xl ml-4">
        <div className="my-12">
					<SectionBadge 
						title="1. Appointment Setter"
					/>
				</div>
        {/* <h2 className="text-3xl md:text-4xl text-white font-semibold my-88">Unlock the Power of Collaboration</h2> */}
        <p className="text-muted-foreground md:text-lg mt-8">
          Streamline your team&apos;s workflow with our intuitive collaboration tools. Boost productivity, enhance
          communication, and deliver exceptional results.
        </p>
        {/* <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary w-full px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mb-12"
          prefetch={false}
        >
          Get Started
        </Link> */}
      </div>

      <div className="relative overflow-hidden rounded-xl mr-4">
        <div className="my-12">
					<SectionBadge 
						title="2. Lead Qualifier"
					/>
				</div>
        {/* <h2 className="text-3xl md:text-4xl text-white font-semibold my-88">Unlock the Power of Collaboration</h2> */}
        <p className="text-muted-foreground md:text-lg mt-8">
          Streamline your team&apos;s workflow with our intuitive collaboration tools. Boost productivity, enhance
          communication, and deliver exceptional results.
        </p>
        {/* <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary w-full px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mb-12"
          prefetch={false}
        >
          Get Started
        </Link> */}
      </div>

        {/* <div className="inline-block items-end justify-between gap-8 mx-auto my-auto">
            <div>
                <img
                src="/assets/ezgif-7-c3d7585b77.webp"
                width={256}
                height={256}
                alt="iPhone LeadBot Mockup 1"
                className="my-[-12%] md:mx-auto md:my-auto"
                />
            </div>
        </div> */}


        {/* <div className="inline-block items-center justify-between mx-auto my-auto">
          <div>
            <img
              src="/assets/ezgif-7-c3d7585b77.webp"
              width={256}
              height={256}
              alt="iPhone LeadBot Mockup 1"
              className="my-[-12%] md:mx-auto md:my-auto"
            />
          </div>
      </div> */} 
      <div className="relative overflow-hidden rounded-xl ml-4">
        <div className="my-12">
					<SectionBadge 
						title="3. CS Agent"
					/>
				</div>
        {/* <h2 className="text-3xl md:text-4xl text-white font-semibold my-88">Unlock the Power of Collaboration</h2> */}
        <p className="text-muted-foreground md:text-lg mt-8">
          Streamline your team&apos;s workflow with our intuitive collaboration tools. Boost productivity, enhance
          communication, and deliver exceptional results.
        </p>
        {/* <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary w-full px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mb-12"
          prefetch={false}
        >
          Get Started
        </Link> */}
      </div>



      <div className="relative overflow-hidden rounded-xl mr-4">
        <div className="my-12">
					<SectionBadge 
						title="4. Virtual Assistant"
					/>
				</div>
        {/* <h2 className="text-3xl md:text-4xl text-white font-semibold my-88">Unlock the Power of Collaboration</h2> */}
        <p className="text-muted-foreground md:text-lg mt-8">
          Streamline your team&apos;s workflow with our intuitive collaboration tools. Boost productivity, enhance
          communication, and deliver exceptional results.
        </p>
        {/* <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary w-full px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mb-12"
          prefetch={false}
        >
          Get Started
        </Link> */}
      </div>

        <div className="inline-block items-end justify-between gap-8 mx-auto my-auto">
            <div>
                <img
                src="/assets/ai-chatbot.png"
                width={256}
                height={256}
                alt="iPhone LeadBot Mockup 1"
                className="mx-auto my-auto pt-20 md:pt-0"
                />
            </div>
        </div>  
    </section>
    </>
  );
};

export default UseCasesOld;