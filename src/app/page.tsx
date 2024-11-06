"use-client"
import Image from "next/image"
import nothingToSeeHereImg from "../../public/nothing-to-see-here.png"

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-col justify-center">
        <h1 className="text-center">Breytingar í gangi</h1>
        <span className="text-center">ekkert að sjá hér</span>
      </div>
      <Image alt="Nothing to see here" src={nothingToSeeHereImg} />
    </div>
  )
}
