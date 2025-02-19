"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const PROJECTS = [
  { src: "/masaa.png", alt: "Project 1", url: "https://try-masaa.vercel.app/" },
  {
    src: "/krate-studio.png",
    alt: "Project 2",
    url: "https://demo-krate-studio.vercel.app/",
  },
  {
    src: "/placeholder.png",
    alt: "Project 3",
    url: "https://saas-bye-dearest-eight.vercel.app/",
  },

  { src: "/api.png", alt: "Project 4", url: "https://www.olbolosat.org" },
  {
    src: "/placeholder.png",
    alt: "Project 5",
    url: "https://centerformentorship.co.ke/",
  },
  {
    src: "/placeholder.png",
    alt: "Project 6",
    url: "https://joshua-wanjohi.framer.website/",
  },
];

const STACK = [
  { image: "/figma.png", name: "Next.js", width: 183, height: 287 },
  { image: "", name: "React.js", width: 16, height: 16 },
  { image: "", name: "Tailwind CSS", width: 16, height: 16 },
  { image: "", name: "Figma", width: 16, height: 16 },
  { image: "", name: "Adobe Photoshop", width: 16, height: 16 },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
        {/* Left Sidebar */}
        <div className="space-y-8">
          {/* Profile Header */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo.jpeg"
              alt="Profile"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h1 className="text-2xl font-mono">Brian Omondi.</h1>
              <p className="text-gray-400">Web developer</p>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in crafting visually striking and user-friendly
              digital experiences. With a passion for blending aesthetics and
              functionality, I bring ideas to life, creating innovative
              solutions in the dynamic world of web design.
            </p>
            <Button
              variant="outline"
              className="text-black dark:text-white rounded-full"
            >
              More about Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Twitter className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Youtube className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="text-gray-400 text-sm">
              <p>© by Brian O.</p>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-white">
                  Licensing
                </Link>
                <Link href="#" className="hover:text-white">
                  404
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          {/* Menu Button - Only show on mobile */}
          <div className="flex justify-end lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </div>

          {/* Projects Section */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-mono">My Projects</h2>
              <Button variant="ghost" size="icon">
                <span className="sr-only">View all projects</span>→
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PROJECTS.map((i) => (
                <Link href={i.url}>
                  <div
                    key={i.url}
                    className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={i.src}
                      alt={`Project ${i.alt}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Stack Section */}
          <section className="bg-blue-600 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-mono">My Stack</h2>
              <Button variant="ghost" size="icon" className="text-white">
                <span className="sr-only">View all tools</span>→
              </Button>
            </div>
            <div className="flex gap-4">
              {STACK.map((i) => (
                <div
                  key={i.name}
                  className=" h-12 flex items-center justify-center p-1 bg-white rounded-xl"
                >
                  <span className="p-2 font-bold text-black dark:text-white">
                    {i.name}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Contact and Clients Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Contact Section */}
            <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6">
              <h2 className="text-2xl font-mono mb-4">Contact</h2>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 text-black dark:text-white"
              >
                <span className="sr-only">Contact me</span>→
              </Button>
              <div className="flex flex-col gap-2 font-mono py-4">
                <span>{"Phone: (+254)795871518"}</span>
                <span>{"Email: omondi.brian.m@gmail.com"}</span>
              </div>
            </section>

            {/* Happy Clients Section */}
            <section className="bg-gray-900 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-4xl font-bold mb-4">100%</h3>
              <p className="text-gray-400">Happy Clients</p>
              <div className="flex -space-x-2 mt-4">
                {[1, 2, 3].map((i) => (
                  <Image
                    key={i}
                    src="/placeholder.svg"
                    alt={`Client ${i}`}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-gray-900"
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
