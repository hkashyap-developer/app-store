import { Bold } from "lucide-react"
import { Italic } from "lucide-react"


import { Toggle } from "@/components/ui/toggle"

export default function ToggleDemo() {
  return (

    <div className="flex gap-3">

    <Toggle size="lg" variant="outline" aria-label="Toggle bold ">
      <Bold className="h-4 w-4" />
      &nbsp;Bold
    </Toggle>

    <Toggle size="lg" variant="outline" aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
      &nbsp;Italic      
    </Toggle>


    <Toggle size="sm" variant="outline" aria-label="Toggle bold ">
      <Bold className="h-4 w-4" />
      &nbsp;Bold
    </Toggle>

    <Toggle size="sm" variant="outline" aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
      &nbsp;Italic      
    </Toggle>   


    <Toggle size="sm" variant="outline" aria-label="Toggle bold" disabled>
      <Bold className="h-4 w-4" />
      &nbsp;Bold
    </Toggle>

    <Toggle size="sm" variant="outline" aria-label="Toggle italic" disabled>
      <Italic className="h-4 w-4" />
      &nbsp;Italic      
    </Toggle>        


    </div>



  )
}
