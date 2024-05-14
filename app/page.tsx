

import React from "react";

import Header from "@/components/custom/header/header"

import Carousel from "@/components/custom/carousel/carousel";

import BreadCrumb from "@/components/custom/breadcrumb/breadcrumb";
import Accordion from "@/components/custom/accordion/accordion";
import Buttons from "@/components/custom/buttons/buttons";
import Calendar from "@/components/custom/calendar/calendar";
import CalendarTwo from "@/components/custom/calendar/calendarTwo";
import Checkbox from "@/components/custom/checkbox/checkbox"
import Collapsible from "@/components/custom/collapsible/collapsible"
import Combobox from "@/components/custom/combobox/combobox"
import Command from "@/components/custom/command/command"
import ContextMenu from "@/components/custom/context-menu/context-menu"


import Footer from "@/components/custom/footer/footer"

import { Badge } from "@/components/ui/badge"
import { badgeVariants } from "@/components/ui/badge"



import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />



      <div className="px-10">




      <BreadCrumb />


    <h1 className="text-4xl py-4 pb-10">
      ShadCN With Next.js&nbsp; 
      <Badge>Badge</Badge>
      <Badge variant="outline">Badge</Badge>
      <Link className={badgeVariants({ variant: "outline" })} href="/about">Badge</Link>
      <Badge variant="destructive">Destructive</Badge>
    </h1>

    <Carousel />

      <Accordion />
      <Buttons />


      <Calendar />
      <CalendarTwo />


      <div className="pb-10">
        <Checkbox />
      </div> 


      <div className="pb-10">
      <Collapsible />
      </div>


      <div className="pb-10">
      <Combobox />
      </div>


      <div className="pb-10 max-w-80">
      <Command />
      </div>  


      <div className="pb-10 max-w-80">
      <ContextMenu />
      </div>            





      



      </div>





      <Footer />      
    </>
  );
}