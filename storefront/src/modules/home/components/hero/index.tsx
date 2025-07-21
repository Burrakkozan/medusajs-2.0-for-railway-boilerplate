import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"

const Hero = () => {
  return (
   <div className="mx-auto max-w-10xl px-5 md:px-10 py-10">


    <div className="h-[75vh] w-full rounded-lg border-b border-ui-border-base relative bg-ui-bg-subtle">

    <Image
    src="/heros.png"
    alt="Hero"
    fill
    className="object-cover rounded-lg"
  />
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">


        </div>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal text-white"
          >
           Senin Modan - Senin Tarzın
          </Heading>
          <Heading
            level="h2"
            className="text-1xl leading-10 text-ui-fg-subtle font-normal text-white"
          >
            Modacin'in Stilini Keşfet, Farkını Her Adımda Hissettir.
          </Heading>
        </span>
        <a
          href="https://funkyton.com/medusajs-2-0-is-finally-here/"
          target="_blank"
        >
          <h1 style={{ textDecoration: "underline" }} className="text-white">
          Daha Fazlasını Keşfet
          </h1>
        </a>
      </div>
    </div>
    </div>
  )
}

export default Hero
