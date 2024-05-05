

import React from "react";
import Header from "@/components/custom/header/header"

import Footer from "@/components/custom/footer/footer"



import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"




export default function Home() {
  return (
    <>
      <Header />




    <h1 className="text-4xl">ACCORDION</h1>

    <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>    
  </Accordion>



      <Footer />      
    </>
  );
}