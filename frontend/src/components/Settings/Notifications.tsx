import { Switch } from "../ui/switch"

function Notifications() {
    return (
        <main className="flex h-screen flex-col items-center justify-center">
            <div className="flex w-11/12 max-w-96 flex-col items-center gap-6">
                <div className="flex justify-center">
                    <h1 className="text-2xl font-bold">Notifications</h1>
                </div>
                <div className="flex w-11/12 max-w-96 flex-col items-start gap-2">
                    <p className="text-xl">Office support</p>
                    <p className="text-xs">
                        Get important updates about your travels, your account
                        and our privacy policy. These updates will be sent to
                        you via email.
                    </p>
                </div>
                <div className="flex h-5 w-80 flex-col">
                    <div className="flex justify-between">
                        <p className="text-secondary">E-mail</p>
                        <Switch />
                    </div>
                </div>
                <div className="flex h-5 w-80 flex-col ">
                    <div className="flex justify-between">
                        <p className="text-secondary">
                            Notifications in the app
                        </p>
                        <Switch />
                    </div>
                </div>
                <div className="flex w-11/12 max-w-96 flex-col items-start gap-2">
                    <p className="text-xl">Travel guides</p>
                    <p className="text-xs">
                        Advice from locals, experts and other travelers on how
                        to get the most out of your destination.
                    </p>
                </div>
                <div className="flex h-5 w-80 flex-col ">
                    <div className="flex justify-between">
                        <p className="text-secondary">E-mail</p>
                        <Switch />
                    </div>
                </div>
                <div className="flex h-5 w-80 flex-col ">
                    <div className="flex justify-between">
                        <p className="text-secondary">
                            Notifications in the app
                        </p>
                        <Switch />
                    </div>
                </div>
                <div className="flex w-11/12 max-w-96 flex-col items-start gap-2">
                    <p className="text-xl">Reviews</p>
                    <p className="text-xs">
                        Get reminded to rate for activities you've done
                        recently.
                    </p>
                </div>
                <div className="flex h-5 w-80 flex-col ">
                    <div className="flex justify-between">
                        <p className="text-secondary">E-mail</p>
                        <Switch />
                    </div>
                </div>
                <div className="flex h-5 w-80 flex-col ">
                    <div className="flex justify-between">
                        <p className="text-secondary">
                            Notifications in the app
                        </p>
                        <Switch />
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Notifications
