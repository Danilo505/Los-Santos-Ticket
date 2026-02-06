import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export function HomeLayout(){
    return(
    <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
            <Header />
            <Outlet />
        </SidebarInset>
    </SidebarProvider>
    );
}