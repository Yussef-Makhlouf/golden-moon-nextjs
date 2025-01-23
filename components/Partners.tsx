"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Building2, Users, Award, TrendingUp } from "lucide-react"

const partners = [
  {
    name: "مجموعة الفيصلية",
    logo: "/partners/partner1.png",
    category: "قطاع الأعمال",
    year: "2020",
    projects: "+50 مشروع"
  },
  {
    name: "مستشفى المواساة",
    logo: "/partners/partner2.png",
    category: "القطاع الطبي",
    year: "2019",
    projects: "+30 مشروع"
  },
  {
    name: "البنك الأهلي",
    logo: "/partners/partner3.png",
    category: "القطاع المالي",
    year: "2021",
    projects: "+25 مشروع"
  },
  {
    name: "جامعة الملك عبدالعزيز",
    logo: "/partners/partner4.png",
    category: "القطاع التعليمي",
    year: "2018",
    projects: "+40 مشروع"
  }
]

const stats = [
  {
    icon: Building2,
    value: "+200",
    label: "شريك نجاح",
    color: "text-blue-500"
  },
  {
    icon: Users,
    value: "+1000",
    label: "مشروع منجز",
    color: "text-green-500"
  },
  {
    icon: Award,
    value: "+15",
    label: "سنة خبرة",
    color: "text-amber-500"
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "نسبة رضا العملاء",
    color: "text-purple-500"
  }
]

export default function Partners() {
  return (
    <section id="partners" className="py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            شركاء
            <span className="text-primary block mt-2">النجاح</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            نفخر بشراكتنا مع كبرى الشركات والمؤسسات في المملكة
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-card hover:bg-muted/50 rounded-2xl p-6 transition-colors duration-300">
                <div className="aspect-square relative mb-6">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain p-6 filter group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">{partner.name}</h3>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{partner.category}</span>
                    <span>{partner.year}</span>
                  </div>
                  <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm inline-block">
                    {partner.projects}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`w-12 h-12 mx-auto rounded-xl bg-card flex items-center justify-center mb-4 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
