import { Menu, School } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel,  DropdownMenuSeparator,  DropdownMenuTrigger } from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import DarkMode from '@/DarkMode';
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Separator } from '@radix-ui/react-dropdown-menu';

const Navbar = () => {
    const user = true;
    return (
        <div className='h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10'>
            {/* Desktop */}
            <div className='max-w-7xl mx-auto hidden justify-between items-center h-full gap-10 md:flex'>
                <div className='flex items-center gap-2'>
                    <School size={"30"} />
                    <h1 className='hidden md:block font-extrabold text-2xl'>LearnIt</h1>
                </div>
                <div className='flex items-center gap-9'>
                    {
                        user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            My Learning

                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Edit Profile

                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Log Out

                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        Dashboard
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <div className='flex items-center gap-2'>
                                <Button variant="outline">Login</Button>
                                <Button variant="solid">Sign Up</Button>
                            </div>
                        )
                    }
                    <DarkMode />
                </div>
            </div>
            {/* Mobile Device */}
            <div className='flex justify-between items-center h-full md:hidden px-4'>
                <h1 className='font-extrabold text-2xl'>LearnIt</h1>
                <MobileNavbar />
            </div>
        </div>
    )
}

export default Navbar

const MobileNavbar = () => {
    const role = "instuctor";
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size='icon' className="rounded-full bg-gray-200 hover:bg-gray-400" variant="outline">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetHeader className="flex flex-row items-center justify-between mt-2">
                    <SheetTitle>LearnIt</SheetTitle>
                    <DarkMode />
                </SheetHeader>
                <Separator className='mr-2' />
                <nav className='flex flex-col space-y-4'>
                    <span>My Learning</span>
                    <span>Edit Profile</span>
                    <p>Log Out</p>
                </nav>
                {
                    role === "instuctor" && (
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit">Dashboard</Button>
                            </SheetClose>
                        </SheetFooter>
                    )
                }
            </SheetContent>
        </Sheet>
    )
}