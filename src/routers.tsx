import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import AppLayout from "./components/AppLayout"

export const router = createBrowserRouter([
    {
        path: '/', element: <AppLayout />,
        errorElement:<h1>error</h1>,
        children: [
            { path: '/', element: <Home /> },
            { path: 'home', element: <Home /> },
            { path: 'about', element: <About /> },
        ]

    }
])

