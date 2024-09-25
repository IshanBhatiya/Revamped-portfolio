import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ishan Bhatia's Portfolio | Create Something Great!",
  description:
    "Welcome to Ishan Bhatia’s Full Stack Developer Portfolio! I am a skilled full stack developer specializing in MERN stack development, with expertise in JavaScript, React, Node.js, and Next.js. I create responsive web designs and custom web applications that are SEO-friendly and optimized for performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
   

        <meta
          name="keywords"
          content="full stack developer, MERN stack, React developer, Node.js, JavaScript, web development, frontend, backend, SEO-friendly, custom web applications, UI/UX design, Next.js, single page applications"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ishan Bhatia" />

        <meta name="DC.title" content="Ishan Bhatia | Full Stack Developer" />
        <meta name="DC.creator" content="Ishan Bhatia" />
        <meta
          name="DC.description"
          content="Portfolio of Ishan Bhatia, specializing in MERN stack development, React, Node.js, and SEO-friendly web applications."
        />
        <meta name="DC.language" content="en" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
