import { configureStore } from "@reduxjs/toolkit"
import overlayReducer from "@/store/slices/overlaySlice"
import settingsReducer from "@/store/slices/userSlice"
import chatReducer from "@/store/slices/chatSlice"
import userReducer from "@/store/slices/userSlice"
import commonReducer from "@/store/slices/commonSlice"


export const store = configureStore({
    reducer: {
        overlay: overlayReducer,
        settings: settingsReducer,
        chat: chatReducer,
        user: userReducer,
        common: commonReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
