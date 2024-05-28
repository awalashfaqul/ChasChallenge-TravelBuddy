import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

function MyProfile() {
    return (
        <main className="flex h-screen flex-col items-center justify-start gap-4 pt-28">
            <div className="flex w-11/12 flex-col items-center justify-center gap-6">
                <Avatar
                    className="border-4 border-secondary"
                    style={{
                        borderRadius: "50% 50% 0% 50%",
                    }}
                >
                    <AvatarImage src={"./profile-picture.jpg"} />
                    <AvatarFallback>?</AvatarFallback>
                </Avatar>
                <div className="text-center">
                    <h1 className="text-3xl">Sofia</h1>
                    <div className="flex gap-2 text-2xl">
                        <img
                            className="w-8"
                            src="./icons/Location.svg"
                            alt="Locationicon"
                        />
                        <p className="text-secondary">Stockhom, Sweden</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold">
                        My profile
                    </h2>
                </div>
            </div>
        </main>
    )
}

export default MyProfile
