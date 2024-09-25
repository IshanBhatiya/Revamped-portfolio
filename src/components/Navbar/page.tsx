"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { 
  IconHome,
  IconInfoCircle,
  IconUsersPlus,
  IconContract,
  IconTools,
} from "@tabler/icons-react";
 

export default function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "About Me",
      icon: (
        <IconInfoCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Projects",
      icon: (
        <IconTools className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#project",
    },
    // {
    //   title: "Services",
    //   icon: (
    //     <IconContract className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#service",
    // },
    
    {
      title: "Contact Me",
      icon: (
        <IconUsersPlus className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
 
    
     
  ];
  return (
    <div className="flex items-center justify-center h-auto w-full ">
      <FloatingDock
        mobileClassName="left-24 translate-x-20 hidden sd:block"  
        items={links}
      />
    </div>
  );
}
