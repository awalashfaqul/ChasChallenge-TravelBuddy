import { useState, ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { validateEmail, validatePassword } from "@/components/validator"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

function ChangePassword(): JSX.Element {
    const [email, setEmail] = useState<string>("")
    const [currentPassword, setCurrentPassword] = useState<string>("")
    const [newPassword, setNewPassword] = useState<string>("")
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>("")
    const [emailError, setEmailError] = useState<string>("")
    const [currentPasswordError, setCurrentPasswordError] = useState<string>("")
    const [newPasswordError, setNewPasswordError] = useState<string>("")
    const [confirmNewPasswordError, setConfirmNewPasswordError] =
        useState<string>("")
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const navigate = useNavigate()

    function handleEmailChange(event: ChangeEvent<HTMLInputElement>): void {
        setEmail(event.target.value)
        if (emailError && validateEmail(event.target.value)) {
            setEmailError("")
        }
    }

    function handleCurrentPasswordChange(
        event: ChangeEvent<HTMLInputElement>,
    ): void {
        setCurrentPassword(event.target.value)
        if (currentPasswordError && validatePassword(event.target.value)) {
            setCurrentPasswordError("")
        }
    }

    function handleNewPasswordChange(
        event: ChangeEvent<HTMLInputElement>,
    ): void {
        setNewPassword(event.target.value)
        if (newPasswordError && validatePassword(event.target.value)) {
            setNewPasswordError("")
        }
    }

    function handleConfirmNewPasswordChange(
        event: ChangeEvent<HTMLInputElement>,
    ): void {
        setConfirmNewPassword(event.target.value)
        if (confirmNewPasswordError && event.target.value === newPassword) {
            setConfirmNewPasswordError("")
        }
    }

    function togglePasswordVisibility(): void {
        setShowPassword(!showPassword)
    }

    function handleSaveChangesClick(): void {
        let valid = true

        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address")
            valid = false
        }

        if (!validatePassword(currentPassword)) {
            setCurrentPasswordError(
                "Your current password must contain 6 characters or more",
            )
            valid = false
        }

        if (!validatePassword(newPassword)) {
            setNewPasswordError(
                "Your new password must contain 6 characters or more",
            )
            valid = false
        }

        if (newPassword !== confirmNewPassword) {
            setConfirmNewPasswordError("Passwords does not match")
            valid = false
        }

        if (valid) {
            navigate("/profilestart")
        }
    }

    return (
        <main className="flex h-screen flex-col items-center justify-start">
            {/* <img
                className="absolute h-screen w-full"
                src="./icons/Vector.svg"
                alt="icon"
            /> */}
            <div className="relative flex w-11/12 max-w-96 flex-col items-center justify-center gap-6">
                <div className="flex justify-center pt-36">
                    <h1 className="text-3xl text-secondary">Change password</h1>
                </div>
                <div className="flex w-full flex-col items-start gap-6">
                    <div className="flex w-full max-w-96 flex-col gap-2">
                        <Label className="gap-2 text-secondary">Email *</Label>
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
                    <div className="relative flex w-full max-w-96 flex-col gap-2">
                        <Label className="gap-2 text-secondary">
                            Current password *
                        </Label>
                        <Input
                            placeholder="Enter Your Current Password"
                            type={showPassword ? "text" : "password"}
                            value={currentPassword}
                            onChange={handleCurrentPasswordChange}
                        />
                        {currentPasswordError && (
                            <div className="error-message">
                                <FontAwesomeIcon icon={faExclamationCircle} />{" "}
                                {currentPasswordError}
                            </div>
                        )}
                        <img
                            src="./icons/visibility.svg"
                            alt="Show password"
                            className="absolute inset-y-0 right-3 top-10 cursor-pointer"
                            onClick={togglePasswordVisibility}
                        />
                    </div>
                    <div className="relative flex w-full max-w-96 flex-col gap-2">
                        <Label className="gap-2 text-secondary">
                            New password *
                        </Label>
                        <Input
                            placeholder="Enter Your New Password"
                            type={showPassword ? "text" : "password"}
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                        />
                        {newPasswordError && (
                            <div className="error-message">
                                <FontAwesomeIcon icon={faExclamationCircle} />{" "}
                                {newPasswordError}
                            </div>
                        )}
                        <img
                            src="./icons/visibility.svg"
                            alt="Show password"
                            className="absolute inset-y-0 right-3 top-10 cursor-pointer"
                            onClick={togglePasswordVisibility}
                        />
                    </div>
                    <div className="relative flex w-full max-w-96 flex-col gap-2">
                        <Label className="gap-2 text-secondary">
                            Confirm new password *
                        </Label>
                        <Input
                            placeholder="Confirm Your New Password"
                            type={showPassword ? "text" : "password"}
                            value={confirmNewPassword}
                            onChange={handleConfirmNewPasswordChange}
                        />
                        {confirmNewPasswordError && (
                            <div className="error-message">
                                <FontAwesomeIcon icon={faExclamationCircle} />{" "}
                                {confirmNewPasswordError}
                            </div>
                        )}
                        <img
                            src="./icons/visibility.svg"
                            alt="Show password"
                            className="absolute inset-y-0 right-3 top-10 cursor-pointer"
                            onClick={togglePasswordVisibility}
                        />
                    </div>
                </div>

                <Button
                    onClick={handleSaveChangesClick}
                    className="flex w-full max-w-96 items-center justify-center gap-2 p-3"
                >
                    Save changes
                </Button>
            </div>
        </main>
    )
}

export default ChangePassword
