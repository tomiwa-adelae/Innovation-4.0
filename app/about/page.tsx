// import InnovationLegacy from "@/components/InnovationLegacy";
// import MeetOrganizer from "@/components/MeetOrganizer";
// import OurMission from "@/components/OurMission";
// import OurVision from "@/components/OurVision";
// import Showcase from "@/components/shared/Showcase";
// import { Spotlight } from "@/components/ui/spotlight-new";

// import type { Metadata } from "next";
// export const metadata: Metadata = {
// 	title: "About Innovation 4.0 | Unlocking the Power of You",
// 	description:
// 		"Learn about the vision, mission, and impact of Innovation 4.0. Discover how we empower individuals and businesses to achieve greatness through innovation.",
// 	keywords:
// 		"about innovation 4.0, innovation conference, about us, mission, vision, leadership, digital transformation, entrepreneurship, leadership, technology, networking, business growth, conference, startup, future trends, john ogunjide, tomiwa, tomiwa adelae, innovation 3.0, innovation 4.0, innovation conference, conferences, conference, cornerstone international foundation, foundation, bill gate foundations, alternative to gates foundations, gates foundations, ACU, Ajayi Crowther University",
// };

// const page = () => {
// 	return (
// 		<div>
// 			<Showcase
// 				headline="About Innovation 4.0"
// 				description="Innovation 4.0 is more than a conference but a movement. Designed to ignite creativity, inspire action, and empower individuals to harness their full potential, this year's theme focuses on unlocking the power within YOU. Join thought leaders, innovators, and changemakers for an unforgettable experience."
// 				bgImage="https://res.cloudinary.com/dh0rc6p1c/image/upload/v1744308706/innovation/DSC_1397-Joe_Photography_zvroub.jpg"
// 				cta={[{ title: "Register", slug: "/register" }]}
// 			/>
// 			<div className="relative overflow-hidden">
// 				<Spotlight />
// 				<OurMission />
// 				<OurVision />
// 			</div>
// 			<MeetOrganizer />
// 			<InnovationLegacy />
// 		</div>
// 	);
// };

// export default page;

import InnovationLegacy from "@/components/InnovationLegacy";
import MeetOrganizer from "@/components/MeetOrganizer";
import OurMission from "@/components/OurMission";
import OurVision from "@/components/OurVision";
import Showcase from "@/components/shared/Showcase";
import { Spotlight } from "@/components/ui/spotlight-new";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Innovation 4.0 | Empowering Africa’s Next Generation of Innovators",
  description:
    "Learn about the vision, mission, and impact of the Innovation Conference — an initiative powered by Cornerstone International Foundation to nurture creativity, technology, and entrepreneurship across Africa.",
  keywords:
    "innovation conference, about innovation 4.0, innovation conference africa, startup ecosystem, incubation, entrepreneurship, technology, leadership, cornerstone international foundation, john ogunjide, tomiwa adelae, innovation hub, africa innovation, innovation 4.0, conference, AWS Activate, future of africa, startup funding, impact leadership, digital transformation",
};

const page = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <Showcase
        headline="About Innovation 4.0"
        description="Innovation 4.0 is more than a conference — it's a startup empowerment movement. Designed to ignite creativity, inspire collaboration, and accelerate innovation, we empower Africa’s next generation of founders, creators, and changemakers to unlock their full potential."
        bgImage="https://res.cloudinary.com/dh0rc6p1c/image/upload/v1744308706/innovation/DSC_1397-Joe_Photography_zvroub.jpg"
        cta={[{ title: "Join the Movement", slug: "/register" }]}
      />

      <div className="relative overflow-hidden">
        <Spotlight />

        {/* MISSION */}
        <section id="mission" className="container py-16">
          <OurMission />
        </section>

        {/* VISION */}
        <section id="vision" className="container py-16">
          <OurVision />
        </section>
      </div>

      {/* ORGANIZER SECTION */}
      <section
        id="organizer"
        className="bg-white py-16 relative overflow-hidden"
      >
        <Spotlight />
        <MeetOrganizer />
      </section>

      {/* LEGACY SECTION */}
      <section id="legacy" className="bg-white py-16 relative overflow-hidden">
        <Spotlight />
        <InnovationLegacy />
      </section>

      {/* FOUNDATION CONNECTION */}
      <section className="bg-primary text-white py-20 text-center px-6 md:px-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Powered by Cornerstone International Foundation
        </h2>
        <p className="text-base max-w-4xl mx-auto leading-relaxed">
          The Innovation Conference is an initiative of Cornerstone
          International Foundation, committed to equipping young Africans with
          the mindset, mentorship, and resources needed to build sustainable,
          high-impact ventures. Through our programs, partnerships, and
          innovation challenges, we are cultivating a new generation of
          visionary leaders who use technology and creativity to drive positive
          change across the continent.
        </p>
      </section>
    </div>
  );
};

export default page;
