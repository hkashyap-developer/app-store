

import React from "react";

import Header from "@/components/custom/header/header"
import Carousel from "@/components/custom/carousel/carousel";
import BreadCrumb from "@/components/custom/breadcrumb/breadcrumb";
import Accordion from "@/components/custom/accordion/accordion";
import Buttons from "@/components/custom/buttons/buttons";
import Calendar from "@/components/custom/calendar/calendar";
import CalendarTwo from "@/components/custom/calendar/calendarTwo";
import Checkbox from "@/components/custom/checkbox/checkbox"
import Collapsible from "@/components/custom/collapsible/collapsible"
import Combobox from "@/components/custom/combobox/combobox"
import Command from "@/components/custom/command/command"
import ContextMenu from "@/components/custom/context-menu/context-menu"
import DataTable from "@/components/custom/data-table/data-table"
import DatePicker from "@/components/custom/date-picker/date-picker"
import Dialogue from "@/components/custom/dialogue/dialogue"
import Drawer from "@/components/custom/drawer/drawer"
import DropDownMenu from "@/components/custom/dropdown-menu/dropdown-menu"
import Form from "@/components/custom/form/form"
import HoverCard from "@/components/custom/hover-card/hover-card"
import Input from "@/components/custom/input/input"
import Otp from "@/components/custom/otp/otp"
import LabelCustom from "@/components/custom/label/label"
import Menubar from "@/components/custom/menubar/menubar"
import Testing from "@/components/custom/test/test"
import NavigationModule from "@/components/custom/navigation/navigation"
import Pagination from "@/components/custom/pagination/pagination"
import Popover from "@/components/custom/popover/popover"
import Progress from "@/components/custom/progress/progress"
import RadioGroup from "@/components/custom/radio-group/radio-group"
import Resizable from "@/components/custom/resizable/resizable"
import Scrollarea from "@/components/custom/scroll-area/scroll-area"
import Select from "@/components/custom/select/select"
import Seperator from "@/components/custom/separator/separator"
import Sheet from "@/components/custom/sheet/sheet"
import Skeleton from "@/components/custom/skeleton/skeleton"
import Slider from "@/components/custom/slider/slider"
import Sonner from "@/components/custom/sonner/sonner"
import Switch from "@/components/custom/switch/switch"
import Table from "@/components/custom/table/table"
import Tabs from "@/components/custom/tabs/tabs"
import Textarea from "@/components/custom/textarea/textarea"
import Toast from "@/components/custom/toast/toast"


import Toggle from "@/components/custom/toggle/toggle"

import ToggleGroup from "@/components/custom/toggle-group/toggle-group"



import Tooltip from "@/components/custom/tooltip/tooltip"







import Footer from "@/components/custom/footer/footer"




import { Badge } from "@/components/ui/badge"
import { badgeVariants } from "@/components/ui/badge"


import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />



      <div className="px-10">




      <BreadCrumb />


    <h1 className="text-4xl py-4 pb-10">
      ShadCN With Next.js&nbsp; 
      <Badge>Badge</Badge>
      <Badge variant="outline">Badge</Badge>
      <Link className={badgeVariants({ variant: "outline" })} href="/about">Badge</Link>
      <Badge variant="destructive">Destructive</Badge>
    </h1>

    <Carousel />

      <Accordion />
      <Buttons />


      <Calendar />
      <CalendarTwo />


      <div className="pb-10">
        <Checkbox />
      </div> 


      <div className="pb-10">
      <Collapsible />
      </div>


      <div className="pb-10">
      <Combobox />
      </div>


      <div className="pb-10 max-w-80">
      <Command />
      </div>  


      <div className="pb-10 max-w-80">
        <ContextMenu />
      </div>            


      <div className="pb-10 max-w-2xl">
        <DataTable />
      </div>    


      <div className="pb-10 max-w-2xl">
        <DatePicker />
      </div>          
      

      <div className="pb-10 max-w-2xl">
        <Dialogue />
      </div>       


      <div className="pb-10 max-w-2xl">
        <Drawer />
      </div>       




      <div className="pb-10 max-w-2xl  flex justify-center">
        <DropDownMenu />
      </div>       


      <div className="pb-10 max-w-2xl  flex justify-center">
        <Form />
      </div>       


      <div className="pb-10 max-w-2xl  flex justify-center">
        <HoverCard />
      </div>       
      

      <div className="pb-10 max-w-2xl">
        <Input />
      </div>       

      

      <div className="pb-10 max-w-2xl">
        <Testing />
      </div>     





      <div className="pb-10 max-w-2xl">
        <Otp />
      </div>       
     

      <div className="pb-10 max-w-2xl">
        <LabelCustom />
      </div>       
      

      <div className="pb-10 max-w-2xl">
        <Menubar />
      </div>       
      

      <div className="pb-80 max-w-2xl">
        <NavigationModule />
      </div>       
      

      <div className="pb-10">
        <Pagination />
      </div>       
      

      
      


      <div className="pb-10">
        <Popover />
      </div>       
      

      <div className="pb-10">
        <Progress />
      </div>   



      <div className="pb-10">
        <RadioGroup />
      </div>   



      <div className="pb-10">
        <Resizable />
      </div>   



      <div className="pb-10">
        <Scrollarea />
      </div>   


      <div className="pb-10 max-w-xl">
        <Select />
      </div>   



      <div className="pb-10 max-w-xl">
        <Seperator />
      </div>   



      <div className="pb-10 max-w-xl">
        <Sheet />
      </div>   
      
      <div className="pb-10 max-w-xl">
        <Skeleton />
      </div>   
      
      
      
      <div className="pb-10 max-w-xl">
        <Slider />
      </div>   
      
      

      <div className="pb-10 max-w-xl">
        <Sonner />
      </div>   
      


      
      <div className="pb-10 max-w-xl">
        <Switch />
      </div>   
      

      <div className="pb-10 max-w-xl">
        <Table />
      </div>   
      


      <div className="pb-10 max-w-xl">
        <Tabs />
      </div>   



      <div className="pb-10 max-w-xl">
        <Textarea />
      </div>        

      <div className="pb-10 max-w-xl">
        <Toast />
      </div>        



      <div className="pb-10 max-w-xl">
        <Toggle />
      </div>      




      <div className="pb-10 max-w-xl">
        <ToggleGroup />
      </div>              




      

      <div className="pb-10 max-w-xl">
        <Tooltip />
      </div>        


      



      </div>





      <Footer />      
    </>
  );
}