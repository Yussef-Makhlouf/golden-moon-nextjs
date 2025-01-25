"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const advertisingServices = [
  {
    id: 1,
    title: "تركيب الكلادينج",
    image: "/img9.avif",
    gradient: "from-amber-600/30 via-yellow-500/30 to-transparent"
  },
  {
    id: 2,
    title: "صيانة الكلادينج",
    image: "/img8.avif",
    gradient: "from-yellow-600/30 via-amber-500/30 to-transparent"
  },
  {
    id: 3,
    title: "طباعة بنرات",
    image: "/img17.avif",
    gradient: "from-amber-500/30 via-yellow-600/30 to-transparent"
  },
  {
    id: 4,
    title: "طباعة فليكس",
    image: "/img18.avif",
    gradient: "from-yellow-500/30 via-amber-600/30 to-transparent"
  },
  {
    id: 5,
    title: "واجهات كلادينج",
    image: "/img20.avif",
    gradient: "from-amber-600/30 via-yellow-500/30 to-transparent"
  },
  {
    id: 6,
    title: "حروف بارزة",
    image: "/img2.avif",
    gradient: "from-yellow-600/30 via-amber-500/30 to-transparent"
  },
  {
    id: 7,
    title: "لوحات نيون",
    image: "/img9.avif",
    gradient: "from-amber-500/30 via-yellow-600/30 to-transparent"
  },
  {
    id: 8,
    title: "استيكرات",
    image: "/img16.avif",
    gradient: "from-yellow-500/30 via-amber-600/30 to-transparent"
  },
  {
    id: 9,
    title: "لوحات خارجية",
    image: "/img3.avif",
    gradient: "from-amber-600/30 via-yellow-500/30 to-transparent"
  },
  {
    id: 10,
    title: "لوحات داخلية",
    image: "https://images.unsplash.com/photo-1617791160588-241658c0f566?q=80&w=1964&auto=format&fit=crop",
    gradient: "from-yellow-600/30 via-amber-500/30 to-transparent"
  },
  {
    id: 11,
    title: "قص ليزر",
    image: "/img21.avif",
    gradient: "from-amber-500/30 via-yellow-600/30 to-transparent"
  },
  {
    id: 12,
    title: "طباعة الهويات البصريه",
    image: "/img4.avif",
    gradient: "from-yellow-500/30 via-amber-600/30 to-transparent"
  },
  {
    id: 13,
    title: "هداية تذكارية",
    image: "/img22.avif",
    gradient: "from-amber-600/30 via-yellow-500/30 to-transparent"
  },
  {
    id: 14,
    title: "لوحات أكريليك",
    image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=2071&auto=format&fit=crop",
    gradient: "from-yellow-600/30 via-amber-500/30 to-transparent"
  },
  {
    id: 15,
    title: "مطبوعات متنوعة",
    image: "/img5.avif",
    gradient: "from-amber-500/30 via-yellow-600/30 to-transparent"
  }
]

export default function Advertising() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* تأثير الخلفية الجديد */}


      <div className="container mx-auto px-4 relative z-10">
        {/* العنوان الرئيسي */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ repeat: Infinity, duration: 3, repeatType: "reverse" }}
            className="inline-block"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 pb-5 bg-[#590d3d] text-transparent bg-clip-text">
              شركة القمر الذهبي
            </h2>
          </motion.div>
          <p className="text-black text-xl lg:text-2xl mb-6 font-semibold">
            الشريك الاستراتيجي الأفضل في عالم الدعاية والإعلان
          </p>
          
          {/* أرقام الاتصال */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8"
          >
            <a href="tel:0562924514" className="group flex items-center gap-2 bg-gradient-to-r from-amber-900/40 to-yellow-900/40 px-6 py-3 rounded-full border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
              <span className="text-black text-2xl font-bold group-hover:text-black transition-colors">
                0562924514
              </span>
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-amber-500"
              >
                ☎️
              </motion.span>
            </a>
            <a href="tel:0569773045" className="group flex items-center gap-2 bg-gradient-to-r from-amber-900/40 to-yellow-900/40 px-6 py-3 rounded-full border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
              <span className="text-black text-2xl font-bold group-hover:text-amber-400 transition-colors">
                0569773045
              </span>
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-amber-500"
              >
                ☎️
              </motion.span>
            </a>
          </motion.div>

          <div className="flex items-center justify-center gap-2 text-black">
            <span className="text-2xl">📍</span>
            <p className="text-lg lg:text-xl">
              جدة حي الفيصلية - تقاطع التحلية مع المكرونة
            </p>
          </div>
        </motion.div>

        {/* معرض الصور */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 lg:gap-12">
          {advertisingServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group ${
                index % 2 === 0 ? 'lg:translate-y-10' : ''
              }`}
            >
              <motion.div
                layoutId={`card-${service.id}`}
                className="relative aspect-square rounded-3xl overflow-hidden cursor-pointer shadow-2xl shadow-black/30 border-2 border-amber-500/10 hover:border-amber-500/30 transition-colors duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                  priority={index < 6}
                  quality={95}
                />
                {/* <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} /> */}

                {/* عنوان الخدمة */}
                <motion.div
                  className="absolute inset-x-0 bottom-0 p-8 z-20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-xl lg:text-xl font-bold text-white text-right mb-3 drop-shadow-lg">
                    {service.title}
                  </h3>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    className="h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500"
                  />
                </motion.div>

                {/* تأثير التحويم */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-amber-950/90 to-transparent transition-opacity duration-300"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* شريط زخرفي */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="mt-20 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
        />
      </div>
    </section>
  )
}
