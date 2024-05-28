import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { RootState, AppDispatch } from "@/store/store"
import { hideOverlay } from "@/store/slices/overlaySlice"
import { Button } from "./ui/button"

function Overlay() {
    const dispatch = useDispatch<AppDispatch>()
    const overlayType = useSelector(
        (state: RootState) => state.overlay.overlayType,
    )

    const renderOverlayContent = () => {
        switch (overlayType) {
            case "email":
                return (
                    <div className="flex h-56 w-80 flex-col items-center justify-center gap-5 rounded-xl border border-primary bg-background">
                        <img
                            className="rounded-full bg-primary p-2"
                            src="./icons/Email.svg"
                            alt="Email icon"
                        />
                        <div className="flex h-28 flex-col items-center">
                            <p className="text-center text-base font-bold text-secondary">
                                Check your email
                            </p>
                            <p className="font-small p-2 text-center text-xs leading-normal tracking-wide text-secondary">
                                We have sent password recovery instructions to
                                your email
                            </p>
                            <Link to="/resetpassword">
                                <Button onClick={() => dispatch(hideOverlay())}>
                                    Reset password
                                </Button>
                            </Link>
                        </div>
                    </div>
                )
            case "congratulations":
                return (
                    <div className="flex h-56 w-80 flex-col items-center justify-center gap-5 rounded-xl border border-primary bg-background ">
                        <img
                            className="rounded-full bg-primary p-2"
                            src="./icons/Confetti.svg"
                            alt="Email icon"
                        />
                        <div className="flex flex-col items-center ">
                            <p className="text-center text-base font-bold text-secondary">
                                Congratulations!
                            </p>
                            <p className="font-small p-2 text-center text-xs leading-normal tracking-wide text-secondary">
                                Your password was reset
                            </p>
                            <Link to="/login">
                                <Button
                                    onClick={() => dispatch(hideOverlay())}
                                    className="mt-2 p-2"
                                >
                                    Login now
                                </Button>
                            </Link>
                        </div>
                    </div>
                )
            default:
                return null
        }
    }

    const overlayVisible = useSelector(
        (state: RootState) => state.overlay.isVisible,
    )

    return (
        overlayVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-background/70">
                {renderOverlayContent()}
            </div>
        )
    )
}

export default Overlay
