import { useState, ChangeEvent } from "react"
import { useDispatch } from "react-redux"
import { showOverlay } from "@/store/slices/overlaySlice"
import Overlay from "./Overlay"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { validateEmail, validatePassword } from "@/components/validator"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

function ResetPassword() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    const [showPassword, setShowPassword] = useState<boolean>(false)

    // Funktion för att hantera ändringar i e-postadressfältet.
    function handleEmailChange(event: ChangeEvent<HTMLInputElement>): void {
        setEmail(event.target.value)
        if (emailError && validateEmail(event.target.value)) {
            setEmailError("")
        }
    }

    // Funktion för att hantera ändringar i lösenordsfältet.
    function handlePasswordChange(event: ChangeEvent<HTMLInputElement>): void {
        setPassword(event.target.value)
        if (passwordError && validatePassword(event.target.value)) {
            setPasswordError("")
        }
    }

    // Funktion för att visa/dölja lösenordet.
    function togglePasswordVisibility(): void {
        setShowPassword(!showPassword)
    }

    // Funktion för att hantera ändringar i bekräftelse av lösenordsfältet.
    function handleConfirmPasswordChange(
        event: ChangeEvent<HTMLInputElement>,
    ): void {
        setConfirmPassword(event.target.value)
        if (confirmPasswordError && event.target.value === password) {
            setConfirmPasswordError("")
        }
    }

    // Funktion för att visa overlay för återställning av lösenord.
    function handleShowResetPasswordOverlay(): void {
        const isEmailValid = validateEmail(email)
        const isPasswordValid = validatePassword(password)
        const isConfirmPasswordValid = confirmPassword === password

        if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            dispatch(showOverlay("congratulations")) // Visar overlayn för återställning av lösenord.
        } else {
            setEmailError(
                isEmailValid ? "" : "Please enter a valid email address",
            )
            setPasswordError(
                isPasswordValid
                    ? ""
                    : "Your password must contain 6 characters or more",
            )
            setConfirmPasswordError(
                isConfirmPasswordValid ? "" : "Passwords does not match",
            )
        }
    }

    return (
        <main className="flex h-screen w-full flex-col justify-start">
            <div className="flex w-full flex-row-reverse items-center justify-center gap-10">
                <img
                    className="mt-48 hidden h-5/6 lg:flex"
                    src="./images/unsplash-bg6.png"
                    alt="Background image"
                />
                <div className="relative flex w-11/12 max-w-96 flex-col items-center justify-center gap-4">
                    <div className="flex justify-center pt-36">
                        <h1 className="text-3xl text-secondary">
                            Reset Password
                        </h1>
                    </div>
                    <p className="text-xs text-secondary">
                        Enter your email account to reset your password
                    </p>
                    <div className="flex w-full max-w-96 flex-col gap-2">
                        <Label className="text-secondary">Email *</Label>
                        <Input
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {emailError && (
                            <div className="error-message">
                                <FontAwesomeIcon icon={faExclamationCircle} />{" "}
                                {emailError}
                            </div>
                        )}
                    </div>
                    <div className="relative flex w-full flex-col items-start gap-2">
                        <Label className="pt-2 text-secondary">
                            Password *
                        </Label>
                        <Input
                            placeholder="Enter Your Password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        {passwordError && (
                            <div className="error-message">
                                <FontAwesomeIcon icon={faExclamationCircle} />{" "}
                                {passwordError}
                            </div>
                        )}
                        <img
                            src="./icons/visibility.svg"
                            alt="Show password"
                            className="absolute inset-y-0 right-3 top-12 cursor-pointer"
                            onClick={togglePasswordVisibility}
                        />
                    </div>
                    <div className="relative flex w-full max-w-96 flex-col gap-2">
                        <Label className="pt-2 text-secondary">
                            Confirm Password *
                        </Label>
                        <Input
                            placeholder="Confirm Your Password"
                            type={showPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                        {confirmPasswordError && (
                            <div className="error-message">
                                <FontAwesomeIcon icon={faExclamationCircle} />{" "}
                                {confirmPasswordError}
                            </div>
                        )}
                        <img
                            src="./icons/visibility.svg"
                            alt="Show password"
                            className="absolute inset-y-0 right-3 top-12 cursor-pointer"
                            onClick={togglePasswordVisibility}
                        />
                    </div>
                    <Button
                        onClick={handleShowResetPasswordOverlay}
                        className="w-full"
                        disabled={
                            !!(
                                emailError ||
                                passwordError ||
                                confirmPasswordError
                            )
                        }
                    >
                        Reset Password
                    </Button>
                    <Overlay />
                </div>
            </div>
        </main>
    )
}

export default ResetPassword
