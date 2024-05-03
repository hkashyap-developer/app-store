"use client"

import React from "react";
import Header from "@/components/custom/header/header"
import MainApp from "@/components/custom/mainApp/mainApp"
import Footer from "@/components/custom/footer/footer"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function Home() {
  return (
    <>
      <Header />
      <MainApp />

      <Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>


      <Footer />      
    </>
  );
}