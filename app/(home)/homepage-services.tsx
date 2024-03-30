const services = [
	{
		title: "Tourism Management",
		description:
			"Nselenduna Consulting empowers businesses and destinations within the tourism industry. Their expertise includes market research, destination development, marketing and promotion, sustainable practices, hospitality excellence, policy advocacy, and crisis management. They help clients understand market trends, enhance visitor experiences, adopt responsible tourism principles, optimize service quality, navigate policy landscapes, and proactively manage risks for long-term success.",
	},
	{
		title: "Conservation Management",
		description:
			"Nselenduna Consulting provides a comprehensive suite of conservation management services. They work with clients to develop science-based conservation strategies, expertly manage protected areas, assess and monitor biodiversity, and foster collaborative community engagement.  The company also guides sustainable resource management, advocates for environmental policies, and helps clients build resilience to climate change. Their approach blends scientific understanding with stakeholder participation to address complex conservation challenges.",
	},
	{
		title: "Strategic Development",
		description:
			"Nselenduna Consulting offers a range of strategic development services to propel businesses forward. They guide clients through strategic planning aligned with their vision and objectives, analyzing market dynamics and internal strengths to uncover growth opportunities. The team assists with market entry and expansion strategies, as well as optimizing corporate strategy across portfolios and diversification. To bolster success, they offer organizational effectiveness assessments, design, change management, and performance improvement services. Nselenduna Consulting even helps integrate sustainability and ESG considerations into business strategy and fosters innovation through tailored workshops and development processes.",
	},
];

const HomePageServices = () => {
  return <section className="min-h-[500px] bg-accent">
    <div className="container">
      <div className="flex flex-col items-center justify-center py-10 lg:py-24">
        <h2 className="text-3xl font-semibold text-brand">Our Services</h2>
        <div className="grid grid-cols-1 gap-8 mt-10 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="p-6 text-center bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-brand">{service.title}</h3>
              <p className="mt-4 text-sm text-gray-600 text-balance">{service.description}</p>
            </div>
          ))}
          </div>
      </div>
    </div>
  </section>;
};
export default HomePageServices;
