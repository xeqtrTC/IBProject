import { createBrowserRouter } from "react-router-dom";
import ResponsiveLayout from "../layout/ResponsiveLayout";
import Homepage from "../pages/Homepage/Homepage";

const routes = createBrowserRouter([
    { element: <ResponsiveLayout />,
        children: [
            { path: '', element: <Homepage /> }
        ]
    }
])

export default routes