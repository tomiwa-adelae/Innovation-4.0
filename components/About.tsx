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
          The Innovation Conference is an initiative powered by Cornerstone
          International Foundation, designed to nurture creativity, technology,
          and entrepreneurship across Africa. Our mission is to empower a
          generation of changemakers by connecting ideas, people, and
          opportunities that drive sustainable impact.
        </p>
        <p>
          Since its inception, the Innovation Conference has evolved into a
          leading platform where visionaries, startups, investors, and industry
          leaders converge to shape Africa’s innovation future. What began as an
          annual gathering has grown into a year-round ecosystem — offering
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
          beyond hosting conferences — we build capacity, inspire innovation,
          and create pathways for young Africans to thrive in the digital
          economy. Whether you're a student, founder, or organization, the
          Innovation Conference is your gateway to growth, collaboration, and
          lasting change.
        </p>
        <div className="pt-2">
          <Button size="lg" asChild>
            <Link href="/register">Join the Movement</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
