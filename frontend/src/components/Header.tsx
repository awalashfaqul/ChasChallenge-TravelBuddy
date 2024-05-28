import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { clearMessageList } from "@/store/slices/chatSlice"
import { Button } from "./ui/button"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"

function Header() {
    const location = useLocation()
    const dispatch = useDispatch()
    useEffect(() => {
        if (location.pathname !== "/chatbot") {
            dispatch(clearMessageList())
        }
    }, [location, dispatch])
    
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const isAuth = useSelector(
        (state: RootState) => state.user.sessionInfo.isLoggedIn,
    )

    const handleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleCloseMenu = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                handleCloseMenu()
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <header className="absolute z-10 flex h-[60px] w-full flex-col bg-transparent lg:h-[80px] lg:bg-black/30">
            <nav className="z-2 flex items-center justify-between p-4">
                <Link
                    to="/"
                    className="flex items-center justify-center md:pl-5"
                >
                    <img
                        src="/images/logo.svg"
                        alt=""
                        className="md:w-13 w-11"
                    />
                    <h1 className="pl-3 text-lg font-semibold tracking-wide md:text-2xl">
                        TravelBuddy
                    </h1>
                </Link>
                <div className="flex gap-4 md:pr-5">
                    <Link to="/settings" className="flex items-center">
                        <img
                            src="/images/account_circle.svg"
                            alt=""
                            className="w-10 hover:cursor-pointer"
                        />
                    </Link>

                    <img
                        src={
                            isOpen ? "/icons/menu_open.svg" : "/images/menu.svg"
                        }
                        alt=""
                        className="w-11 hover:cursor-pointer"
                        onClick={handleMenu}
                    />
                </div>
            </nav>

            {isOpen && (
                <div
                    className="fixed left-0 top-0 h-full w-full bg-transparent"
                    onClick={handleCloseMenu}
                />
            )}

            <div
                ref={menuRef}
                className="absolute top-16 w-full origin-top overflow-hidden transition-transform duration-300 ease-in-out md:top-20 lg:top-[80px] lg:flex lg:justify-between lg:bg-black/30"
                style={{
                    transform: isOpen ? "scaleY(1)" : "scaleY(0)",
                    zIndex: "1000",
                }}
            >
                <ul className="flex flex-col items-center justify-center gap-2 bg-background py-2 lg:w-2/5 lg:flex-row lg:justify-around lg:bg-transparent lg:py-0 lg:pl-10">
                    <li
                        style={{ opacity: isOpen ? "1" : "0" }}
                        className="flex h-12 cursor-pointer items-center text-2xl transition-opacity duration-300 ease-in-out hover:text-secondary-foreground lg:items-start lg:pt-[2px]"
                    >
                        <Link to="/" onClick={handleCloseMenu}>
                            Home
                        </Link>
                    </li>
                    <li
                        style={{ opacity: isOpen ? "1" : "0" }}
                        className="flex h-12 cursor-pointer items-center text-2xl transition-opacity duration-300 ease-in-out hover:text-secondary-foreground lg:items-start lg:pt-[2px]"
                    >
                        <Link to="/profilestart" onClick={handleCloseMenu}>
                            Bot
                        </Link>
                    </li>
                    <li
                        style={{ opacity: isOpen ? "1" : "0" }}
                        className="flex h-12 cursor-pointer items-center text-2xl transition-opacity duration-300 ease-in-out hover:text-secondary-foreground lg:items-start lg:pt-[2px]"
                    >
                        <Link to="/settings" onClick={handleCloseMenu}>
                            Settings
                        </Link>
                    </li>
                    <li
                        style={{ opacity: isOpen ? "1" : "0" }}
                        className="flex h-12 cursor-pointer items-center text-2xl transition-opacity duration-300 ease-in-out hover:text-secondary-foreground lg:items-start lg:pt-[2px]"
                    >
                        <Link to="/aboutus" onClick={handleCloseMenu}>
                            About us
                        </Link>
                    </li>
                </ul>
                {!isAuth && (
                    <div
                        style={{ opacity: isOpen ? "1" : "0" }}
                        className="hidden justify-center gap-3 pb-3 pr-14 transition-opacity duration-300 ease-in-out lg:flex"
                    >
                        <Link
                            to="/login"
                            className="h-10 border-r-2 border-primary pr-3"
                        >
                            <Button
                                onClick={handleCloseMenu}
                                variant="outline"
                                size="md"
                                className="h-10"
                            >
                                <p className="text-neutral-200">Login now</p>
                                <img
                                    className="ml-2 h-5 w-5"
                                    src="/images/account.svg"
                                    alt="Profileicon"
                                />
                            </Button>
                        </Link>
                        <Link to="/signup">
                            <Button
                                onClick={handleCloseMenu}
                                variant="default"
                                className="h-10"
                            >
                                <p>Sign up</p>
                                <img
                                    className="ml-2 h-5 w-5"
                                    src="/images/account2.svg"
                                    alt="Profileicon"
                                />
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
