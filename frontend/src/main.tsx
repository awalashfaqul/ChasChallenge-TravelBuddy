import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./store/store.ts"
import App from "./App.tsx"
import "./index.css"
import { ThemeProvider } from "./Theme/ThemeContext.tsx"
import { BrowserRouter } from "react-router-dom"


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <BrowserRouter>
                        <App />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
)
