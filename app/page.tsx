import Image from "next/image";
import HomePageHero from "./(home)/homepage-hero";
import HomepageExpertise from "./(home)/homepage-expertise";
import HomePageServices from "./(home)/homepage-services";
import HomePageApproach from "./(home)/homepage-approach";

export default function Home() {
  return (
    <main className="">
     <HomePageHero />
     <HomepageExpertise />
     <HomePageServices />
     <HomePageApproach />
    </main>
  );
}
