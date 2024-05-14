

import React from 'react'

import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'

import { ChevronRight } from "lucide-react"
import { Mail } from "lucide-react"
import { Loader2 } from "lucide-react"

const Buttons = () => {
  return (
    <div className="py-10 flex flex-wrap gap-x-4 gap-y-4">


        <Button variant="outline">Button</Button>
        <Link className={buttonVariants({ variant: "outline" })} href="/about">About Us</Link>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>

        <Button variant="outline" size="icon">
        <ChevronRight className="h-4 w-4" />
        </Button>

        <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>       

        <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
        </Button>         

        <Button asChild>
        <Link href="/about">About</Link>
        </Button>


    </div>
  )
}

export default Buttons