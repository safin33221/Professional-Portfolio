import { Link } from "react-router-dom";
import { styles } from "../styles";
import logo from '../assets/logo.png'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import { navLinks } from "../constanse";
import { useEffect, useState } from "react";


const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav
            className={`${styles.paddingX
                } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
                } `}
        >
            <div className='w-full flex justify-between items-center  mx-auto'>
                <Link
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0)
                    }}
                >
                    <img src={logo} alt='logo' className='w-16 h-16 rounded-full object-contain' />
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
                    <div className={`${toggle ? 'flex' : 'hidden'} transition-all duration-300 ease-linear p-6 black-gradient absolute top-14 right-5 mx-auto my-2 min-w-[140px] z-10 rounded-lg`}>
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