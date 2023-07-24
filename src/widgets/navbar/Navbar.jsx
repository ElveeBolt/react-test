import { ArrowRightOnRectangleIcon, MagnifyingGlassIcon, Squares2X2Icon, UserCircleIcon } from "@heroicons/react/24/outline";
import { NavbarButton } from "./NavbarButton";
import { NavbarKbd } from "./NavbarKbd";
import logo from "app/assets/images/logo.svg"


export function Navbar() {
    return (
        <nav class="bg-white fixed flex items-center h-14 w-full z-20 top-0 left-0 border-b border-gray-200">
            <div className="container m-auto px-4">
                <div className="flex justify-between">
                    <div className="flex md:w-3/12">
                        <a href="/" class="flex items-center">
                            <img src={logo} class="h-8 mr-3" alt=""/>
                            <span class="self-center text-2xl font-semibold whitespace-nowrap">Flowbite</span>
                        </a>
                    </div>
                    <div className="items-center md:w-6/12 hidden md:flex">
                        <button type="button" className="flex px-3 items-center w-full p-2 rounded-3xl bg-slate-100 hover:bg-slate-200 text-slate-400">
                        <MagnifyingGlassIcon className="w-5 h-5 me-2"/>
                            <span className="text-sm">Введите поисковый запрос...</span>
                            <span className="flex ml-auto items-center">
                                <NavbarKbd label="Ctrl" />
                                <NavbarKbd label="k" />
                            </span>
                        </button>
                    </div>
                    <div className="flex md:w-3/12 justify-end">
                        <NavbarButton Icon={MagnifyingGlassIcon} className="md:hidden" />
                        <NavbarButton Icon={UserCircleIcon} />
                        <NavbarButton Icon={Squares2X2Icon} htmlFor="my-drawer"/>
                        <NavbarButton Icon={ArrowRightOnRectangleIcon} />
                    </div>
                </div>
            </div>
        </nav>
    )
}