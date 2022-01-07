import React from "react";
import logo from '../assets/fandomDAO.png'
import { SiDiscord, SiInstagram, SiTwitter } from 'react-icons/si';

export default function Sidebar() {
  return (
    <div class="relative min-h-screen md:flex">
        <aside class="h-screen sticky top-0">
            <div class="sidebar bg-blue-800 text-blue-100 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
                <div class="flex flex-col items-center w-16 h-auto overflow-hidden text-indigo-300 bg-indigo-900">
                    <a class="flex items-center justify-center mt-4" href="#home">
                         <img src={logo} alt="logo" height={30} width={30} title="FandomDAO"/>
                    </a>
                    <div class="flex flex-col items-center mt-28">
                        <a class="flex items-center justify-center w-12 h-12 mt-96 rounded hover:bg-indigo-700" href="https://www.instagram.com/">
                            <h1><SiInstagram style={{fontSize: '30px'}}/></h1>
                        </a>
                        <a class="flex items-center justify-center w-12 h-12 mt-5 rounded hover:bg-indigo-700" href="https://twitter.com/fandomdao">
                            <h1><SiTwitter style={{fontSize: '30px'}}/></h1>
                        </a>
                        <a class="flex items-center justify-center w-12 h-12 mt-4 rounded hover:bg-indigo-700" href="https://discord.io/fandomdao">
                            <h1><SiDiscord style={{fontSize: '30px'}}/></h1>
                        </a>
                    </div>
                </div>
            </div>
        </aside>
    </div>
  );
}