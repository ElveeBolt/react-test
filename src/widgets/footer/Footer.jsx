import { userNav, mainNav, helpNav } from "./const"
import logo from "app/assets/images/logo.svg"



export function Footer() {
    return (
        <footer className="bg-white py-10 mt-auto border-t border-gray-200">
            <div className="container m-auto px-4">
                <div className="md:flex gap-4 mb-6 border-b border-gray-200">
                <div className="md:w-1/3 mb-5">
                    <img src={logo} alt="" className="w-16 mb-4"/>
                    <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, similique.</div>
                </div>
                <div className="md:w-1/3 mb-5">
                    <h2 className="text-md font-semibold mb-3">Меню</h2>
                    <ul className="flex flex-wrap gap-x-4 md:block">
                        {mainNav.map(({name, to}) => (
                            <li><a key={name} href={to} className="leading-7 text-gray-500 hover:text-blue-700">{name}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="md:w-1/3 mb-5">
                    <h2 className="text-md font-semibold mb-3">Пользователь</h2>
                    <ul className="flex flex-wrap gap-x-4 md:block">
                        {userNav.map(({name, to}) => (
                            <li><a key={name} href={to} className="leading-7 text-gray-500 hover:text-blue-700">{name}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="md:w-1/3 mb-5">
                    <h2 className="text-md font-semibold mb-3">Помощь и поддержка</h2>
                    <ul className="flex flex-wrap gap-x-4 md:block">
                        {helpNav.map(({name, to}) => (
                            <li><a key={name} href={to} className="leading-7 text-gray-500 hover:text-blue-700">{name}</a></li>
                        ))}
                    </ul>
                </div>
                </div>
                <div class="text-sm text-gray-500">
                    © 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
  }