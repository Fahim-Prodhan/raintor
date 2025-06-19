import React, { useEffect, useState } from "react";
import './Header.css'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import backgroundImage from '../../assets/images/background image.png';

const Navbar = () => {
    const [hamburger, setHamburger] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
    const [color, setColor] = useState('#00224D')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem("theme")
        // console.log(localTheme);
        document.querySelector('html').setAttribute('data-theme', localTheme)
        if (theme === 'dark') {
            setColor("#ffff")
        } else {
            setColor("#00224D")
        }
    }, [theme])

    const handleThemeToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    return (
        <div className="h-[888px] bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <header className="navbar px-6 py-4 sticky top-0 z-10">
                <div className="flex-1">
                    <a className="text-xl font-bold">DEVELOP.ME</a>
                </div>
                <div className="flex gap-4 items-center">
                    <a className="btn btn-ghost">Home</a>
                    <a className="btn btn-ghost">About</a>
                    <a className="btn btn-ghost">Portfolio</a>
                    <a className="btn btn-ghost">Blog</a>
                    <a className="btn rounded-full">
                        <span className="text-2xl"><IoArrowForwardCircleOutline /></span>
                        Start Project
                    </a>
                    <div className="md:block hidden">
                        <label className="toggle text-base-content cursor-pointer grid place-items-center">
                            <input
                                onChange={handleThemeToggle}
                                checked={theme === 'light' ? false : true}
                                type="checkbox" value="synthwave"
                                className="theme-controller " />
                            <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                            <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
                        </label>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
