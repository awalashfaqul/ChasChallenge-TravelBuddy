import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Chat from "@/types/chat/Chat"
import Message from "@/types/chat/Message"

const initialState: Chat = {
    id: null,
    userId: null,
    //agentId: null,
    messageList: [], // Ensure id is typed as a string
    heading: "",
    subHeading: "",
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        updateChatHeading: (state, action: PayloadAction<string>) => {
            state.heading = action.payload
        },
        updateSubHeading: (state, action: PayloadAction<string>) => {
            state.subHeading = action.payload
        },
        updateMessageList: (state, action: PayloadAction<Message>) => {
            state.messageList = [...state.messageList, action.payload]
        },
        clearMessageList: (state) => {
            state.messageList = []
        },
    },
})

export const {
    updateChatHeading,
    updateSubHeading,
    updateMessageList,
    clearMessageList,
} = chatSlice.actions

export default chatSlice.reducer
