function Footer() {
    return (
        <footer className="mt-16  flex flex-col items-center gap-10 p-20">
            <div className="grid grid-cols-1 gap-20 sm:grid-cols-3 md:grid-cols-4">
                {/* Navigeringslänkar kommer senare */}
                <div className="flex flex-col items-start gap-4">
                    <h2 className="text-2xl font-bold">Guide trips</h2>
                    <ul className="list-none space-y-2">
                        <li className="text-xl">Try our AI-guide</li>
                        <li className="text-xl">Find Restaurants</li>
                        <li className="text-xl">Find places to stay</li>
                        <li className="text-xl">Find activities</li>
                    </ul>
                </div>
                {/* Navigeringslänkar kommer senare */}
                <div className="flex flex-col items-start gap-4">
                    <h2 className="text-2xl font-bold">About</h2>
                    <ul className="list-none space-y-2">
                        <li className="text-xl">Om Travel Buddy</li>
                        <li className="text-xl">Explorer</li>
                    </ul>
                </div>
                {/* Navigeringslänkar kommer senare */}
                <div className="flex flex-col items-start gap-4">
                    <h2 className="text-2xl font-bold">Feedback</h2>
                    <ul className="list-none space-y-2">
                        <li className="text-xl">Rate</li>
                        <li className="text-xl">Ge feedback</li>
                        <li className="text-xl">Blog</li>
                    </ul>
                </div>
                {/* Navigeringslänkar kommer senare */}
                <div className="flex flex-col items-start gap-4">
                    <h2 className="text-2xl font-bold">Support</h2>
                    <ul className="list-none space-y-2">
                        <li className="text-xl">Contact</li>
                        <li className="text-xl">FAQ</li>
                        <li className="text-xl">Juridisk information</li>
                        <li className="text-xl">Integritetspolicy</li>
                        <li className="text-xl">Terms</li>
                        <li className="text-xl">Privacy</li>
                        <li className="text-xl">Cookies</li>
                    </ul>
                </div>
            </div>
            <div className="order-first flex items-center justify-center md:order-none">
                <img
                    src="/images/logo.svg"
                    alt="TravelBuddy Logo"
                    className="w-14"
                />
                <h1 className="text-4xl font-light">TravelBuddy</h1>
            </div>
            <div className="flex gap-4">
                <img src="/icons/facebook.svg" alt="Facebook icon" />
                <img src="/icons/instagram.svg" alt="Instagram icon" />
            </div>
            <div className="flex items-center justify-center">
                <p className="text-xl">
                    © 2024- TravelBuddy. Stockholm Sweden
                </p>
            </div>
        </footer>
    )
}

export default Footer
