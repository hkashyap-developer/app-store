"use client"

import React from 'react';

import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
  } from "@/components/ui/context-menu"

const contextMenu = () => {
  return (
    <div>


<ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[800px] items-center justify-center rounded-md border border-dashed text-sm">
       
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem inset>
          Rename
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Delete
          <ContextMenuShortcut>⌘D</ContextMenuShortcut>
        </ContextMenuItem>

        <ContextMenuRadioGroup value="pedro">
          <ContextMenuSeparator />
          <ContextMenuRadioItem value="pedro">
            Grid
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">Flex</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>


    </div>
  )
}

export default contextMenu


