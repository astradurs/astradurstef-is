// app/providers.tsx
"use client"

import { NextUIProvider } from "@nextui-org/react"
import dynamic from "next/dynamic"

import { ThemeProvider as StaticProvider } from "next-themes"
const DynProvider = dynamic(
  () => import("next-themes").then((e) => e.ThemeProvider),
  {
    ssr: false,
  },
)

export function Providers({ children }: { children: React.ReactNode }) {
  const NextThemeProvider =
    process.env.NODE_ENV === "production" ? StaticProvider : DynProvider
  return (
    <NextUIProvider>
      <NextThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  )
}
