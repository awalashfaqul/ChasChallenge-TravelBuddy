function AboutUs() {
    return (
        <main className="flex h-screen flex-col justify-center gap-6 p-4">
            {/* <img
                className="absolute h-screen w-full"
                src="./icons/Vector.svg"
                alt="icon"
            /> */}
            <div className="relative flex flex-col items-center gap-5 text-center">
                <h1 className="text-2xl text-primary md:text-4xl">About us</h1>
                <p className="text-xs md:text-lg">
                    We're here to help you explore and create unforgettable
                    memories on your next trip.
                </p>
            </div>
            <div>
                <h1 className="text-xl md:text-2xl">Leave stress behind</h1>
                <p className="text-xs text-secondary md:text-lg">
                    Explore and book your journey with ease while we handle the
                    logistics. Instead, you can focus on making lasting
                    memories.
                </p>
            </div>
            <div>
                <h1 className="text-xl md:text-2xl">
                    Embrace extraordinary experiences
                </h1>
                <p className="text-xs text-secondary md:text-lg">
                    Unforgettable adventures await at TravelBuddy. Discover a
                    wide range of thrilling activities tailored to all ages and
                    interests.
                </p>
            </div>
            <div>
                <h1 className="text-xl md:text-2xl">Seize every moment</h1>
                <p className="text-xs text-secondary md:text-lg">
                    Don't waste time waiting in lines. Plan ahead and skip
                    queues to enjoy the most iconic attractions hassle-free.
                </p>
            </div>
            <div>
                <h1 className="text-xl md:text-2xl">Unlock new horizons</h1>
                <p className="text-xs text-secondary md:text-lg">
                    Receive personalized recommendations before and during your
                    trip to fully immerse yourself in all your destination has
                    to offer.
                </p>
            </div>
            <div className="flex gap-6">
                <img src="/icons/chat.svg" alt="icon" />
                <p className="text-sm text-secondary md:text-lg">Chat</p>
            </div>
            <div className="flex gap-6">
                <img src="/icons/email-icon.svg" alt="icon" />
                <p className="text-sm text-secondary md:text-lg">
                    travelbuddy.com
                </p>
            </div>
            {/* <div className="flex gap-6">
                <img src="/icons/phone.svg" alt="icon" />
                <p className="text-sm text-secondary md:text-lg">
                    +46 (0)8 123 123 123
                </p>
            </div> */}
        </main>
    )
}
export default AboutUs
