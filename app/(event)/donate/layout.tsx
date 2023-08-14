import "@/styles/globals.css"
import Image from "next/image"
import backgroundImage from "@/public/images/donate-background.png"
import { Analytics } from "@vercel/analytics/react"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

interface LayoutProps {
  children: React.ReactNode
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col items-center">
            <div className="absolute -z-10 h-full w-full">
              <Image
                alt="Background"
                src={backgroundImage.src}
                blurDataURL={backgroundImage.blurDataURL}
                fill
                objectFit="cover"
                quality={100}
                placeholder="blur"
              />
            </div>
            {children}
          </div>
          <TailwindIndicator />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
