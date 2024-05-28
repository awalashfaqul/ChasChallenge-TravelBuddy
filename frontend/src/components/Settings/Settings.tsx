import { useState, ChangeEvent } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Switch } from "../ui/switch"
import { Input } from "@/components/ui/input"
import { useSelector, useDispatch } from "react-redux"
import { RootState, AppDispatch } from "@/store/store"
import { showOverlay, hideOverlay } from "@/store/slices/overlaySlice"
import { validatePassword } from "@/components/validator"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import axios from "axios"
import { signOutUser } from "@/store/slices/userSlice"

function Settings() {
    // Hämtar dispatch funktionen från Redux store.
    const dispatch = useDispatch<AppDispatch>()

    // Hämtar overlayns visningsstatus från Redux store.
    const overlayVisible = useSelector(
        (state: RootState) => state.overlay.isVisible,
    )

    const [password, setPassword] = useState<string>("")
    const [passwordError, setPasswordError] = useState<string>("")
    const [showSuccessOverlay, setShowSuccessOverlay] = useState(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    function handlePasswordChange(event: ChangeEvent<HTMLInputElement>): void {
        const newPassword = event.target.value
        setPassword(newPassword)
        if (newPassword.trim() === "") {
            setPasswordError("")
        } else if (passwordError && validatePassword(newPassword)) {
            setPasswordError("")
        }
    }

    function togglePasswordVisibility(): void {
        setShowPassword(!showPassword)
    }

    // En callback-funktion som kör efter 2 sekunder.
    const handleConfirm = () => {
        if (!password) {
            setPasswordError("Please enter your password")
        } else if (!validatePassword(password)) {
            setPasswordError(
                "Your password must be at least 6 characters long and include a capital letter, a number, and a special character",
            )
        } else {
            dispatch(hideOverlay())
            setTimeout(() => {
                setShowSuccessOverlay(true)
            }, 200) // Fördröjer visningen av den andra overlayen i 200 millisekunder.
        }
    }
    const handleSignOut = async () => {
        try {
            await axios.get("https://localhost:7038/api/Auth/logout", {
                withCredentials: true,
            })
            dispatch(signOutUser())
        } catch (error) {
            console.error("Error logging out:", error)
        }
    }

    const handleDeleteAccount = async () => {
        try {
            await axios.delete("https://localhost:7038/api/Auth/user", {
                withCredentials: true,
            })
            dispatch(signOutUser())
        } catch (error) {
            console.error("Error logging out:", error)
        }
    }

    return (
        <main className="flex h-screen items-center justify-center">
            <div className="relative flex w-11/12 max-w-96 flex-col items-center justify-center gap-3">
                <h1 className="text-2xl">Profil</h1>
                <div className="flex flex-col items-center gap-4">
                    <Avatar
                        className="mt-4 h-20 w-20 border-4"
                        style={{
                            borderRadius: "50% 50% 0% 50%",
                        }}
                    >
                        <AvatarImage src="./images/profile-picture.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="text-center text-secondary">
                        <p className="text-lg">Sofia</p>
                        <div className="flex gap-1">
                            <img
                                className="w-5"
                                src="/icons/Location.svg"
                                alt="icon"
                            />
                            <p className="text-sm">Stockholm, Sweden</p>
                        </div>
                    </div>
                </div>
                <h2 className="ml-2 mt-4 self-start text-xl">Settings</h2>
                {/* <button className=" m-w- mt-4 flex h-9 w-11/12 cursor-pointer items-center justify-between border-b-2 border-secondary px-4 text-secondary">
                    <div className="flex gap-4">
                        <img src="./icons/Icon-sheets.svg" alt="icon" />
                        <p>Previous search</p>
                    </div>
                    <img className="" src="./icons/Arrow.svg" alt="Arrow" />
                </button> */}

                <button className="mt-4 flex h-9 w-full cursor-pointer items-center justify-between self-start px-4 text-secondary">
                    <div className="flex gap-4">
                        <img src="./icons/p-settings.svg" alt="Settingsicon" />
                        <Link to="/profilesettings">
                            <p>Profile settings</p>
                        </Link>
                    </div>
                    <img className="w-8" src="./icons/Arrow.svg" alt="Arrow" />
                </button>

                <button className="mt-4 flex h-9 w-full cursor-pointer items-center justify-between px-4 text-secondary">
                    <Link to="/changepassword" className="flex gap-4">
                        <img
                            src="./icons/icon-password.svg"
                            alt="Passwordicon"
                        />
                        <p>Change password</p>
                    </Link>
                    <img className="w-8" src="./icons/Arrow.svg" alt="Arrow" />
                </button>

                {/*   <h2 className="ml-2 mt-4 self-start text-xl">Feedback</h2> */}
                <button className="mt-4 flex h-9 w-full cursor-pointer items-center justify-between px-4 text-secondary">
                    <div className="flex gap-4">
                        <img
                            className="w-5"
                            src="./icons/star-icon.svg"
                            alt="Staricon"
                        />
                        <Link to="/ratetheapp">
                            <p>Rate the app</p>
                        </Link>
                    </div>
                    <img className="w-8" src="./icons/Arrow.svg" alt="Arrow" />
                </button>
                <button className="mt-4 flex h-9 w-full cursor-pointer items-center justify-between px-4 text-secondary">
                    <div className="flex gap-4">
                        <img src="./icons/users.svg" alt="Profileicon" />
                        <Link to="/aboutus">
                            <p>About us</p>
                        </Link>
                    </div>
                    <img className="w-8" src="./icons/Arrow.svg" alt="Arrow" />
                </button>

                <div className="mt-4 flex h-9 w-full items-center  justify-between px-4 text-secondary">
                    <p className="flex flex-row-reverse gap-3">
                        Appearance
                        <img src="./icons/sun.svg" alt="Sunicon" />
                    </p>
                    <Switch />
                </div>

                <div className="mt-4 flex gap-3">
                    <Button variant="outline" onClick={handleSignOut} size="lg">
                        <p className="text-primary">Sign out</p>
                        <img
                            className="ml-2 h-6 w-6"
                            src="/images/account.svg"
                            alt="Profileicon"
                        />
                    </Button>
                    <img src="./icons/vector-icon.svg" alt="Vectoricon" />
                    <Button
                        onClick={() => {
                            dispatch(showOverlay({}))
                            handleDeleteAccount()
                        }}
                        variant="destructive"
                    >
                        <p>Delete account</p>
                        <img
                            className="ml-2 h-6 w-6"
                            src="./icons/trash-icon.svg"
                            alt="Trashicon"
                        />
                    </Button>
                </div>
            </div>
            {/* Renderar overlay om overlayVisible är true. */}
            {overlayVisible && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/70">
                    <div className="flex h-[350px] w-80 flex-col items-center justify-center gap-2 rounded-xl border border-primary bg-background ">
                        <img
                            className="rounded-full bg-primary p-2"
                            src="./icons/lock-square.svg"
                            alt="icon"
                        />
                        <div className="relative flex w-56 flex-col items-center">
                            <p className="mb-2 w-56 text-center text-secondary">
                                Confirm your password to delete your account
                            </p>
                            <Input
                                placeholder="Enter Your Password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            {passwordError && (
                                <div className="error-message">
                                    <FontAwesomeIcon
                                        icon={faExclamationCircle}
                                    />{" "}
                                    {passwordError}
                                </div>
                            )}
                            <img
                                src="./icons/visibility.svg"
                                alt="Show password"
                                className="absolute right-3 top-[68px] cursor-pointer"
                                onClick={togglePasswordVisibility}
                            />

                            <div className="mt-2 flex items-center gap-6">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={() => dispatch(hideOverlay())}
                                    className="mt-2 p-4 font-primary uppercase text-secondary"
                                >
                                    cancel
                                </Button>

                                <Button
                                    variant={"destructive"}
                                    onClick={handleConfirm}
                                    className="mt-2 p-4 uppercase"
                                >
                                    confirm
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Renderar showSuccessOverlay om overlayVisible är true. */}
            {showSuccessOverlay && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/70">
                    <div className="flex h-52 w-80 flex-col items-center justify-center gap-4 rounded-xl border border-primary bg-background ">
                        <img
                            className="rounded-full bg-primary p-2"
                            src="./icons/Confetti.svg"
                            alt="icon"
                        />
                        <div className="flex flex-col items-center gap-2">
                            <p className="w-56 text-center text-secondary">
                                Your account has been deleted
                            </p>
                            <Link
                                to="/"
                                className="w-1/2 rounded-md bg-primary p-2 text-black"
                                onClick={() => setShowSuccessOverlay(false)}
                            >
                                <p className="text-center text-sm font-bold uppercase">
                                    Home
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}

export default Settings
