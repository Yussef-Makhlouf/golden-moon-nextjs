"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
export default function Hero() {
  return (
<section className="min-h-[100dvh] bg-white dark:bg-gray-950 relative overflow-hidden">
  {/* خلفية متحركة محسنة */}
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.08 }}
      transition={{ duration: 1.5 }}
      className="absolute w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] -top-1/4 -right-1/4 rounded-full bg-primary/20 dark:bg-primary/10 blur-3xl"
    />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.06 }}
      transition={{ duration: 1.5, delay: 0.3 }}
      className="absolute w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] top-1/2 -left-1/4 rounded-full bg-secondary/20 dark:bg-secondary/10 blur-2xl"
    />
  </div>

  {/* المحتوى الرئيسي */}
  <div className="container mx-auto relative z-10">
    <div className="min-h-[100dvh] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 md:gap-16 lg:gap-20 py-16 md:py-20 lg:py-24">
      {/* محتوى النص */}
      <motion.div className="text-right space-y-8 md:space-y-10 order-2 lg:order-1">
        <div className="inline-block bg-accent/80 dark:bg-accent/20 backdrop-blur-sm px-4 md:px-6 py-2 rounded-full">
          <span className="text-xs md:text-sm text-primary dark:text-secondary">نحن نبتكر المستقبل</span>
        </div>
        
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-relaxed">
          <motion.span className="block text-primary dark:text-white mb-3">
            أطلق العنان
          </motion.span>
          <motion.span className="block text-secondary mb-3">
            لإبداعك
          </motion.span>
          <motion.span className="block text-primary dark:text-white">
            مع القمر الذهبي
          </motion.span>
        </h1>

        <p className="text-sm md:text-base text-muted-foreground dark:text-gray-300 max-w-xl mr-auto leading-loose">
          نقدم حلولًا إبداعية وشاملة للدعاية والإعلان والتسويق الرقمي لنجعل علامتك التجارية تتألق
        </p>

        <div className="flex flex-wrap gap-4 justify-end pt-6">
          <Button 
            size="lg" 
            variant="default"
            className="text-sm md:text-base px-6 py-4 rounded-xl bg-primary dark:bg-secondary hover:bg-primary/90 dark:hover:bg-secondary/90"
            aria-label="اكتشف خدماتنا"
          >
            <Link className="text-white dark:text-primary" href="#خدماتنا">
              اكتشف خدماتنا
            </Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-sm md:text-base px-6 py-4 rounded-xl border-primary dark:border-secondary text-primary dark:text-secondary hover:bg-primary/5 dark:hover:bg-secondary/5"
            aria-label="تواصل معنا"
          >
            <Link href="tel:0563009155">
              تواصل معنا
            </Link>
          </Button>
        </div>
      </motion.div>

      {/* العنصر المرئي */}
      <motion.div className="order-1 lg:order-2 relative w-full max-w-[70%] md:max-w-[60%] lg:max-w-full mx-auto">
        <div className="relative aspect-square">
          <div className="absolute inset-0">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 border-2 border-primary/10 dark:border-secondary/10 rounded-full"
                style={{
                  animation: `spin ${12 + i * 4}s linear infinite ${i * 2}s`,
                  transform: `scale(${1 - i * 0.15})`,
                }}
              />
            ))}
          </div>
          
          <div className="absolute inset-[15%] flex items-center justify-center">
            <motion.div className="relative w-full h-full">
              <div className=" dark:bg-accent/10 rounded-full" />
              <Image
                width={200}
                height={200}
                src="/logo1.jpg"
                alt="القمر الذهبي"
                className="w-full h-full object-contain p-8  rounded-full bg-white dark:bg-gray-900 shadow-lg dark:shadow-secondary/20"
                objectFit="cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>


  )
}

