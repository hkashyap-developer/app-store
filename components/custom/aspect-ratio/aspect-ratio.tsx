import React from 'react'
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Logo from "@/public/developer.jpg"

const aspectRatio = () => {
  return (
<div className="w-[100%]">
  <AspectRatio ratio={10 / 6.6}>
    <Image src={Logo} alt="Image" className="object-cover" />
  </AspectRatio>
</div>
  )
}

export default aspectRatio