import { AboutInfo } from "@/components/AboutInfo/page";
import Header from "@/components/Header/page";
import Navbar from "@/components/Navbar/page";
import { Projects } from "@/components/Projects/page";
import Skills from "@/components/Skills/page";
import ContactUs from "@/components/Contactus/page";
import Footer from "@/components/Footer/page";
import React from "react";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Header />
      <Skills/>
      <Projects/>
      <AboutInfo />
      <ContactUs/>
      <Footer/>
    </div>
  );
}
