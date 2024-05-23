"use client"

import { Skeleton } from "@/components/ui/skeleton"

import Image from 'next/image'



export default function SkeletonCard() {


    function myClick() {
        setTimeout(
          function() {
            document.getElementById('div1').style.display='none';
            document.getElementById('div2').style.display='none';
          }, 5000);
      }


    return (
    <>


    <div id="div1" className="flex flex-col space-y-3">
      <Image className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <p className="h-4 w-[250px]">TEST 1</p>
        <p className="h-4 w-[200px]">test </p>
      </div>
    </div>





    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>


    </>
  )
}
