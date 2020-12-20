import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar(){
    return (
        <header className="bg-yellow-500">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-white"
                    className="inline-flex items-center py-6 px-3 mr-4 text-black-100 hover:text-black-800 text-4xl font-bold cursive tracking-widest">
                        Tiago
                    </NavLink>
                    <NavLink to="/post" className="inline-flex items-center py-3 px-3 my-6 rounded text-black"  activeClassName="text-black bg-yellow-400">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project" className="inline-flex items-center py-3 px-3 my-6 rounded text-black" activeClassName="text-black bg-yellow-400">
                        Projects
                    </NavLink>
                    <NavLink to="/about" className="inline-flex items-center py-3 px-3 my-6 rounded text-black" activeClassName="text-black bg-yellow-400">
                        About
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.instagram.com/tiagoo.c21/ " className="mr-4" target="_blank" fgColor="#fff" style={{ heigth: 35, width: 35 }}/>
                    <SocialIcon url="https://twitter.com/tiagoo_c21" className="mr-4" target="_blank" fgColor="#fff" style={{ heigth: 35, width: 35 }}/>
                    <SocialIcon url="https://www.youtube.com/channel/UC2McKPV1BGAoXthUzDqbCpA" className="mr-4" target="_blank" fgColor="#fff" style={{ heigth: 35, width: 35 }}/>
                </div>
            </div>
        </header>
    )
}