import { HomeLayout } from "@/layouts/home-layout";
import { SigninPage } from "@/pages/auth/signin/page";
import { TicketsPage } from "@/pages/home/tickets/page";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export function AppRoutes() {
    return (
        <BrowserRouter>
         <Routes>
            <Route element={<HomeLayout />}>
                 <Route path="/tickets" element={<TicketsPage />} />
            </Route>
            
            <Route path="/" element={<SigninPage />} />

            <Route path="*" element={<Navigate replace to="/" />} />
         </Routes>
        </BrowserRouter>
    )
}