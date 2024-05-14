"use client"

import React from 'react'

import { Calendar } from "@/components/ui/calendar"


const Calander = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className=""
  />
  )
}

export default Calander