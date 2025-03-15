import Link from "next/link"
import Image from "next/image"
import Icons from "../global/icons"
import { buttonVariants } from "../ui/button"
import { currentUser } from "@clerk/nextjs/server"
import { UserButton } from "@clerk/nextjs"
import LogoImg from "../../../public/assets/leadbot-logo-colored.png"
import ConfettiButton from "../global/ConfettiButton"

const Navbar = async () => {
	const user = await currentUser()

	return (
		<header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
			<div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
				<div className="flex items-start">
					<Link href="/" className="flex items-center gap-2">
						{/* <Icons.logo className="w-8 h-8" /> */}
						<Image src={LogoImg} alt="Logo" width={32} height={32} className="w-8 h-8" />
						<span className="text-lg font-medium">LeadBot AI</span>
					</Link>
				</div>

				<nav className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<ul className="flex items-center gap-8">
						<li className="hover:text-foreground/80 text-sm">
							<Link href="/">Get Started</Link>
						</li>
						<li className="hover:text-foreground/80 text-sm">
							<Link href="#features">Benefits</Link>
						</li>
						<li className="hover:text-foreground/80 text-sm">
							<Link href="#faqs">FAQs</Link>
						</li>
						<li className="hover:text-foreground/80 text-sm">
							<Link href="#testimonials">Testimonials</Link>
						</li>
					</ul>
				</nav>

				<div className="flex items-center gap-4">
					{ user ? (
						<UserButton />
					) : (
						<>
							<Link href="#pricing" className={buttonVariants({
									size: 'sm',
									variant: 'ghost',
									className: 'md:flex'
								})
							}>
								Pricing
							</Link>
							{/* https://api.ryseupsolutionsllc.com/widget/booking/jJQq6UkK5GhRam7F0lS9 */}
							<ConfettiButton />
						</>
					) }
				</div>
			</div>
		</header>
	)
}

export default Navbar