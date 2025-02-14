import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home";
import ErrorPage from "../components/ErrorPage";
import Resume from "../pages/resume";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,

            },
            {
                path: "/resume",
                element: <Resume></Resume>,
            },

            {
                path: "*",
                element: <ErrorPage></ErrorPage>,

            }
        ]
    },
]);

export default routes