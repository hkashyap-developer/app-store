
 
import React from "react"

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
 
import { Calendar } from "@/components/ui/calendar"


const mainApp = () => {

  const [date, setDate] = React.useState<Date | undefined>(new Date())

  const { toast } = useToast();

  return (
    <>
      <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  />

    <h2>Main App Content</h2>
    </>
  )
}

export default mainApp