import axios from "axios"
import { useState, ChangeEvent } from "react"
import { useDispatch } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import { loginUser } from "@/store/slices/userSlice"
import { FormEvent } from "react"

function LogIn(): JSX.Element {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const requestedLocation = location.state?.from?.pathname || "/profilestart"
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [emailError, setEmailError] = useState<string>("")
    const [passwordError, setPasswordError] = useState<string>("")
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const handleLoginSubmit = async (
        e: FormEvent<HTMLFormElement>,
    ): Promise<void> => {
        e.preventDefault()
        try {
            const response = await axios.post(
                "https://localhost:7038/login?useCookies=true",
                {
                    email: email,
                    password: password,
                },
                { withCredentials: true },
            )

            console.log("Logging in with email:", email)
            console.log("Logging in with password:", password)
            console.log("Login successful.", response)

            dispatch(loginUser())
            navigate(requestedLocation, { replace: true })
        } catch (error: any) {
            if (error.response) {
                // Server responded with a status other than 2xx
                setEmailError(
                    "Login failed. Please check your credentials and try again.",
                )
                setPasswordError(
                    "Login failed. Please check your credentials and try again.",
                )
            } else if (error.request) {
                // Request was made but no response was received
                setEmailError(
                    "Login failed due to network issues. Please try again later.",
                )
                setPasswordError(
                    "Login failed due to network issues. Please try again later.",
                )
            } else {
                // Something happened in setting up the request
                setEmailError(
                    "An unexpected error occurred. Please try again later.",
                )
                setPasswordError(
                    "An unexpected error occurred. Please try again later.",
                )
            }
            console.error("Error logging in:", error)
        }
    }

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.target.value)
        setEmailError("")
        setPasswordError("")
    }

    const handlePasswordChange = (
        event: ChangeEvent<HTMLInputElement>,
    ): void => {
        setPassword(event.target.value)
        setEmailError("")
        setPasswordError("")
    }

    return (
        <main className="h-screen">
            <div className="flex w-full flex-row-reverse items-end justify-center gap-10 px-4 pt-20 md:px-24 md:pt-28 lg:px-40 lg:pt-40">
                <img
                    className="hidden xl:flex xl:w-1/2 2xl:size-[660px]"
                    src="./images/unsplash-bg4.png"
                    alt="Background image"
                />

                <div className="flex w-full max-w-[660px] flex-col items-center justify-center gap-4">
                    <h1 className="text-center text-3xl text-secondary md:text-4xl lg:text-5xl">
                        Login <br /> Welcome back!
                    </h1>
                    <h2 className="text-secondary">
                        Fields marked with * are mandatory.
                    </h2>
                    <form
                        className="flex w-full flex-col gap-4"
                        onSubmit={handleLoginSubmit}
                    >
                        <div className="flex w-full flex-col">
                            <Label className="text-secondary">Email *</Label>
                            <Input
                                placeholder="Enter Your Email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {emailError && (
                                <div className="error-message">
                                    <FontAwesomeIcon
                                        icon={faExclamationCircle}
                                    />{" "}
                                    {emailError}
                                </div>
                            )}
                        </div>
                        <div className="relative flex w-full flex-col">
                            <Label className="text-secondary">Password *</Label>
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
                                className="absolute inset-y-0 right-3 top-9 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            />
                        </div>
                        <Link to="/forgotpassword" className="self-end">
                            <p className="cursor-pointer pb-[3px] pt-[3px] text-sm underline underline-offset-4">
                                Forgot password?
                            </p>
                        </Link>
                        <div className="flex w-full items-center justify-end gap-2.5">
                            <p className="pb-1 text-sm leading-tight tracking-tight text-secondary">
                                Stay signed in?
                            </p>
                            <Checkbox shape="square" />
                        </div>
                        <Button type="submit">Login</Button>
                    </form>
                    <p className="text-center text-sm text-onBackground">
                        Don't have an account?
                        <Link to="/signup">
                            <span className="cursor-pointer pl-2 text-primary underline underline-offset-4">
                                Signup here!
                            </span>
                        </Link>
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="w-[139px] border border-primary"></span>
                        <div className="text-sm font-normal text-onBackground">
                            Or
                        </div>
                        <span className="w-[139px] border border-primary"></span>
                    </div>
                    <Button variant="facebook">
                        <img
                            src="./icons/facebook-logo.svg"
                            alt="Facebook Logo"
                        />
                        <span className="flex-grow">Login with Facebook</span>
                    </Button>
                    <Button variant="google">
                        <img src="./icons/google-logo.svg" alt="Google Logo" />
                        <span className="flex-grow">Login with Google</span>
                    </Button>
                </div>
            </div>
        </main>
    )
}

export default LogIn
