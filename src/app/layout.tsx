import "@radix-ui/themes/styles.css"
import type { Metadata } from "next"
import Header from "./components/header"
import "./globals.css"
import { Providers } from "./providers"

export const metadata: Metadata = {
  title: "Ástráður Stefánsson",
  description: "Ástráður Stefánsson's personal website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={process.env.NODE_ENV === "production"}
    >
      <body>
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="h-screen w-full p-2.5">
            <div className="mx-auto min-h-full max-w-5xl">
              <Header />
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  )
}
