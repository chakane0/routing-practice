import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "./WelcomePage";

function Route66() {
    return <p>Hello, Route!</p>;
}


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Route66 />
    },
    {
        path: "example1",
        element: <WelcomePage />
    }
]);