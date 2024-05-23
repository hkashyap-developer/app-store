"use client"

import { Skeleton } from "@/components/ui/skeleton"


// import { skeletonChange } from '@/app/global'


export default function SkeletonCard() {




    return (
    <>

 





    <div className="skeletonCstm flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>


   {/*skeletonChange()*/}

    </>
  )
}
