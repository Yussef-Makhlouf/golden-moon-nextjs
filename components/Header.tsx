"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full top-0 z-50 ${
      isScrolled ? 'bg-background/95 shadow-sm backdrop-blur-md' : 'bg-background'
    } transition-all duration-300`}>
      {/* Main Header Container */}
      <div className="max-w-[90rem] mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo Area */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 space-x-reverse">
              <Image
                src="/logo.png"
                alt="القمر الذهبي"
                width={32}
                height={32}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-sm sm:text-base lg:text-lg font-bold">القمر الذهبي</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block">للخدمات المتكاملة</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {['خدماتنا', 'من نحن', 'شركاؤنا', 'اتصل بنا'].map((item, index) => (
              <Link
                key={index}
                href={`#${item}`}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Actions Area */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <ModeToggle />
            <Button 
              variant="default"
              size="sm"
              className="hidden sm:inline-flex text-xs sm:text-sm whitespace-nowrap"
            >
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 ml-1.5" />
              0562924514
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden -ml-1.5 p-1.5 rounded-md hover:bg-muted"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t"
            >
              <div className="px-4 py-3 space-y-3">
                {['خدماتنا', 'من نحن', 'شركاؤنا', 'اتصل بنا'].map((item, index) => (
                  <Link
                    key={index}
                    href={`#${item}`}
                    className="block px-3 py-2 text-sm rounded-md hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
                <Button 
                  variant="default"
                  size="sm"
                  className="w-full mt-4 text-sm"
                >
                  <Phone className="ml-2 h-4 w-4" />
                  0562924514
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
