"use client"

import * as React from "react"
import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
} from "lucide-react"
import { Calendar, Home, Settings, ShoppingBasket, HeartPulse, GraduationCap, Cloud, CircleUser, Wallet } from "lucide-react"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
    navMain: [
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
            title: "Health",
            url: "#",
            icon: HeartPulse,
            group: true,
            items: [
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
    ],
    
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                {/* TODO */}
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
