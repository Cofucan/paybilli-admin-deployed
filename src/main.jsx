import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {QueryClientProvider} from "@tanstack/react-query";
import {AuthProvider} from "./context/AuthContext.jsx";
import {queryClient} from "./utils/constants.js";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <App/>
            </AuthProvider>
        </QueryClientProvider>
    </StrictMode>,
)
