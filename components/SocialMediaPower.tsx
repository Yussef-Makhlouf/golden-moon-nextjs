"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, TrendingUp, Target,  Sparkles } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

const platforms = [
  { 
    icon: Facebook, 
    name: "فيسبوك", 
    color: "bg-gradient-to-br from-blue-500/20 to-blue-600/20 text-blue-500",
    stats: "+200K متابع"
  },
  { 
    icon: Instagram, 
    name: "انستجرام", 
    color: "bg-gradient-to-br from-pink-500/20 to-purple-500/20 text-pink-500",
    stats: "+150K متابع"
  },
  { 
    icon: TrendingUp, 
    name: "تيكتوك", 
    color: "bg-gradient-to-br from-black/20 to-gray-800/20 text-black dark:text-white",
    stats: "+100K متابع"
  },
]

const features = [
  {
    title: "تحسين الظهور",
    description: "نضمن وصول محتواك لأكبر شريحة من جمهورك المستهدف",
    icon: Target,
    stats: "95% معدل النجاح",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "محتوى إبداعي",
    description: "نصمم محتوى يعكس هويتك ويجذب جمهورك",
    icon: Sparkles,
    stats: "+1000 تصميم شهرياً",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "نمو مستمر",
    description: "نحقق نمواً ثابتاً ومستداماً لحسابك",
    icon: TrendingUp,
    stats: "+150% معدل النمو",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
]

export default function SocialMediaPower() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* خلفية متحركة */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-gradient" />
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center bg-primary/10 text-primary rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-4 h-4 ml-2" />
            <span className="text-sm font-medium">نحول أفكارك إلى واقع رقمي</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            نصنع لك حضوراً رقمياً
            <span className="text-primary block mt-2">يليق بطموحك</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* منصات التواصل */}
            <div className="grid grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`${platform.color} rounded-2xl p-6 text-center shadow-lg backdrop-blur-sm`}
                >
                  <platform.icon className="w-10 h-10 mx-auto mb-4" />
                  <div className="font-semibold mb-2">{platform.name}</div>
                  <div className="text-sm opacity-80">{platform.stats}</div>
                </motion.div>
              ))}
            </div>

            {/* المميزات */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`bg-gradient-to-r ${feature.gradient} p-6 rounded-2xl shadow-lg backdrop-blur-sm`}
                >
                  <div className="flex items-start gap-6">
                    <feature.icon className="w-12 h-12 text-primary shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground mb-3">{feature.description}</p>
                      <div className="text-primary font-bold">{feature.stats}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/img3.avif"
                alt="Social Media Dashboard"
                width={800}
                height={600}
                className="w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-6 right-6 bg-black/80 backdrop-blur-xl rounded-2xl p-4 text-white"
              >
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <div>
                    <div className="text-sm opacity-80">معدل النمو</div>
                    <div className="text-lg font-bold">+150%</div>
                  </div>
                </div>
              </motion.div>

              <div className="absolute bottom-6 left-0 right-0 text-center">
                <Button 
                  size="lg"
                  className="bg-primary/90 hover:bg-primary text-white shadow-lg"
                >
                  <Link href={"tel:0563009155"} className="flex items-center gap-2">
                  ابدأ رحلة نجاحك الآن
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
