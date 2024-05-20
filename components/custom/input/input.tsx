import React from 'react'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"


const input = () => {



    return (
    <>
    
    <Input type="email" placeholder="Email" className="mb-8" />


    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Upload your picture</Label>
      <Input disabled id="picture" type="file" />
      <Button type="submit">Generate Poster</Button>
    </div>

    </>
    )



}

export default input