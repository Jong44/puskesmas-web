import * as React from "react"
import { GalleryVerticalEnd, Link, Minus, Plus } from "lucide-react"
import Image from "next/image"

import { SearchForm } from "@/components/search-form"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Data Ibu",
      url: "#",
      items: [
        {
          title: "Daftar Ibu",
          url: "/data-ibu/daftar-ibu",
        },
        {
          title: "Rekam Medis Ibu",
          url: "/data-ibu/rekam-medis",
        },
      ],
    },
    {
      title: "Data Anak",
      url: "#",
      items: [
        {
          title: "Daftar Anak",
          url: "/data-anak/daftar-anak",
        },
        {
          title: "Rekam Medis Anak",
          url: "/data-anak/rekam-medis",
        },
      ],
    },
    {
      title: "Imunisasi",
      url: "#",
      items: [
        {
          title: "Jadwal Imunisasi",
          url: "/imunisasi/jadwal-imunisasi",
        },
        {
          title: "Riwayat Imunisasi",
          url: "/imunisasi/riwayat-imunisasi",
          isActive: true,
        },
        {
          title: "Cakupan Vaksinasi",
          url: "/imunisasi/cakupan-vaksinasi",
        },
      ],
    },
    {
      title: "Laporan",
      url: "#",
      items: [
        {
          title: "Laporan Imunisasi",
          url: "#",
        },
        {
          title: "Laporan Kesehatan Anak",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                 <Image src={'/logo.svg'} alt="Logo" width={16} height={16} />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">PoskesApp</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild> 
                <a href="/dashboard">
                  Dashboard
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            {data.navMain.map((item, index) => (
              <Collapsible
                key={item.title}
                defaultOpen={index === 1}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {item.title}{" "}
                      <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={item.isActive}
                            >
                              <a href={item.url}>{item.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
