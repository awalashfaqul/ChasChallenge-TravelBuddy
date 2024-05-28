type ChatMessageProps = {
    messageContent: string
    messageRole: string
    messageType: string
}

export default function ChatMessage({
    messageContent,
    messageRole,
    messageType,
}: ChatMessageProps) {
    return messageRole === "agent" ? (
        messageType === "text" ? (
            <p className="botPrompt">{messageContent}</p>
        ) : messageType === "link" ? (
            <p className="botPrompt">{messageContent}</p>
        ) : messageType === "list" ? (
            <div className="botPrompt">{messageContent}</div>
        ) : null
    ) : (
        <p className="userPrompt">{messageContent}</p>
    )
}
