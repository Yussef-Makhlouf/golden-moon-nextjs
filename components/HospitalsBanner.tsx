"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HospitalsBanner() {
  return (
    <section className="py-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-500/10 via-primary/10 to-emerald-500/10 border border-emerald-500/20"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-20" />
          </div>

          <div className="relative p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Logos Section */}
              <div className="flex items-center gap-8">
                {/* Golden Moon Logo */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-24 h-24 sm:w-32 sm:h-32"
                >
                  <Image
                    src="/logo.png"
                    alt="القمر الذهبي"
                    fill
                    className="object-contain"
                  />
                </motion.div>

                {/* Partnership Icon */}
                <div className="text-4xl text-emerald-600">×</div>

                {/* MOH Logo */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-24 h-24 sm:w-32 sm:h-32"
                >
                  <Image
                    src="/health.svg"
                    alt="وزارة الصحة السعودية"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>

              {/* Text Content */}
              <div className="text-center lg:text-right max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                    شاشاتنا تعرض في مستشفيات جدة
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    بالشراكة مع وزارة الصحة السعودية
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
} 