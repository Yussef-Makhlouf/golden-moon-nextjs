// "use client"

// import { motion } from "framer-motion"
// import { Printer, Shapes, PenTool, Scissors } from "lucide-react"
// import Image from "next/image"

// const mainServices = [
//   {
//     title: "واجهات كلادينج",
//     image: "/advertising/cladding.jpg",
//     width: "col-span-2",
//     height: "h-[400px]"
//   },
//   {
//     title: "لوحات خارجية",
//     image: "/advertising/outdoor.jpg",
//     width: "col-span-1",
//     height: "h-[400px]"
//   },
//   {
//     title: "حروف بارزة",
//     image: "/advertising/letters.jpg",
//     width: "col-span-1",
//     height: "h-[200px]"
//   },
//   {
//     title: "طباعة فلكس",
//     image: "/advertising/flex.jpg",
//     width: "col-span-2",
//     height: "h-[200px]"
//   }
// ]

// const printServices = [
//   {
//     title: "طباعة بانرات",
//     description: "تصميم وطباعة بانرات بجميع المقاسات",
//     image: "/advertising/banners.jpg",
//     icon: Printer
//   },
//   {
//     title: "قص ليزر",
//     description: "قص دقيق للمواد المختلفة",
//     image: "/advertising/laser.jpg",
//     icon: Scissors
//   },
//   {
//     title: "استيكرات",
//     description: "طباعة استيكرات بأعلى جودة",
//     image: "/advertising/stickers.jpg",
//     icon: PenTool
//   },
//   {
//     title: "دروع تذكارية",
//     description: "تصميم وتنفيذ دروع مميزة",
//     image: "/advertising/awards.jpg",
//     icon: Shapes
//   }
// ]

// export default function Advertising() {
//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         {/* Hero Banner */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="relative h-[50vh] rounded-3xl overflow-hidden mb-16"
//         >
//           <Image
//             src="/advertising/hero-banner.jpg"
//             alt="خدمات الدعاية والإعلان"
//             fill
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent">
//             <div className="h-full flex items-center p-8 sm:p-12">
//               <div className="max-w-xl">
//                 <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-4">
//                   حلول دعائية متكاملة
//                   <span className="text-primary block mt-2">بأعلى جودة</span>
//                 </h1>
//                 <p className="text-white/80 text-lg">
//                   نقدم خدمات الدعاية والإعلان المتكاملة في جدة والمملكة
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Main Services Grid */}
//         <div className="grid grid-cols-3 gap-4 mb-16">
//           {mainServices.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className={`relative ${service.width} ${service.height} group rounded-2xl overflow-hidden`}
//             >
//               <Image
//                 src={service.image}
//                 alt={service.title}
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <h3 className="text-white text-xl font-bold">{service.title}</h3>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Print Services */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {printServices.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="group relative bg-card rounded-2xl overflow-hidden"
//             >
//               <div className="relative h-48">
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>
//               <div className="p-6">
//                 <service.icon className="w-8 h-8 text-primary mb-4" />
//                 <h3 className="text-lg font-bold mb-2">{service.title}</h3>
//                 <p className="text-muted-foreground text-sm">{service.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const bannerServices = [
  {
    title: "واجهات كلادينج",
    description: "تصميم وتنفيذ واجهات عصرية",
    image: "/img2.avif",
    width: "lg:col-span-2",
    height: "h-[200px] lg:h-[400px]"
  },
  {
    title: "لوحات LED",
    description: "شاشات رقمية عالية الجودة",
    image: "/img13.avif",
    width: "lg:col-span-1",
    height: "h-[200px] lg:h-[400px]"
  }
]

const squareServices = [
  {
    title: "طباعة فلكس",
    image: "/img18.avif",
    category: "طباعة خارجية"
  },
  {
    title: "حروف بارزة",
    image: "/img9.avif",
    category: "واجهات"
  },
  {
    title: "قص ليزر",
    image: "/img19.avif",
    category: "تصنيع"
  },
  {
    title: "استيكرات",
    image: "/img24.avif",
    category: "طباعة"
  }
]

export default function Advertising() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Banner Grid */}
        <div className="grid lg:grid-cols-3 gap-4 mb-8">
          {bannerServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${service.width} group relative rounded-2xl overflow-hidden ${service.height}`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm lg:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Square Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {squareServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-xs text-white/80 mb-1">
                      {service.category}
                    </div>
                    <h3 className="text-sm lg:text-base font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {['طباعة أوت دور', 'لوحات نيون', 'دروع تذكارية', 'مطبوعات'].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-primary/5 rounded-xl p-4 text-center"
            >
              <span className="text-sm font-medium">{service}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
