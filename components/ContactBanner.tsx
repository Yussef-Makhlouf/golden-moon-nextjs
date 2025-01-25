"use client"

import { MessageCircle,  Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactBanner() {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Company Information */}
          <div className="flex items-center gap-6">
            <Image
              src="/logo.png"
              alt="القمر الذهبي"
              width={90}
              height={90}
              className="rounded-full border-4 border-white/10 bg-white"
            />
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                القمر الذهبي
              </h2>
              <p className="text-white/80 text-lg">
                لخدمات الدعاية و الاعلان المتكاملة
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="tel:0563009155">
              <div className="flex items-center gap-3 bg-white/10 rounded-lg px-6 py-3 hover:bg-white/15 transition-colors">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-white font-medium">0563009155</span>
              </div>
            </Link>

            <Link href="tel:0569773045">
              <div className="flex items-center gap-3 bg-white/10 rounded-lg px-6 py-3 hover:bg-white/15 transition-colors">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-white font-medium">0569773045</span>
              </div>
            </Link>

            <Link href="https://wa.me/966563009155" target="_blank">
              <div className="flex items-center gap-3 bg-green-500/20 rounded-lg px-6 py-3 hover:bg-green-500/30 transition-colors">
                <MessageCircle className="w-5 h-5 text-white" />
                <span className="text-white font-medium">تواصل معنا عبر واتساب</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
