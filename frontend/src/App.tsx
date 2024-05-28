import Settings from "./components/Settings/Settings"
import Header from "./components/Header"
import GetStarted from "./components/GetStarted"
import ProfileStart from "./components/ProfileStart"
/* import MyProfile from "./components/Settings/MyProfile" */
import ProfileSettings from "./components/Settings/profileSettingsComponents/ProfileSettings"
import ChangePassword from "./components/Settings/ChangePassword"
/* import Notifications from "./components/Settings/Notifications" */
import LogIn from "./components/LogIn"
import SignUp from "./components/SignUp"
import ForgotPassword from "./components/ForgotPassword"
import ResetPassword from "./components/ResetPassword"
import ChatBot from "./components/ChatBotComponents/ChatBot"
import Footer from "./components/Footer"
import MoreAbout from "./components/MoreAbout"
import Hero from "./components/Hero"
import AboutUs from "./components/AboutUs"
import RateTheApp from "./components/RateTheApp"
import DesktopVector from "./components/DesktopVector"
// import PrivateRoute from "./components/PrivateRoute"
import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes"

function App() {
    const [isLargeScreen, setIsLargeScreen] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024)
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return (
        <>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            {isLargeScreen ? <Hero /> : <GetStarted />}
                            <DesktopVector />
                            {isLargeScreen && <Footer />}
                        </div>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <div>
                            <LogIn />
                            <DesktopVector />
                            {isLargeScreen && <Footer />}
                        </div>
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <div>
                            <SignUp />
                            <DesktopVector />
                            {isLargeScreen && <Footer />}
                        </div>
                    }
                />

                <Route
                    path="/hero"
                    element={
                        <div>
                            <Hero />
                            <DesktopVector />
                            {isLargeScreen && <Footer />}
                        </div>
                    }
                />

                <Route
                    path="/forgotpassword"
                    element={
                        <div>
                            <ForgotPassword />
                            <DesktopVector />
                            {isLargeScreen && <Footer />}
                        </div>
                    }
                />
                {/*        <Route path="/myprofile" element={<MyProfile />} /> */}

                <Route
                    path="/ratetheapp"
                    element={
                        <div>
                            <RateTheApp />
                            <DesktopVector />
                            {isLargeScreen && <Footer />}
                        </div>
                    }
                />

                <Route
                    path="/aboutus"
                    element={
                        <div>
                            <AboutUs />
                            <DesktopVector />
                            {isLargeScreen && <Footer />}
                        </div>
                    }
                />

                {/* Protected routes */}
                <Route element={<PrivateRoutes route="/login" />}>
                    <Route
                        path="/moreabout"
                        element={
                            <div>
                                <MoreAbout />
                                <DesktopVector />
                                {isLargeScreen && <Footer />}
                            </div>
                        }
                    />
                    <Route
                        path="/profilestart"
                        element={
                            <div>
                                <ProfileStart />
                                <DesktopVector />
                            </div>
                        }
                    />
                    <Route
                        path="/resetpassword"
                        element={
                            <div>
                                <ResetPassword />
                                <DesktopVector />
                                {isLargeScreen && <Footer />}
                            </div>
                        }
                    />

                    <Route
                        path="/chatbot"
                        element={
                            <div>
                                <ChatBot />
                                <DesktopVector />
                            </div>
                        }
                    />
                    <Route
                        path="/settings"
                        element={
                            <div>
                                <Settings />
                                <DesktopVector />
                                {isLargeScreen && <Footer />}
                            </div>
                        }
                    />
                    <Route
                        path="/profilesettings"
                        element={
                            <div>
                                <ProfileSettings />
                                <DesktopVector />
                                {isLargeScreen && <Footer />}
                            </div>
                        }
                    />
                    <Route
                        path="/changepassword"
                        element={
                            <div>
                                <ChangePassword />
                                <DesktopVector />
                                {isLargeScreen && <Footer />}
                            </div>
                        }
                    />
                </Route>
            </Routes>
        </>
    )
}

export default App
