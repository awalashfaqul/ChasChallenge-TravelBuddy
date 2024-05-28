import { useSelector } from "react-redux"
import { RootState } from "@/store/store"

export default function ChatHeading() {
    const heading = useSelector((state: RootState) => state.chat.heading)
    const subHeading = useSelector((state: RootState) => state.chat.subHeading)
    const messageList = useSelector(
        (state: RootState) => state.chat.messageList,
    )
    const isOpen = messageList.length < 2
    return (
        <div className="flex w-full flex-col items-center justify-center gap-2 px-4 py-2 pt-20 md:px-24 lg:px-40 lg:pt-40">
            <h1 className="w-45 text-center text-3xl text-secondary">
                {heading}
            </h1>
            {isOpen && (
                <p className="text-center text-sm text-secondary">
                    {subHeading}
                </p>
            )}
        </div>
    )
}
