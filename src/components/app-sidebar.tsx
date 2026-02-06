import { LayoutGrid, Ticket } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import type { ComponentProps } from "react";
import { IMAGES } from "@/constants/images";

const data = {
    navMain: [
        {
            title: "Dashboard",
            icon: LayoutGrid,
            url: "/dashboard"
        },
        {
            title: "Tickets",
            icon: Ticket,
            url: "/tickets"
        },
    ],
};

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>){

    return(
        <Sidebar {...props}>
            <SidebarHeader>
                <img src={IMAGES.LogoLosSantos} alt="LosSantos" className="my-4 w-20 mx-auto object-cover"/>
            </SidebarHeader>
           
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {data.navMain.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <NavLink to={item.url}>
                                        {({isActive}) =>(
                                        <SidebarMenuButton size="lg" isActive={isActive}>
                                            <item.icon className="size-5" />
                                            {item.title}
                                        </SidebarMenuButton>
                                        )}
                                    </NavLink>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

        </Sidebar>
    );
}