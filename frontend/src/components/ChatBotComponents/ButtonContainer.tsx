import { useState } from "react"
import Message from "@/types/chat/Message"
import ChatButtons from "./ChatButtons"
type ButtonContainerProps = {
    message: Message
    handleFoodChoice: (buttonChoice: string) => void
}

function ButtonContainer({ message, handleFoodChoice }: ButtonContainerProps) {
    const [isOpen, setIsOpen] = useState<boolean>(true)

    function handleCloseButtonContainer() {
        setIsOpen(false)
    }

    return (
        <>
            {isOpen && (
                <div className="flex w-11/12 flex-wrap justify-center gap-2">
                    {message.content.map((item: string, index: number) => (
                        <ChatButtons
                            key={index}
                            onFoodChoice={handleFoodChoice}
                            foodPreference={item.trim()}
                            onCloseButtonContainer={handleCloseButtonContainer}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

export default ButtonContainer
