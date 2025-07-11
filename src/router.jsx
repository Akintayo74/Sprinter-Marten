import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import DnD from './DnD';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/dnd",
        element: <DnD />,
    }
])

export default function Router() {
    return <RouterProvider router={router} />;
}