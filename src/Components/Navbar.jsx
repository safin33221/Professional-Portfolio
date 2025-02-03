import { Link } from "react-router-dom";
import { styles } from "../styles";
import logo from '../assets/logo.svg'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import { navLinks } from "../constanse";
import { useState } from "react";


const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    return (
        <nav
            className={`${styles.paddingX
                } w-full flex items-center  py-5  ${scrolled ? "bg-primary" : "bg-transparent"
                }`}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
                    <p className='text-white text-[18px] font-bold cursor-pointer flex '>
                        Safayet Hossan &nbsp;
                        <span className='sm:block hidden'> | Safin</span>
                    </p>

                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${active === nav.title ? "text-white" : "text-secondary"
                                } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img src={toggle ? close : menu} alt=""
                        onClick={() => setToggle(!toggle)} />
                    <div className={`${toggle ? 'flex' : 'hidden'} p-6 black-gradient absolute top-14 right-5 mx-auto my-2 min-w-[140px] z-10 rounded-lg`}>
                        <ul className='list-none felx justify-end items-start flex-col gap-4'>
                            {navLinks?.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`${active === nav.title ? "text-white" : "text-secondary"
                                        } hover:text-white font-poppins  font-medium cursor-pointer`}
                                    onClick={() => {
                                        setToggle(!toggle)
                                        setActive(nav.title)
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </nav >
    );
};



export default Navbar;