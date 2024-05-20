"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export default function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(30), 500)
    return () => clearTimeout(timer)
  }, [])

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 1000)
    return () => clearTimeout(timer)
  }, [])

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(81), 1500)
    return () => clearTimeout(timer)
  }, [])

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 2000)
    return () => clearTimeout(timer)
  }, [])  

  return <Progress value={progress} className="w-[60%]" />
}
