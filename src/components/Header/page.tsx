import Image from "next/image";
import React from "react";
import { FlipWords } from "../ui/flip-words";

export default function Header() {
  const wordOne = ["0's", "1's", "0's"];
  const wordTwo = ["1's", "0's", "1's"];
  return (
    <>
      <section id="home" className="container">
        <div className="flex justify-between items-center min-w-full absolute top-2">
          <div>
            <h3 className="text-lg ms-3 text-yellow-400">Hey There!</h3>
          </div>

          <div className="flex flex-wrap">
            <a href="https://github.com/IshanBhatiya">
              <Image
                className="rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer"
                src="/assets/social/download.png"
                width={40}
                height={40}
                title="Git-Hub"
                alt="Picture of the Git-Hub"
              />
            </a>
            <a href="https://discordapp.com/users/1260548884825112631/">
              <Image
                className="rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer"
                src="/assets/social/discord.png"
                width={40}
                height={40}
                title="Discord"
                alt="Picture of the Discord"
              />
            </a>

            <a href="https://www.linkedin.com/in/ishan-bhatia-129321217/">
              <Image
                className="rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer"
                src="/assets/social/LinkedIn.png"
                width={40}
                height={40}
                title="Linked-In"
                alt="Picture of the Linked-In"
              />
            </a>

            <a href="https://www.instagram.com/ishaan.bhatia.12/">
              <Image
                className="rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer"
                src="/assets/social/instagram.png"
                width={40}
                height={40}
                title="Instagram"
                alt="Picture of the Instagram"
              />
            </a>

            <a href="https://www.facebook.com/ishan.bhatia.52">
              <Image
                className="rounded-[50%] hover:scale-125 transition-all duration-500 cursor-pointer me-4"
                src="/assets/social/facebook.png"
                width={40}
                height={40}
                title="FaceBook"
                alt="Picture of the FaceBook"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="">
          <div className="flex xl:flex-nowrap lg:flex-nowrap md:flex-nowrap flex-wrap-reverse w-auto justify-between items-center">
            <div className="">
              <div className="w-auto">
                <div>
                  <div className="h-auto px-4 xl:mt-0 lg:mt-0 md:mt-0 sm:-mt-10 mt-6">
                    <div className="text-lg md:text-sm mx-auto  font-normal text-neutral-600 dark:text-neutral-400">
                      I&apos;m{" "}
                      <span className="text-3xl text-purple-500">
                        Ishan Bhatia
                      </span>{" "}
                     ,Mumbai based in{" "}
                      <span className="text-3xl text-purple-500">Software Developer</span>{" "}
                      <br />
                      your&apos;s friendly tech wizard who turns tricky problems
                      into simple, user-friendly solutions. With a dash of
                      creativity and a love for innovation, I enjoy building
                      digital experiences that make people go, <br />{" "}
                      <span className="text-lg text-white">
                        “Wow, that’s awesome!”
                      </span>
                      <br />
                      Hop On Let&apos;s create something amazing! using
                      <FlipWords words={wordOne} />
                      and
                      <FlipWords words={wordTwo} />.
                    </div>

                    <div className="flex justify-around text-center w-auto my-16">
                      <h2 className="xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl text-[60px] text-orange-800">
                        3+ <br />
                        <p className="xl:text-[10px] lg:text-[8px] md:text-[8px] sm:text-[8px] md:leading-3 leading-3 text-[7px]">
                          Month&apos;s of <br /> Experience
                        </p>
                      </h2>
                      <h2 className="xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl text-[60px] text-orange-800">
                        10+
                        <p className="xl:text-[10px] lg:text-[8px] md:text-[8px] sm:text-[8px] md:leading-3 text-[7px]">
                          Solo Git-hub <br /> Projects
                        </p>
                      </h2>
                      <h2 className="xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl text-[60px] text-orange-800">
                        7+
                        <p className="xl:text-[10px] lg:text-[8px] md:text-[8px] sm:text-[8px] md:leading-3 text-[7px]">
                          Solo Website <br /> Deployed
                        </p>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-section xl:-mt-6 lg:mt-0 md:mt-0 mt-24 my-auto">
              <div className="text-center mx-auto ">
                <Image
                  className="rounded-[50%] md:w-[40rem] md:h-[15rem]"
                  src="/assets/profile.png"
                  width={400}
                  height={1200}
                  alt="Picture of the author"
                  loading="lazy"
                />

                <div className="mt-16">
                  <a href="https://drive.google.com/file/d/1hfk1hq5gshqo6lnBEKzAFILjcYv13IUj/view?usp=sharing">
                    <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
                      <span className="text-lg">See My Resume!</span>
                      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                        <div className="relative h-full w-10 bg-white/20"></div>
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
