import { Container, Icons, Wrapper } from "@/components"
import { Button } from "@/components/ui/button"
import SectionBadge from "@/components/ui/section-badge"
import { reviews } from "@/constants"
import { ArrowRight, ChevronRight, User, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Marquee from "@/components/ui/marquee"
import { LampContainer } from "@/components/ui/lamp"
import { Input } from "@/components/ui/input"
import FAQs from "@/components/sections/FAQ"
import { LogoTicker } from "@/components/sections/LogoTicker"
import TechStack from "@/components/sections/TechStack"
import PricingSectionTwo from "@/components/sections/FeatureComponent"
import InteractiveVis from "@/components/sections/InteractiveVideo"
import UseCases from "@/components/sections/UseCases"
import { pricingCards } from "../../constants"
import { PricingCards } from "@/components/sections/PricingCards"
import AudioVis from "@/components/global/AudioVis"
import AnimatedCards from "@/components/sections/AnimatedCards"


const HomePage = () => {
	const firstRow = reviews.slice(0, Math.floor(reviews.length / 2))
	const secondRow = reviews.slice(Math.floor(reviews.length / 2))

	return (
		<section className="w-full relative flex flex-col items-center justify-center px-4 md:px-0 py-8">
			{/* Hero */}
			<Wrapper>
				<Container>
				<div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_35%_50%_at_50%_0%,#000_66%,transparent_110%)] -z-10 h-[150vh]"></div>

				<div className="w-full absolute inset-0 h-screen">
					{/* <SparklesCore
						id="tsparticlesfullpage"
						background="transparent"
						minSize={0.33}
						maxSize={0.86}
						particleDensity={125}
						className="w-full h-full"
						particleColor="#000000"
					/> */}
				</div>
					<div className="flex flex-col items-center justify-center py-20 w-full">
						<button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
							<span>
								<span className="spark mask-gradient absolute inset-0 h-full w-full animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,_transparent_0_340deg,_white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
							</span>
							<span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
							<span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/20" />
							<span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
								<Image src="/icons/sparkles-dark.svg" alt="✨" width={24} height={24} className="w-4 h-4" />
								Introducing LeadBot AI 2.0
								<ChevronRight className="w-4 h-4" />
							</span>
						</button>

						<div className="flex flex-col items-center mt-8 mx-auto w-full">
							<h1 className="text-4xl md:text-6xl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-300 text-transparent">
							We Build Top-Performing AI Agents for SMEs! 
							</h1>
							<p className="text-base md:text-lg text-foreground/80 mt-6 text-center pb-6 md:pb-0">
							Our AI Chatbots and Live Call Agents can increase your revenue, cut costs, and save you time. Additionally, we provide text-based chatbots.
							</p>
							<p className="text-base md:text-lg text-foreground/80 text-center pb-12">
							Check out our AI recorder conversions below.
							</p>
							
							<div className="mx-auto my-auto">
								<AudioVis />
							</div>
							<div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
								<Link href="https://api.ryseupsolutionsllc.com/widget/booking/jJQq6UkK5GhRam7F0lS9" target="_blank" className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 md:gap-8 shadow-2xl shadow-foreground/40 cursor-pointer select-none">
									<p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:marker:pr-0">
										✨ {" "} Get a FREE Demo for LeadBot AI 
									</p>
									<Button size="sm" className="rounded-full hidden lg:flex border border-foreground/20">
										SCHEDULE NOW
										<ArrowRight className="w-4 h-4 ml-4" />
									</Button>
								</Link>
							</div>
						</div>

						<div className="md:hidden flex relative items-center justify-center mt-8 md:mt-12 w-full">
							<Link href="https://api.ryseupsolutionsllc.com/widget/booking/jJQq6UkK5GhRam7F0lS9" target="_blank" className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 md:gap-8 shadow-2xl shadow-foreground/40 cursor-pointer select-none">
									<Button size="sm" className="rounded-full border-foreground/20 md:hidden">
										GET STARTED
									<ArrowRight className="w-4 h-4 ml-4" />
								</Button>
							</Link>
						</div>

						<div className="relative flex items-center mx-auto py-10 md:py-20 w-full">
							<div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 -translate-y-1/2 h-3/4 inset-0 blur-[10rem]" />
							{/* <div className="-m-2 md:-m-4 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:rounded-2xl bg-opacity-50 backdrop-blur-lg">

								<div className="relative">
								</div>

								<Image src="/assets/demo-light.gif" alt="Dashboard" width={1200} height={1200} className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border" />
								<BorderBeam size={250} duration={12} delay={9} />
							</div> */}
						</div>
						<TechStack />
					</div>
				</Container>
			</Wrapper>


			<span className="" id="niche" /> 
			<Wrapper>
				<Container>
					<div className="flex flex-col md:items-center md:justify-center sm:justify-start py-20 w-full ">
						<div className="mt-24">
							<SectionBadge 
								title="Who is it made for?"
							/>
						</div>
						<h2 className="text-3xl lg:text-4xl font-semibold mt-6 ">
							Get The Most Out of LeadBot AI 2.0
						</h2>
						<p className="text-muted-foreground mt-6 pb-24 md:align-center">
							Our LeadBot AI 2.0 is built on a reliable Teck-Stack that will help you convert organic/paid visitors into long-term clients via Voice Calls, IVRs, Social Media Comments & Direct Messages, SMS, or Live Chat (we have a widget for that too!).
						</p>
						<UseCases />
					</div>
				</Container>
			</Wrapper>


			{/* How it works 
			<Wrapper className="flex flex-col items-center justify-center py-12 relative w-[90vw]">
				<Container>
					<div className="max-w-md md:mx-auto text-start md:text-center">
						<SectionBadge title="The Process" />
						<h2 className="text-3xl lg:text-4xl font-semibold mt-6">
						3 easy steps to getting the most out of LeadBot AI 2.0
						</h2>
						<p className="text-muted-foreground mt-6">
						Start converting organic/paid visitors into long-term clients via DMs, Social Media, SMS or Live Chat (we have a widget for that too!).
						</p>
					</div>
				</Container>
				<Container>
					<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
						<div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 lg:first:border-none first:border-gray-900">
							{
								perks.map(perk => (
									<div key={perk.title} className="flex flex-col items-start py-4 lg:px-8 lg:py-6">
										<div className="flex items-center justify-center">
											<perk.icon className="w-8 h-8" />
										</div>
										<h3 className="text-lg font-medium mt-4">{perk.title}</h3>
										<p className="text-muted-foreground mt-2 text-start">{perk.info}</p>
									</div>
								))
							}
						</div>
					</div>
				</Container>
			</Wrapper>*/}

			<span className="pb-12" id="features" />
			{/* Features */}
			<Wrapper className="flex flex-col items-center justify-center py-12 relative w-[90vw]">
				<Container>
					<div className="max-w-md md:mx-auto text-start md:text-center">
						<SectionBadge title="Performence boosting Benefits" />
						<h2 className="text-3xl lg:text-4xl font-semibold mt-6">
						Benefits That Boost Revenue!
						</h2>
						{/* <p className="text-muted-foreground mt-6 ">
						By using LeadBot AI, you can reduce costs, increase MRR, and save time.</p> */}
					</div>
					<PricingSectionTwo />
				</Container>
				{/* <div>
					<FeaturesCards />
				</div>
				<Container>
					<div className="flex items-center justify-center mx-auto w-[90vw]">
						{/* <Icons.feature className="w-auto h-80" /> 
						<Image src={aiChatbotImg} alt="Logo" className="w-72 h-78" />
					</div>
				</Container>
				<Container>
					<div className="flex flex-col items-center justify-center py-10 ">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-8 lg:py-6 w-full gap-8">
							{features.map(feature => (
								<div key={feature.title} className="flex flex-col items-start px-0">
									<div className="flex items-center justify-center">
										<feature.icon className="w-8 h-8" />
									</div>
									<h3 className="text-lg font-medium mt-4">{feature.title}</h3>
									<p className="text-muted-foreground mt-2 text-start">{feature.info}</p>
								</div>
							))}
						</div>
					</div>
				</Container> */}
				<AnimatedCards />
			</Wrapper>

			<span className="pt-48" id="pricing" />

			{/* Pricing */}
			<Wrapper className="flex flex-col items-center justify-center py-12 relative">
				<Container>
					<div className="max-w-md md:mx-auto text-start md:text-center">
						<SectionBadge title="Pricing" />
						<h2 className="text-3xl lg:text-4xl font-semibold mt-6">
						Get AI-powered agents with LeadBot 
						</h2>
						<p className="text-muted-foreground mt-6 mb-12">
						Choosing the right plan for your business is the first step.  
						Keep in mind these packages are for both Voice Agents and Text Chatbots.
						<br></br><br></br>
						Schedule a <b>FREE demo</b> to find out more about our Chatbots Package.
						</p>
					</div>
				</Container>
				<Container className="flex items-center justify-center">
					<PricingCards pricingCards={pricingCards} />
				</Container>
			</Wrapper>


			<span className="pb-48" id="faqs" />

			{/* FAQs */}
			<Wrapper className="flex flex-col items-center justify-center relative">
				<Container>
					<div className="max-w-3xl md:mx-auto text-start md:text-center">
						<SectionBadge title="Frequently Asked Questions" />
						<h2 className="text-3xl lg:text-4xl font-semibold mt-6">
							FAQs About LeadBot AI
						</h2>
						{/* <p className="text-muted-foreground mt-6">
							Learn how LeadBot AI 2.0 can help your business soar. Here are some of the most common questions we get from our clients.
						</p> */}
						<FAQs />
					</div>
				</Container>
			</Wrapper>


			<span className="pb-48" id="testimonials" />

			{/* Testimonials */}
			<Wrapper className="flex flex-col items-center justify-center pb-12 relative">
				<Container>
					<div className="max-w-md md:mx-auto text-start md:text-center">
						<SectionBadge title="The real deal from real people" />
						<h2 className="text-3xl lg:text-4xl font-semibold mt-6">
						Our Clients Say It&apos;s Awesome!
						</h2>
						<p className="text-muted-foreground mt-6">
						Learn how LeadBot AI 2.0 empowers businesses of all sizes.
						</p>
					</div>
				</Container>
				<Container>
					<div className="py-10 md:py-20 w-full">
						<div className="relative flex flex-col items-center justify-center h-full w-full overflow-hidden py-6">
							<Marquee pauseOnHover className="[--duration:90s] select-none">
								{ firstRow.map(review => (
									<figure
										key={review.companyname}
										className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-zinc-50/[.1] bg-background hover:bg-zinc-50/[.15]"
									>
										<div className="flex flex-row items-center gap-2">
											<User className="w-6 h-6" />
											<div className="flex flex-col">
												<figcaption className="text-sm font-medium">
													{ review.name }
												</figcaption>
												<p className="text-xs font-medium text-muted-foreground">
													{ review.companyname }
												</p>
											</div>
										</div>
										<blockquote className="mt-2 text-sm">
											{ review.body }
										</blockquote>
									</figure>
								)) }
							</Marquee>

							<Marquee reverse pauseOnHover className="[--duration:90s] select-none">
								{ secondRow.map(review => (
									<figure
										key={review.companyname}
										className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-zinc-50/[.1] bg-background hover:bg-zinc-50/[.15]"
									>
										<div className="flex flex-row items-center gap-2">
											<User className="w-6 h-6" />
											<div className="flex flex-col">
												<figcaption className="text-sm font-medium">
													{ review.name }
												</figcaption>
												<p className="text-xs font-medium text-muted-foreground">
													{ review.companyname }
												</p>
											</div>
										</div>
										<blockquote className="mt-2 text-sm">
											{ review.body }
										</blockquote>
									</figure>
								)) }
							</Marquee>
							
							{/* Overlay left & right */}
							<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background" />
							<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background" />
						</div>
					</div>
				</Container>
			</Wrapper>			


			{/* <span className="" id="integrations" />
			<IntegrationsHero /> */}
			<div className="items-center justify-center pb-24">
				<LogoTicker />
			</div>

			<span className="" id="CTA" />
			
			{/* Newsletter */}
			<Wrapper className="flex flex-col items-center justify-center relative">
			<div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_35%_50%_at_50%_0%,#000_66%,transparent_110%)] -z-10 h-[150vh]"></div>
				<Container>
					<LampContainer>
						<div className="flex flex-col items-center justify-center relative w-full text-center max-w-3xl">
							<h2 className="text-4xl lg:text-5xl xl:text-5xl lg:!leading-snug font-semibold pt-96 mt-48">
							Want to see LeadBot AI 2.0 in action?
							</h2>
							<p className="text-muted-foreground mt-12">
							The fastest chatbot you've ever seen, supports Facebook, Instagram, SMS, Live-chat widgets, email and more!
							</p>
							<Button variant="white" className="mt-12" asChild>
								<Link href="https://api.ryseupsolutionsllc.com/widget/booking/jJQq6UkK5GhRam7F0lS9" target="_blank">
								SCHEDULE A FREE DEMO HERE
									<ArrowRight className="w-4 h-4 ml-2" />
								</Link>
							</Button>
						</div>
					</LampContainer>
				</Container>
				<Container className="relative -mt-96">
					<div className="flex items-center justify-center w-full">
						<div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8 ">
							<div className="flex flex-col items-start gap-4 w-full ">
								<h4 className="text-xl md:text-2xl font-semibold">
									Join Our Newsletter!
								</h4>
								<p className="text-base text-muted-foreground">
								Stay up to date with everything LeadBot AI
								</p>
							</div>
							<div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
								<form className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs">
									<Input 
										type="email"
										placeholder="Enter your email"
										className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
										required
									/>
									<Button 
										type="submit" 
										variant="secondary"
										size="sm" 
										className="w-full md:w-max"
									>
										Subscribe
									</Button>
								</form>
								<p className="text-xs text-muted-foreground">
									By subscribing you agree with our {" "} <Link href="https://ryseupsolutionsllc.com/privacy-policy" target="_blank" className="text-primary-foreground">Privacy Policy</Link>
								</p>
							</div>
						</div>
					</div>
				</Container>
							
				<div>
					{/* <script async
						src="https://widgets.leadconnectorhq.com/loader.js"  
						data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" 
						data-widget-id="66839669dd58561bb9bbe4e9"  > 
					</script> */}
				</div>

			</Wrapper>
		</section>
	)
}

export default HomePage
