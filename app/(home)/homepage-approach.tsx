import Image from "next/image";

const HomePageApproach = () => {
  return (
			<section>
				<div className="container py-10 md:py-20">
					<div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
						<div className="w-full">
							<div>
								<span className="flex mb-3 space-x-3">
									<div className="w-[2px] bg-brand rounded-md" />
									<h2 className="text-xl font-semibold text-center text-brand">
										Expertise and Experience
									</h2>
								</span>

								<p className="max-w-xl text-sm text-zinc-700">
									Our team brings together a diverse range of expertise and
									experience in conservation biology, ecology, natural resource
									management, sustainability, and community development,
									strategy and commerce ensuring that clients benefit from the
									latest scientific knowledge and leading practices.
								</p>
							</div>
							<div className="my-6">
								<span className="flex mb-3 space-x-3">
									<div className="w-[2px] bg-brand rounded-md" />
									<h2 className="text-xl font-semibold text-center text-brand">
										Holistic Approach
									</h2>
								</span>

								<p className="max-w-xl text-sm text-zinc-700">
									We take a holistic approach to conservation management,
									considering the interconnectedness of ecological, social, and
									economic factors and integrating multiple disciplines and
									perspectives into our consulting services.
								</p>
							</div>
							<div className="my-6">
								<span className="flex mb-3 space-x-3">
									<div className="w-[2px] bg-brand rounded-md" />
									<h2 className="text-xl font-semibold text-center text-brand">
										Global Network
									</h2>
								</span>

								<p className="max-w-xl text-sm text-zinc-700">
									With a vast network of partners worldwide, we have the
									resources and connections to offer unparalleled access to
									expertise on a global scale. We value collaboration and
									partnership, working closely with clients, stakeholders, and
									experts to co-create solutions, build consensus, and achieve
									shared conservation goals.
								</p>
							</div>
							<div className="my-6">
								<span className="flex mb-3 space-x-3">
									<div className="w-[2px] bg-brand rounded-md" />
									<h2 className="text-xl font-semibold text-center text-brand">
										Innovative Thinking
									</h2>
								</span>

								<p className="max-w-xl text-sm text-zinc-700">
									We pride ourselves on our creativity, innovation, and
									forward-thinking approach to problem-solving, leveraging
									emerging trends, technologies, and leading practices to drive
									success and create competitive advantages for our clients.
								</p>
							</div>
							<div className="my-6">
								<span className="flex mb-3 space-x-3">
									<div className="w-[2px] bg-brand rounded-md" />
									<h2 className="text-xl font-semibold text-center text-brand">
										Impact and Results
									</h2>
								</span>

								<p className="max-w-xl text-sm text-zinc-700">
									Our ultimate goal is to make a positive impact on the ground
									and deliver tangible results that contribute to the
									conservation of biodiversity, the protection of ecosystems,
									and the sustainable management of natural resources.
								</p>
							</div>
						</div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/plain.jpg"
                alt="Conservation Approach"
                width={800}
                height={600}
                className="object-cover w-3/4 rounded-full shadow-lg aspect-square"
              />
            </div>
					</div>
				</div>
			</section>
		);
};
export default HomePageApproach;
