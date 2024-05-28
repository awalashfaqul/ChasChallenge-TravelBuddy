import axios from "axios"
import { useState, ChangeEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import { FormEvent } from "react"

function SignUp(): JSX.Element {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [emailError, setEmailError] = useState<string>("")
    const [passwordError, setPasswordError] = useState<string[]>([])
    const [confirmPasswordError, setConfirmPasswordError] = useState<string[]>(
        [],
    )
    const [showPassword1, setShowPassword1] = useState<boolean>(false)
    const [showPassword2, setShowPassword2] = useState<boolean>(false)
    const navigate = useNavigate()

    const handleSignUpSubmit = async (
        e: FormEvent<HTMLFormElement>,
    ): Promise<void> => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setConfirmPasswordError(["Passwords do not match."])
            setPasswordError(["Passwords do not match."])
            return
        }

        try {
            const response = await axios.post(
                "https://localhost:7038/register",
                {
                    email: email,
                    password: password,
                },
                { withCredentials: true },
            )
            console.log(response)

            navigate("/moreabout")
        } catch (error: any) {
            if (error.response) {
                const errors = error.response.data.errors
                if (errors.InvalidEmail)
                    setEmailError(errors.InvalidEmail || "")
                if (errors.DuplicateUserName)
                    setEmailError(errors.DuplicateUserName || "")
                const passwordErrors: string[] = []
                if (errors.PasswordRequiresDigit)
                    passwordErrors.push(errors.PasswordRequiresDigit)
                if (errors.PasswordRequiresNonAlphanumeric)
                    passwordErrors.push(errors.PasswordRequiresNonAlphanumeric)
                if (errors.PasswordRequiresUpper)
                    passwordErrors.push(errors.PasswordRequiresUpper)
                if (errors.PasswordTooShort)
                    passwordErrors.push(errors.PasswordTooShort)
                setPasswordError(passwordErrors)
                setConfirmPasswordError(passwordErrors)
            } else if (error.request) {
                setEmailError(
                    "Login failed due to network issues. Please try again later.",
                )
            } else {
                setEmailError(
                    "An unexpected error occurred. Please try again later.",
                )
            }
            console.error("Error logging in:", error)
        }
    }

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.target.value)
        setEmailError("")
    }

    const handlePasswordChange = (
        event: ChangeEvent<HTMLInputElement>,
    ): void => {
        setPassword(event.target.value)
        setPasswordError([])
    }

    const handleConfirmPasswordChange = (
        event: ChangeEvent<HTMLInputElement>,
    ): void => {
        setConfirmPassword(event.target.value)
        setConfirmPasswordError([])
    }

    return (
        <main className="h-screen">
            <div className="flex w-full flex-row-reverse items-end justify-center gap-10 px-4 pt-20 md:px-24 md:pt-28 lg:px-40 lg:pt-40">
                <img
                    className="hidden xl:flex xl:w-1/2 2xl:size-[660px]"
                    src="./images/unsplash-bg5.png"
                    alt="Background image"
                />
                <div className="flex w-full max-w-[660px] flex-col items-center justify-center gap-4">
                    <h1 className="text-center text-3xl text-secondary md:text-4xl lg:text-5xl">
                        Let's get you started
                    </h1>
                    <h2 className="text-secondary">
                        Fields marked with * are mandatory.
                    </h2>
                    <form
                        className="flex w-full flex-col gap-4"
                        onSubmit={handleSignUpSubmit}
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
                                    <p className="self-center">{emailError}</p>
                                </div>
                            )}
                        </div>
                        <div className="relative flex w-full flex-col">
                            <Label className="text-secondary">Password *</Label>
                            <Input
                                placeholder="Enter Your Password"
                                type={showPassword1 ? "text" : "password"}
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            {passwordError.length > 0 && (
                                <div className="error-message">
                                    <FontAwesomeIcon
                                        icon={faExclamationCircle}
                                        className="self-center"
                                    />
                                    {passwordError.map((error, index) => (
                                        <p className="pl-2" key={index}>
                                            {error}
                                        </p>
                                    ))}
                                </div>
                            )}
                            <img
                                src="./icons/visibility.svg"
                                alt="Show password"
                                className="absolute inset-y-0 right-3 top-9 cursor-pointer"
                                onClick={() => setShowPassword1(!showPassword1)}
                            />
                        </div>
                        <div className="relative flex w-full flex-col">
                            <Label className="text-secondary">
                                Confirm Password *
                            </Label>
                            <Input
                                placeholder="Confirm Your Password"
                                type={showPassword2 ? "text" : "password"}
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                            />
                            {confirmPasswordError.length > 0 && (
                                <div className="error-message">
                                    <FontAwesomeIcon
                                        icon={faExclamationCircle}
                                    />
                                    {confirmPasswordError}
                                </div>
                            )}
                            <img
                                src="./icons/visibility.svg"
                                alt="Show password"
                                className="absolute inset-y-0 right-3 top-9 cursor-pointer"
                                onClick={() => setShowPassword2(!showPassword2)}
                            />
                        </div>
                        <Button type="submit">Create profile</Button>
                    </form>
                    <p className="text-center text-sm text-neutral-200">
                        Already have an account?
                        <Link to="/login">
                            <span className="cursor-pointer pl-2 text-primary underline underline-offset-4">
                                Login here!
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

export default SignUp
