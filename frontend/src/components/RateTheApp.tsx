import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import StarRating from "./StarRating"
import { Link } from "react-router-dom"

function RateTheApp() {
    return (
        <main className="flex h-screen flex-col items-center">
            {/* <img
                className="absolute h-screen w-full"
                src="./icons/Vector.svg"
                alt="icon"
            /> */}
            <div className="relative flex w-11/12 max-w-96 flex-col items-center gap-4 pt-32">
                <h1 className="text-2xl font-bold text-primary">
                    Rate The app
                </h1>
                <h1 className="text-xl text-secondary md:text-2xl">
                    Rate by pressing a star
                </h1>

                <StarRating
                    onChange={(rating) => console.log("Rating:", rating)}
                />

                <div className="flex w-full flex-col items-start gap-5">
                    <div className="flex w-full flex-col gap-2">
                        <Label className="text-secondary">Title</Label>
                        <Input placeholder="Enter Your Email" />
                    </div>

                    <div className="flex w-full flex-col gap-2">
                        <Label className="text-secondary">Leave feedback</Label>
                        <textarea
                            className="h-24 resize-none rounded-md border-2 border-secondary bg-transparent p-2 text-sm text-white outline-none"
                            placeholder="Leave feedback"
                        />
                    </div>
                </div>

                {/*     <div className="grid gap-4">
          <p>Review</p>
          <textarea
            className="border-none bg-transparent text-secondary outline-none resize-none h-24"
            placeholder="Enter your review here"
          />
          <img src="./icons/Vector2525.svg" alt="icon" />
        </div> */}

                <div className="mt-4 flex w-full justify-center gap-3">
                    <Link to="/settings">
                        <Button variant="outline" size="lg">
                            <p className="uppercase text-secondary">cancel</p>
                        </Button>
                    </Link>
                    <img src="./icons/vector-icon.svg" alt="Vectoricon" />

                    <Button variant="default">
                        <p className="uppercase">send</p>
                    </Button>
                </div>
            </div>
        </main>
    )
}

export default RateTheApp
