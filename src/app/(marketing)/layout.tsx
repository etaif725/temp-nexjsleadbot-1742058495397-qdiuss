import { Footer, Navbar } from "@/components";
import { RyseupAIAgentWidget } from "@/components/global/ryseupAIAgent";

interface Props {
	children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
	return (
		<div className="flex flex-col items-center w-full">
			<Navbar />
				{children}
				<RyseupAIAgentWidget userData={undefined} />
			<Footer />
		</div>
	)
};

export default MarketingLayout
