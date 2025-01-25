import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Alexandria } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingButtons from "@/components/FloatingButtons"
import Script from 'next/script'

const alexandria = Alexandria({ subsets: ["arabic"], weight: ["400", "500", "700"] })

export const metadata = {
  title: "القمر الذهبي | وكالة الدعاية والإعلان الرائدة في جدة",
  description: "القمر الذهبي - شركة رائدة في مجال الدعاية والإعلان والتسويق الرقمي في جدة والمملكة العربية السعودية. نقدم خدمات التصميم، التسويق الرقمي، إدارة وسائل التواصل الاجتماعي، تصميم المواقع، والهوية البصرية.",
  keywords: "دعاية وإعلان جدة, تسويق رقمي جدة, تصميم مواقع السعودية, هوية بصرية جدة, سوشيال ميديا, حي الصفا جدة, شارع التحلية, تصميم جرافيك, علامة تجارية, تسويق الكتروني",
  openGraph: {
    title: "القمر الذهبي | وكالة الدعاية والإعلان الرائدة في جدة",
    description: "نقدم حلولاً إبداعية شاملة لتعزيز علامتك التجارية وزيادة وصولك إلى الجمهور المستهدف",
    type: "website",
    locale: "ar_SA",
    url: "https://gooldenmoon.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "القمر الذهبي | وكالة الدعاية والإعلان",
    description: "وكالة متكاملة للدعاية والإعلان والتسويق الرقمي في جدة",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://gooldenmoon.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <Script id="organization-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "شركة القمر الذهبي",
              "url": "https://gooldenmoon.com",
              "logo": "https://gooldenmoon.com/logo.png",
              "email": "info@goldenmoon.com",
              "telephone": ["+966562924514", "+966569773045", "+966563009155"],
              "sameAs": [
                "https://www.tiktok.com/@golden.moon.company",
                "https://www.instagram.com/golden.moon.company",
                "https://www.facebook.com/goldenmooncompany"
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+966562924514",
                  "contactType": "customer service",
                  "areaServed": "SA",
                  "availableLanguage": ["Arabic", "English"]
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "تقاطع شارع الأربعين مع شارع التحلية",
                "addressLocality": "جدة",
                "addressRegion": "حي الصفا",
                "addressCountry": "SA"
              }
            }
          `}
        </Script>
        <Script id="local-business-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "القمر الذهبي",
              "image": "https://gooldenmoon.com/logo.png",
              "email": "info@goldenmoon.com",
              "telephone": ["+966562924514", "+966569773045", "+966563009155"],
              "description": "وكالة متكاملة للدعاية والإعلان والتسويق الرقمي في جدة - خدمات التصميم والتسويق الرقمي وإدارة السوشيال ميديا",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "تقاطع شارع الأربعين مع شارع التحلية",
                "addressLocality": "جدة",
                "addressRegion": "حي الصفا",
                "addressCountry": "SA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "21.5433",
                "longitude": "39.1728"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"],
                "opens": "09:00",
                "closes": "21:00"
              }
            }
          `}
        </Script>
        <Script id="rating-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "خدمات القمر الذهبي للدعاية والإعلان",
              "description": "خدمات احترافية في مجال الدعاية والإعلان والتسويق الرقمي",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "850",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "عبدالله محمد"
                  },
                  "datePublished": "2024-01-15",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "reviewBody": "فريق محترف وخدمة ممتازة في التسويق الرقمي وتصميم الهوية البصرية"
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "سارة أحمد"
                  },
                  "datePublished": "2024-01-10",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "reviewBody": "تجربة رائعة في تصميم الهوية البصرية لشركتنا، نتائج مبهرة وخدمة احترافية"
                }
              ]
            }
          `}
        </Script>
      </head>
      <body className={alexandria.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <FloatingButtons />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
