"use-client"
import { Flex, Grid, Heading, Text } from "@radix-ui/themes"
import Image from "next/image"
import nothingToSeeHereImg from "../../public/nothing-to-see-here.png"

export default function Page() {
  return (
    <Flex justify="center">
      <Grid gap="4">
        <Heading align="center">Breytingar í gangi</Heading>
        <Text align="center">Ekkert að sjá hér</Text>

        <Image alt="Nothing to see here" src={nothingToSeeHereImg} />
      </Grid>
    </Flex>
  )
}
