import "./ChatLoader.css"

export default function ChatLoader() {
    return (
        <div className="loading-message">
            <span className="circle animation-delay-1 animation mb-2 rounded-full bg-background" />
            <span className="circle animation-delay-2 animation mb-2 rounded-full bg-background" />
            <span className="circle animation-delay-3 animation mb-2 rounded-full bg-background" />
        </div>
    )
}
