type Chat = {
    id: string | null
    userId: string | null
    //agentId: string | null
    messageList: Message[]
    heading: string
    subHeading: string
}

export default Chat
