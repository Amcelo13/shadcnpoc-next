'use client'
import { BellIcon } from "lucide-react"
import { CommandDemo } from "./CommandDemo"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export const Header = () => {
  const [notifications, setNotifications]  = useState<any>([
    {
      text: "Notification 1",
      date: "2 hours ago",
      read : true
    },
    {
      text: "Notification 2",
      date: "4 hours ago",
      read : false  
    },
  ])
  return (
    <div className='grid grid-cols-2 gap-4 z p-4 border-b'>
      <CommandDemo />

      <div className="flex items-center justify-end gap-2">

        <DropdownMenu >

          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
            <div className={`absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 ${notifications.find((x:any)=> x.read) ? 'bg-green-500' : 'bg-neutral-200'}`}></div>

              <BellIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align={'end'} className="w-[200px]">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
             {notifications.map((notification: any, index: number) => <DropdownMenuItem key={index}
             className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2">
                
                <div className={`h-3 w-3 rounded-full my-1 ${!notification.read ? 'bg-green-500' : 'bg-neutral-200'}`}></div>

                <div>
                  <p>{notification.text}</p>
                  <p className="text-sm  text-neutral-500"> {notification.date} </p>
                </div>
             
             </DropdownMenuItem>)}
          </DropdownMenuContent>

        </DropdownMenu>

      </div>

    </div>
  )
}