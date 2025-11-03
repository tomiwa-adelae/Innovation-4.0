import React from "react";
import SectionHeader from "./shared/SectionHeader";
import { Button } from "./ui/button";
import Link from "next/link";

export const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-sky-100 py-16 relative overflow-hidden">
      <SectionHeader title="About the Innovation Conference" />
      <div className="container pt-4 space-y-4 text-base leading-relaxed">
        <p>
          The <span className="text-primary">Innovation Conference</span> is an
          initiative powered by{" "}
          <span className="text-primary">
            Cornerstone International Foundation
          </span>
          , designed to nurture creativity, technology, and entrepreneurship
          across Africa. Our mission is to empower a generation of changemakers
          by connecting ideas, people, and opportunities that drive sustainable
          impact.
        </p>

        <p>
          Since its inception, the Innovation Conference has evolved into a
          leading platform where visionaries, startups, investors, and industry
          leaders converge to shape Africa’s innovation future. What began as an
          annual gathering has grown into a year-round ecosystem offering
          incubation programs, innovation challenges, and community-driven
          initiatives that transform bold ideas into scalable startups.
        </p>

        <p>
          Each edition explores emerging technologies, creative industries, and
          entrepreneurial solutions tackling Africa’s biggest challenges.
          Through keynote sessions, workshops, and mentorship, participants gain
          the tools and networks needed to turn vision into execution.
        </p>

        <p>
          Backed by Cornerstone International Foundation, our commitment goes
          beyond hosting conferences we build capacity, inspire innovation, and
          create pathways for young Africans to thrive in the digital economy.
          One of our flagship initiatives, the{" "}
          <span className="text-primary">School of Innovation</span>, extends
          this mission by equipping youth with digital and entrepreneurial
          skills for the future of work.
        </p>

        <p>
          Through the School of Innovation, learners gain access to courses in
          Digital Marketing, Web Development, Arduino Programming, and more —
          empowering them to turn creativity into real-world solutions.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Button size="lg" asChild>
            <Link href="/school-of-innovation">
              Explore the School of Innovation
            </Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/register">Join the Movement</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
