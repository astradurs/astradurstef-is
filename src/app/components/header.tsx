"use client"

import { Flex, TabNav } from "@radix-ui/themes"
import { usePathname } from "next/navigation"
import { ThemeSwitcher } from "./theme-switcher"

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  return (
    <Flex justify="between">
      <Flex>
        <TabNav.Root>
          <TabNav.Link href="/" active={isHome}>
            Heim
          </TabNav.Link>
        </TabNav.Root>
      </Flex>

      <ThemeSwitcher />
    </Flex>
  )
}
