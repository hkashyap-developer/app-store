import React from 'react'

import { RocketIcon } from "@radix-ui/react-icons"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons" 

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"




 


const page = () => {
  return (
  
    <>


    <Alert>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>

<Alert variant="destructive">
<ExclamationTriangleIcon className="h-4 w-4" />
<AlertTitle>Error</AlertTitle>
<AlertDescription>
  Your session has expired. Please log in again.
</AlertDescription>
</Alert>
</>

  )
}

export default page