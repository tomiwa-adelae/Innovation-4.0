"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight-new";
import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import { organizers, soiOrganizers } from "@/constants";
import Team from "@/components/Team";

import {
  Code,
  Cpu,
  Megaphone,
  PenTool,
  FileText,
  Globe,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";

const courses = [
  {
    title: "Digital Marketing",
    icon: Megaphone,
    description:
      "Master how to promote brands, grow audiences, and convert traffic into sales using modern digital tools.",
  },
  {
    title: "Social Media Management",
    icon: Globe,
    description:
      "Learn to build, manage, and grow social media communities for businesses and personal brands.",
  },
  {
    title: "Public Speaking",
    icon: PenTool,
    description:
      "Develop confidence and communication mastery for pitches, events, and leadership roles.",
  },
  {
    title: "CV Writing",
    icon: FileText,
    description:
      "Craft standout CVs and personal statements that open doors to global opportunities.",
  },
  {
    title: "Ghostwriting",
    icon: PenTool,
    description:
      "Learn professional writing techniques to author books, blogs, and thought-leadership content for others.",
  },
  {
    title: "Financial Literacy",
    icon: Wallet,
    description:
      "Understand money management, savings, and investment basics for financial freedom.",
  },
  {
    title: "Web Development",
    icon: Code,
    description:
      "Build modern, responsive websites using HTML, CSS, JavaScript, and React — from beginner to creator.",
  },
  {
    title: "Arduino & C++ Programming",
    icon: Cpu,
    description:
      "Get hands-on with Arduino boards, sensors, and C++ to build smart systems for engineering and science projects.",
  },
];

const Page = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-white to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="container relative mx-auto text-center px-6 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold text-primary mb-6"
          >
            School of Innovation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
          >
            Empowering young Africans with essential digital skills, innovative
            thinking, and entrepreneurial mindset to thrive in the future of
            work.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-8"
          >
            <Button asChild size="lg">
              <Link href="/register">Join the Movement</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
              width={1000}
              height={1000}
              src="https://innovation-gilt.vercel.app/_next/static/media/showcase.c4d8cd05.jpg"
              alt="School of Innovation"
              className="rounded-2xl shadow-lg size-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              About the School of Innovation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The <span className="text-primary">School of Innovation</span>{" "}
              equips Nigerian youth with essential technology and digital
              literacy transforming them into resilient innovators who apply
              digital skills, career guidance, and entrepreneurship for
              real-world impact.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our mission is to bridge the gap between ideas, education, and
              real-world innovation by equipping young Africans with the tools,
              mindset, and skills needed to thrive in the digital and creative
              economy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our vision is to become Africa’s leading hub for innovation-driven
              learning empowering students and professionals to build solutions,
              launch startups, and lead transformation in their communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary mb-6"
          >
            Courses We Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-muted-foreground mb-10"
          >
            Our curriculum blends practical digital skills, creative confidence,
            and real-world problem solving.
          </motion.p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-md transition-all"
              >
                <div className={`rounded-lg p-3 bg-primary/10 inline-block`}>
                  <course.icon className={`h-6 w-6 text-primary`} />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  {course.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {course.description}.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white py-16 relative overflow-hidden">
        <Spotlight />
        <SectionHeader title={"Meet The Team"} position="center" />
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <Image
            src={"/assets/images/john-ogunjide.jpg"}
            alt={"John Ogunjide's picture"}
            width={1000}
            height={1000}
            className="w-full h-full aspect-square object-cover rounded-lg"
          />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-primary uppercase font-semibold text-xl md:text-2xl">
              Ogunjide John Mayowa
            </h4>
            <h5 className="text-base text-gray-700 mt-1.5">Convener</h5>
            <p className="text-base mt-4">
              John Ogunjide is a visionary leader, entrepreneur, and advocate
              for innovation and personal transformation. With a passion for
              empowering individuals to reach their full potential, he founded
              the Innovation Conference as a platform to connect thinkers,
              creators, and change-makers. Under his leadership, the conference
              has grown into one of the most anticipated events, inspiring
              thousands across industries.
            </p>
          </div>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {soiOrganizers.map((organizer, index) => (
            <Team
              key={index}
              image={organizer.image}
              name={organizer.name}
              title={organizer.title}
            />
          ))}
        </div>
      </div>

      {/* Future Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary mb-6"
          >
            The Future of Innovation Learning
          </motion.h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
            Soon, the School of Innovation will evolve into a mobile-first
            learning platform — where students can watch lessons, track
            progress, and connect with mentors. We’re building a digital
            university for the next generation of African innovators.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/register">Be Part of the Launch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Page;
