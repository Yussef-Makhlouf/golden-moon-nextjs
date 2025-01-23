"use client"

import { motion } from "framer-motion"
import { Phone, Contact2 } from "lucide-react"

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a
        href="https://wa.me/966563009155"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <Contact2 className="w-6 h-6" />
      </motion.a>

      <motion.a
        href="tel:0563009155"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </div>
  )
}
