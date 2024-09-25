import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div className="container my-20">
        <h1 className="text-3xl text-center">My Expertise</h1>

        <div className="mt-5">
          <div className="border border-spacing-0.5 p-5 w-[98vw]">
            <Marquee>
              <div className="flex gap-2">
                <div className="border border-gray-900 bg-slate-900 w-32 h-28">
                  <Image
                    className=" hover:scale-125 transition-all duration-500 cursor-pointer my-5 mx-auto"
                    src="/assets/F/html-96.png"
                    width={80}
                    height={80}
                    title="HTML"
                    alt="Picture of the Html"
                  />
                </div>
                <div className="border border-gray-500 w-32 h-28">
                  <Image
                    className=" hover:scale-125 transition-all duration-500 cursor-pointer my-5 mx-auto"
                    src="/assets/F/css-200.png"
                    width={80}
                    height={80}
                    title="Css"
                    alt="Picture of the CSS"
                  />
                </div>
                <div className="border border-gray-500 w-32 h-28">
                  <Image
                    className=" hover:scale-125 transition-all duration-500 cursor-pointer my-5 mx-auto"
                    src="/assets/F/javaScript.svg"
                    width={80}
                    height={80}
                    title="javaScript"
                    alt="Picture of the javaScript"
                  />
                </div>
                <div className="border border-gray-500 w-32 h-28">
                  <Image
                    className=" hover:scale-125 transition-all duration-500 cursor-pointer my-5 mx-auto"
                    src="/assets/F/react.svg"
                    width={80}
                    height={80}
                    title="React"
                    alt="Picture of the React"
                  />
                </div>
                <div className="border border-gray-500 w-32 h-28">
                  <Image
                    className="hover:scale-125 transition-all duration-500 cursor-pointer my-5 mx-auto"
                    src="/assets/F/angular.svg"
                    width={80}
                    height={80}
                    title="Angular"
                    alt="Picture of the Angular"
                  />
                </div>
                <div className="border border-gray-500 w-32 h-28">
                  <Image
                    className=" hover:scale-125 transition-all duration-500 cursor-pointer my-5 mx-auto"
                    src="/assets/F/bootStrap.svg"
                    width={80}
                    height={80}
                    title="BootStrap"
                    alt="Picture of the BootStrap"
                  />
                </div>
                <div className="border border-gray-500 w-32 h-28">
                  <Image
                    className="rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer my-5 mx-auto"
                    src="/assets/F/tailwind.png"
                    width={80}
                    height={80}
                    title="Tailwind"
                    alt="Picture of the Tailwind"
                  />
                </div>

                <div className="border border-gray-500 w-32 h-28">
                  <Image
                    className="hover:scale-125 transition-all duration-500 cursor-pointer my-5 mx-auto"
                    src="/assets/B/java.svg"
                    width={80}
                    height={80}
                    title="JAVA"
                    alt="Picture of the JAVA"
                  />
                </div>
                <div className="border border-gray-500 w-32 h-28">
                  <Image
                    className="hover:scale-125 transition-all duration-500 cursor-pointer my-5 mx-auto"
                    src="/assets/B/spring-boot-96.png"
                    width={80}
                    height={80}
                    title="SpringBoot"
                    alt="Picture of the SpringBoot"
                  />
                </div>
                <div className="border border-gray-500 w-32 h-28">
                  <Image
                    className="hover:scale-125 transition-all duration-500 cursor-pointer my-5 mx-auto"
                    src="/assets/B/express-js-96.png"
                    width={80}
                    height={80}
                    title="Express"
                    alt="Picture of the Express"
                  />
                </div>
                <div className="border border-gray-500 w-32 h-28">
                  <Image
                    className="hover:scale-125 transition-all duration-500 cursor-pointer my-5 mx-auto"
                    src="/assets/B/node.svg"
                    width={80}
                    height={80}
                    title="Node"
                    alt="Picture of the Node"
                  />
                </div>

                <div className="border border-gray-500 w-32 h-28">
                  <Image
                    className="hover:scale-125 transition-all duration-500 cursor-pointer my-5 mx-auto"
                    src="/assets/DB/mongodb-96.png"
                    width={80}
                    height={80}
                    title="Mongo Database"
                    alt="Picture of the Mongo Database"
                  />
                </div>
                <div className="border border-gray-500 w-32 h-28 me-3">
                  <Image
                    className="hover:scale-125 transition-all duration-500 cursor-pointer my-5 mx-auto mix-blend-darken"
                    src="/assets/DB/mysql-48.png"
                    width={80}
                    height={80}
                    title="MySql"
                    alt="Picture of the MySql"
                  />
                </div>
              </div>
            </Marquee>
          </div>

          <div className="lg:px-[10rem] py-10 md:px-[1rem] sm:px-[1rem]">
            <p className="mt-8 ">
              I am proficient in a diverse range of technologies that empower me
              to build robust and scalable web applications. <br />
              My skill set includes:
            </p>
            <ul className="mt-5">
              <li className="mt-3">
                <span className="text-2xl font-bold text-yellow-400">
                  Java & Spring Boot :{" "}
                </span>{" "}
                Leveraging the power of Java and the Spring Boot framework, I
                develop secure and efficient backend services. My experience
                includes creating RESTful APIs that seamlessly integrate with
                various front-end technologies.
              </li>
              <li className="mt-3">
                <span className="text-2xl font-bold text-yellow-400">
                  {" "}
                  Angular & React:
                </span>{" "}
                I utilize Angular and React to create dynamic and responsive
                user interfaces. My expertise in these frameworks allows me to
                build single-page applications (SPAs) that deliver a smooth user
                experience.
              </li>
              <li className="mt-3 ">
                <span className="text-2xl font-bold text-yellow-400">Next.js:</span> With
                Next.js, I enhance my React applications by implementing
                server-side rendering and static site generation, optimizing
                performance and SEO capabilities.
              </li>
              <li className="mt-3">
                <span className="text-2xl font-bold text-yellow-400">Node.js:</span> I
                employ Node.js for building fast and scalable server-side
                applications. My knowledge of Express.js further aids in
                developing RESTful services that communicate effectively with
                front-end frameworks.
              </li>
              <li className="mt-3">
                <span className="text-2xl font-bold text-yellow-400">
                  Tailwind CSS & Bootstrap:
                </span>{" "}
                I utilize Tailwind CSS for its utility-first approach to
                styling, enabling rapid design iterations while maintaining
                consistency. Additionally, I leverage Bootstrap for responsive
                design components that enhance user interface development.
              </li>
            </ul>

            <h5 className="mt-4">
              This combination of skills allows me to tackle complex projects
              efficiently, ensuring high-quality deliverables that meet client
              expectations. Feel free to adjust any section to better fit your
              personal style or specific experiences!
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
