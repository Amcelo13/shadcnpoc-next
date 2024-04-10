'use client'
import React from 'react'
import { ReceiptEuro, Inbox, User, Settings, EarthLock, Bell } from "lucide-react"
import { UserItem } from './UserItem'
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command"
import Image from 'next/image'

const SideBar = () => { 
  const menuList = [
    {
      group: 'General',
      items: [
        {
          link: '/',
          text: 'Profile',
          icon: <User/>
        },
        {
          link: '/',
          text: 'Inbox',
          icon: <Inbox/>
        },
        {
          link: '/',
          text: 'Billing',
          icon: <ReceiptEuro/>
        }
      ]
    },
    {
      group: 'Settings',
      items: [
        {
          link: '/',
          text: 'General Settings',
          icon: <Settings/>
        },
        {
          link: '/',
          text: 'Privacy',
          icon: <EarthLock/>
        },
        {
          link: '/',
          text: 'Notifications',
          icon: <Bell/>
        }
      ]
    }
  ]
  return (
    <div className='flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4'>

      <div >
        <UserItem />
      </div>

      <div className='grow'>
        <Command style={{ overflow :"visible"}}>
          <CommandList style={{ overflow :"visible"}}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandEmpty>No results found</CommandEmpty>
            {menuList.map((menu, index) => {
              return (
                <CommandGroup key={index} heading={menu.group}>
                  {
                    menu?.items?.map((item, number) => {
                      return (
                        <CommandItem key = {number} style={{display:"flex", gap:'1rem'}}>
                          {item.icon}
                          {item.text}
                        </CommandItem>
                      )
                    })
                  }
                </CommandGroup>
              )
            })
            }
          </CommandList>
        </Command>
      </div>
      <div>
        Setting / Notifications
      </div>

    </div>
  )
}

export default SideBar