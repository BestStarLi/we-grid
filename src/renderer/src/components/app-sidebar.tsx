'use client'

import * as React from 'react'
import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  SquareTerminal
} from 'lucide-react'

import { NavMain } from './nav-main'
import { NavProjects } from './nav-projects'
import { NavUser } from './nav-user'
import { TeamSwitcher } from './team-switcher'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from '@renderer/components/ui/sidebar'
import { NavHomePage } from './nav-homepage'

// This is sample data.
const data = {
  user: {
    name: 'User',
    email: 'm@example.com',
    avatar: '/user/BestStar.jpg' // Use relative path
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise'
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup'
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free'
    }
  ],
  Information: [
    {
      name: 'Map',
      url: '#',
      icon: Map
    }
  ],
  mySchema: [
    {
      title: 'My Schema',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Create New Schema',
          url: '#'
        },
        {
          title: 'Use Sharing Schema',
          url: '#'
        }
      ]
    }
  ],
  myWorkSpace: [
    {
      title: 'My WorkSpace',
      url: '#',
      icon: Frame,
      isActive: true,
      items: [
        {
          title: 'Contract Blocks',
          url: '#'
        },
        {
          title: 'Select Blocks',
          url: '#'
        },
        {
          title: 'Operate Blocks',
          url: '#'
        },
        {
          title: 'Merge Blocks',
          url: '#'
        }
      ]
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavHomePage />
        <NavProjects projects={data.Information} />
        <NavMain items={data.mySchema} label="Schema" />
        <NavMain items={data.myWorkSpace} label="WorkSpace" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
