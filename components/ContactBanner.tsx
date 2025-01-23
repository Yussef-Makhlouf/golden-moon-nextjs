"use client"

import { motion } from "framer-motion"
import { Contact,  Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactBanner() {
  return (
    <section className="relative h-[200px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/banner/contact-bg.jpg"
        alt="القمر الذهبي"
        fill
        className="object-cover"
      />
      
      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
      
      <div className="container mx-auto px-4 h-full relative">
        <div className="flex flex-col md:flex-row items-center justify-between h-full gap-6">
          {/* Logo and Company Name */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <Image
              src="/logo.png"
              alt="القمر الذهبي"


              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h2 className="text-2xl font-bold text-white">القمر الذهبي</h2>
              <p className="text-white/80 text-sm">للخدمات المتكاملة</p>
            </div>
          </motion.div>

          {/* Contact Numbers */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="tel:0563009155">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <Phone className="w-5 h-5 text-white" />
                <span className="text-white font-medium">0563009155</span>
              </motion.div>
            </Link>

            <Link href="tel:0569773045">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <Phone className="w-5 h-5 text-white" />
                <span className="text-white font-medium">0569773045</span>
              </motion.div>
            </Link>

            <Link href="https://wa.me/966563009155" target="_blank">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <Contact className="w-5 h-5 text-white" />
                <span className="text-white font-medium">واتساب</span>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
