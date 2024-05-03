
 
import React from "react"

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
 


const mainApp = () => {

  const { toast } = useToast();

  return (
    <>
    <h2>Main App Content</h2>
    </>
  )
}

export default mainApp