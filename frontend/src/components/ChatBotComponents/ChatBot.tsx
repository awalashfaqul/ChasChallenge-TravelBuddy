import ChatLoader from "./ChatLoader"
import axios from "axios"
import ChatHeading from "./ChatHeading"
import ChatLog from "./ChatLog"
import FoodPreferenceButtons from "./FoodPreferenceButtons"
import ChatInput from "./ChatInput"
import ChatMessage from "./ChatMessage"
import ButtonContainer from "./ButtonContainer"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/store/store"
import { updateMessageList } from "@/store/slices/chatSlice"

export default function ChatBot() {
    const dispatch = useDispatch()
    const messageList = useSelector(
        (state: RootState) => state.chat.messageList,
    )
    const foodList = useSelector(
        (state: RootState) => state.user.preferences.food,
    )
    const [showFoodPreferenceButtons, setShowFoodPreferenceButtons] =
        useState(true)
    const [inputQuery, setInputQuery] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleFoodChoice = (buttonChoice: string): void => {
        setShowFoodPreferenceButtons(false)
        if (messageList.length < 2) {
            dispatch(
                updateMessageList({
                    type: "text",
                    role: "user",
                    content: [`I'm hungry for some ${buttonChoice} food`],
                }),
            )
            dispatch(
                updateMessageList({
                    type: "text",
                    role: "agent",
                    content: [`What type of food are you after?`],
                }),
            )
        } else {
            dispatch(
                updateMessageList({
                    type: "text",
                    role: "user",
                    content: [
                        `I would like to eat ${buttonChoice}. Do you know any places in Stockholm?`,
                    ],
                }),
            )
        }

        fetchAgentResponse(buttonChoice)
    }
    const handleInputSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        setShowFoodPreferenceButtons(false)
        dispatch(
            updateMessageList({
                type: "text",
                role: "user",
                content: [inputQuery],
            }),
        )
        setInputQuery("")
        fetchAgentResponse(inputQuery)
    }
    const selectPrompt = () => {
        if (messageList.length < 2) {
            return "Answer the previus question with 5 main dishes  that belongs to the country. The format should be: X, X, X, X, X"
        } else if (messageList.length < 5) {
            return "Answer the previus question with 3 https links to resturants in Stockholm that serves that type of food. The format should be links without name: 1. https://x.x 2. https://x.x 3. https://x.x"
        }
    }

    const delay = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms))

    const fetchAgentResponse = async (query: string) => {
        setIsLoading(true)
        selectPrompt()

        try {
            const context = messageList
                .map((message) => message.content)
                .join("\n")
            const fullQuery = `${context}\n${query}`

            const fetchPromise = axios.post(
                "https://localhost:7038/api/OpenAi/AskAiAssistant",
                {
                    question: fullQuery,
                    prompt: selectPrompt(),
                },
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    withCredentials: true, // This line ensures cookies are sent with the request
                },
            )

            // Delay promise
            const delayPromise = delay(2000)

            // Wait for both promises to resolve
            const [response] = await Promise.all([fetchPromise, delayPromise])

            if (response.status !== 200) {
                throw new Error("Nätverksproblem")
            }

            const data = response.data
            filterAgentResponse(data.response)
        } catch (error) {
            console.error("Något gick fel i fetchen:", error)
        } finally {
            setIsLoading(false)
        }
    }

    const filterAgentResponse = (agentResponse: string) => {
        let responseType
        let textContent

        switch (true) {
            case agentResponse.split(", ").length === 5:
                // Om svaret innehåller 5 ord åtskilda av komman och ska visas som knappar
                responseType = "button"
                textContent = agentResponse
                    .split(",")
                    .map((item) => item.trim())

                break

            case /\d+\./.test(agentResponse):
                // Om texten innehåller en lista
                responseType = "list"
                textContent = [agentResponse]
                break
            case /https?:\/\/\S+/.test(agentResponse):
                // Om strängen innehåller en länk
                responseType = "link"
                textContent = [agentResponse]
                break

            default:
                // Om svaret inte matchar något av de ovanstående fallen
                responseType = "text"
                textContent = [agentResponse]
                break
        }

        dispatch(
            updateMessageList({
                type: responseType,
                role: "agent",
                content: textContent,
            }),
        )
    }
    return (
        <main className="flex h-screen w-full flex-col items-center justify-between gap-4">
            <ChatHeading />
            <ChatLog>
                {messageList.map((message, index) =>
                    message.type === "button" ? (
                        <ButtonContainer
                            message={message}
                            handleFoodChoice={handleFoodChoice}
                            key={index}
                        />
                    ) : (
                        <ChatMessage
                            messageContent={message.content}
                            messageRole={message.role}
                            key={index}
                            messageType={message.type}
                        />
                    ),
                )}

                {showFoodPreferenceButtons && (
                    <div className="flex w-11/12 flex-wrap justify-center gap-2">
                        {foodList
                            .filter((food) => food.selected === true)
                            .map((food, index) => (
                                <FoodPreferenceButtons
                                    key={index}
                                    onFoodChoice={handleFoodChoice}
                                    foodPreference={food.label}
                                />
                            ))}
                    </div>
                )}
                {isLoading && <ChatLoader />}
                {/* <ChatLoader /> */}
            </ChatLog>
            <ChatInput
                handleInputSubmit={handleInputSubmit}
                inputQuery={inputQuery}
                setInputQuery={setInputQuery}
            />
        </main>
    )
}
