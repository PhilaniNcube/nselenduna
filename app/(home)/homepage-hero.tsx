import { Button } from "@/components/ui/button";
import Image from "next/image";

const HomePageHero = () => {
  return (
			<section className="relative bg-accent">

				<div className="container ">
					<div className="flex flex-col  items-center justify-center text-center min-h-[450px]">
						<h1 className="max-w-2xl mx-auto text-4xl font-medium lg:text-6xl text-balance text-brand">
							Your Partner in Sustainable Success
						</h1>
						<p className="max-w-lg mx-auto mt-2 text-md text-zinc-700 text-balance">
							Design a future where tourism, conservation, and business
							strategies harmonize for long-term success and environmental
							responsibility.
						</p>
						<Button variant="outline" className="mt-4 rounded-full">
							Get In Touch
						</Button>
					</div>
				</div>
			</section>
		);
};
export default HomePageHero;
