import { Button } from '@/components/ui/button';
import Image from 'next/image';

const HomepageExpertise = () => {
  return (
			<section className="py-10 lg:py-16">
				<div className="container">
					<div className="flex flex-col w-full gap-8 lg:justify-between lg:flex-row-reverse">
						<Image
							src="/images/safari.webp"
							alt="Safari"
							width={1920}
							height={1283}
              className="w-full object-cover rounded-lg lg:w-1/2 lg:h-[500px]"
						/>
						<div className="flex flex-col items-start justify-center">
							<h2 className="text-3xl font-semibold text-brand">
								Our Expertise
							</h2>
							<p className="max-w-lg mt-4 text-lg text-zinc-700">
								We are a team of experts in sustainable tourism, conservation,
								and business strategy. We help businesses and organizations
								design a future where tourism, conservation, and business
								strategies harmonize for long-term success and environmental
								responsibility.
							</p>
							<div className="flex flex-row items-center mt-4 space-x-3">
								<Button className="uppercase rounded-full bg-light text-brand hover:bg-brand hover:text-light">
									Contact
								</Button>
								<Button
									variant="outline"
									className="uppercase rounded-full text-brand"
								>
									Learn More
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
};
export default HomepageExpertise;
