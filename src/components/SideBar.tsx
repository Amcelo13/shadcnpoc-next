'use client'
import React from 'react'
import {
  Calculator,
  Calendar,
  CreditCard,
  ReceiptEuro ,
  Inbox ,
  User,
  Settings,
  EarthLock,
  Bell,
  ImageIcon,
} from "lucide-react"
import { UserItem } from './UserItem'
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command"
import Image from 'next/image'

const SideBar = () => {
  const menuList = [
    {
      group: 'General',
      items : [
        {
          link :'/',
          text : 'Profile',
          icon: User
        },
        {
          link :'/',
          text : 'Inbox',
          icon: Inbox
        },
        {
          link :'/',
          text : 'Billing',
          icon: ReceiptEuro
        }
      ]
    },
    {
      group: 'Settings',
      items : [
        {
          link :'/',
          text : 'General Settings',
          icon: Settings
        },
        {
          link :'/',
          text : 'Privacy',
          icon: EarthLock
        },
        {
          link :'/',
          text : 'Notifications',
          icon: Bell
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
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          {/* <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Billing</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList> */}

            {
              menuList.map((menu, index) => {
                return (
                  <CommandGroup key={index} heading={menu.group}>
                    {
                      menu?.items?.map((item, number) => {
                        return (
                          <CommandItem key={number} className='flex gap-2'>
                            {item.text}
                          </CommandItem>
                        )
                      })
                    }
                  </CommandGroup>
                )
              })
            }
        </Command>

      </div>
      <div>Setting / Notifications</div>

    </div>
  )
}

export default SideBar