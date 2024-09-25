import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function AboutInfo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal">
            <span className="text-blue-600 text-2xl">
              SIGMOID FROGS CONSULTANCY LLP
            </span>
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
            As FULL STACK DEVELOPER
          </p>
          <div>
            <div className="mb-8">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Developing Robust Applications and maintain web applications
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Participate in architectural design decisions, considering
                performance, scalability, and maintainability.
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Writing clean, efficient, and scalable code.
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Stay updated with emerging technologies
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Work closely with cross-functional teams
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/assets/company.jpg"
                alt="startup template"
                width={300}
                height={300}
                className="rounded-lg h-20 md:h-20 lg:h-44 lg:w-35  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 sm:text-lg md:text-2xl font-normal">
            <span className="text-blue-600 text-2xl">
              National Institute of Information Technology
            </span>
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
            PGP In Full Stack Software Engineering Course
          </p>

          <div>
            <div className="mb-8">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Comprehensive Curriculum: Covers front-end, back-end, and SDLC concepts.
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Hands-On Learning: Engage in projects, including a capstone full-stack application.
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Industry-Relevant Skills: Learn JavaScript, React, Node.js, and MongoDB etc.
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Flexible Learning Options: Live classes and recorded sessions for self-paced learning.
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Networking Opportunities: Connect with industry experts and peers for career growth.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/Niit.png"
              alt="hero template"
              width={300}
              height={300}
              className="rounded-lg h-20 md:h-20 lg:h-44 lg:w-35  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Graduation 2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 sm:text-lg text-xl md:text-2xl lg:text-2xl font-normal">
            <span className="text-blue-600 text-2xl">
              Himachal Pradesh University
            </span>
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
            BCA : Bachelor&apos;s In Computer Application
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/graduation.jpg"
              alt="hero template"
              width={300}
              height={300}
              className="rounded-lg  h-20 md:h-20 lg:h-44 lg:w-35  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <div id="about" className="w-full">
        <Timeline data={data} />
      </div>
    </>
  );
}
