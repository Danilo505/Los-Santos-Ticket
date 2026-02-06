import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ModeToggle } from "./mode-toggle";
import { SidebarTrigger } from "./ui/sidebar";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { AvatarImage } from "./ui/avatar";
import { ChevronDown, LogOut } from "lucide-react";
import { DropdownMenuSeparator, DropdownMenuShortcut } from "./ui/dropdown-menu";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="flex items-center  justify-between gap-2 border-b px-4 h-16 shrink-0">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <h2 className="text-lg hidden sm:block">
                    Bem vindo! <span className="font-semibold">Danilo Silva</span>
                </h2>
            </div>
            <div className="flex items-center gap-4">
                <ModeToggle />
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="lg" className="bg-muted rounded-full pr-2! pl-1.5!">
                            <Avatar>
                                <AvatarImage src="https://images.pexels.com/photos/164758/pexels-photo-164758.jpeg" alt="Danilo Silva" />
                                <AvatarFallback>DS</AvatarFallback>
                            </Avatar>
                            <span>Danilo Silva</span>
                            <ChevronDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40" align="end">
                        <DropdownMenuLabel>Siga-me</DropdownMenuLabel>
                        <DropdownMenuItem asChild>
                            <a href="#" target="_blank">
                                GitHub
                                </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <a href="#" target="_blank">
                                Linkedin
                                </a>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild variant="destructive">
                            <Link to="/">
                                Sair
                                <DropdownMenuShortcut>
                                    <LogOut />
                                </DropdownMenuShortcut>
                                </Link>
                        </DropdownMenuItem>                        
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}