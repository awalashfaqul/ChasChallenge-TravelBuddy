import { createSlice } from "@reduxjs/toolkit"

interface OverlayState {
    isVisible: boolean
    overlayType: string | null
}

const initialState: OverlayState = {
    isVisible: false,
    overlayType: null,
}

const overlaySlice = createSlice({
    name: "overlay",
    initialState,
    reducers: {
        showOverlay: (state, action) => {
            state.isVisible = true
            state.overlayType = action.payload
        },
        hideOverlay: (state) => {
            state.isVisible = false
            state.overlayType = null
        },
    },
})

export const { showOverlay, hideOverlay } = overlaySlice.actions

export default overlaySlice.reducer
