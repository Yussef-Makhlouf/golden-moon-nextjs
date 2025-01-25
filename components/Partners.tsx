"use client"

import Image from "next/image"
import { motion } from "framer-motion"
const partners = [
  {
    logo: "/2-01-300x204.webp",
  },
  {
    logo: "/3-01-300x204.webp",
  },
  {
    logo: "/4-300x106.webp",
  },
  {
    logo: "/5-01-300x204.webp",
  },
  {
    logo: "/6-01-300x204.webp",
  },
  {
    logo: "/7-01-300x204.webp",
  },
  {
    logo: "/8-232x300.webp",
  },
  {
    logo: "/2-01-300x204.webp",
  },
  {
    logo: "/3-01-300x204.webp",
  },
  {
    logo: "/4-300x106.webp",
  },
  {
    logo: "/5-01-300x204.webp",
  },
  {
    logo: "/6-01-300x204.webp",
  },
  {
    logo: "/7-01-300x204.webp",
  },
  {
    logo: "/8-232x300.webp",
  },
  {
    logo: "/2-01-300x204.webp",
  },
  {
    logo: "/3-01-300x204.webp",
  },
  {
    logo: "/4-300x106.webp",
  },
  {
    logo: "/5-01-300x204.webp",
  },
  {
    logo: "/6-01-300x204.webp",
  },
  {
    logo: "/7-01-300x204.webp",
  },
  {
    logo: "/8-232x300.webp",
  },
  {
    logo: "/2-01-300x204.webp",
  },
  {
    logo: "/3-01-300x204.webp",
  },
  {
    logo: "/4-300x106.webp",
  },
  {
    logo: "/5-01-300x204.webp",
  },
  {
    logo: "/6-01-300x204.webp",
  },
  {
    logo: "/7-01-300x204.webp",
  },
  {
    logo: "/8-232x300.webp",
  },
  {
    logo: "/2-01-300x204.webp",
  },
  {
    logo: "/3-01-300x204.webp",
  },
  {
    logo: "/4-300x106.webp",
  },
  {
    logo: "/5-01-300x204.webp",
  },
  {
    logo: "/6-01-300x204.webp",
  },
  {
    logo: "/7-01-300x204.webp",
  },
  {
    logo: "/8-232x300.webp",
  },
]

export default function Partners() {
  return (
    <section id="شركاؤنا" className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden mb-20">
          <motion.div 
            className="flex gap-8"
            animate={{
              x: ["100%", "-50%"]
            }}
            transition={{
              x: {
                duration: 15,
                repeat: Infinity,
                ease: "linear",
                delay: 1,
                repeatDelay: 1,

              }
            }}
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[150px] h-[150px] rounded-full overflow-hidden bg-white"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt="partner logo"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
