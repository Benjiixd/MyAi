"use client"
import { Calendar, Home, Settings, ShoppingBasket, HeartPulse, GraduationCap, Cloud, CircleUser, Wallet } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
    SidebarMenuSub,
    SidebarMenuSubItem,

} from "@/components/ui/sidebar"
import React from "react"
import { ChevronUp, ChevronDown, User2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

// Menu items.
const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Calendar",
        url: "/calendar",
        icon: Calendar,
    },
    {
        title: "Shopping",
        url: "/shopping",
        icon: ShoppingBasket,
    },
    {
        title: "Finance",
        url: "/finance",
        icon: Wallet,
    },
    {
        title: "Health(food, exercise, meditation, sleep)",
        url: "#",
        icon: HeartPulse,
        group: true,
        children: [
            { title: "Food", url: "#food", icon: CircleUser },
            { title: "Exercise", url: "#exercise", icon: CircleUser },
            { title: "Meditation", url: "#meditation", icon: CircleUser },
            { title: "Sleep", url: "#sleep", icon: CircleUser },
        ],
    },
    {
        title: "Studies",
        url: "#",
        icon: GraduationCap,
    },
    {
        title: "Cloud",
        url: "#",
        icon: Cloud,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Apps</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                item.group ? (
                                    <CollapsibleSidebarMenuItem key={item.title} item={item} />
                                ) : (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            ))}

                            {/* TODO: FIX THIS SO IT LOOKS NICER THAN RN */}
                            <Collapsible defaultOpen className="group/collapsible">
                                <SidebarMenuItem key="test">
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem />
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>

                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> Username
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuItem>
                                    <span>Account</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Billing</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Sign out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}

function CollapsibleSidebarMenuItem({ item }) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div>
            <SidebarMenuButton asChild onClick={() => setIsOpen(!isOpen)}>
                <div>
                    <item.icon />
                    {item.title}
                    {isOpen ? <ChevronUp /> : <ChevronDown />}
                </div>
            </SidebarMenuButton>
            {isOpen && (
                <div>
                    {item.children.map((child) => (
                        <SidebarMenuItem key={child.title}>
                            <SidebarMenuButton asChild>
                                <a href={child.url}>
                                    <child.icon />
                                    {child.title}
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </div>
            )}
        </div>
    );
}