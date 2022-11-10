import { BrowserRouter, Route, Routes } from "react-router-dom"
import Welcome from "./static/Welcome"
import Register from "./auth/authentication/Register"
import Login from "./auth/authentication/Login"
import ResetPassword from "./auth/authentication/ResetPassword"
import PrivateRoute from "./auth/authorization/PrivateRoute";
import Home from "./transactions/Home"
import Visualization from "./graphs/Visualization"
import Logout from "./auth/authentication/Logout";
// test
import DefaultLayout from "./default_layout/DefaultLayout"

const MainRouter = () => {
    const privateRoutes = [
        {
            path: "/",
            redirectTo: "/welcome",
            privateComponent: () => { return <Home /> }
        },
        {
            path: "/visualization",
            redirectTo: "/login",
            privateComponent: () => { return <Visualization /> }
        },
        {
            path: "/logout",
            redirectTo: "/welcome",
            privateComponent: () => { return <Logout /> }
        }
    ]

    return (
        <BrowserRouter>
            <Routes>
                {/* test route */}
                <Route path="/test" element={
                    <DefaultLayout >
                        <p>table</p>
                        <p>graph</p>
                    </DefaultLayout>} />


                <Route path="/welcome" element={<Welcome />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot" element={<ResetPassword />} />
                {
                    privateRoutes.map((ele, index) => {
                        return (
                            <Route
                                key={index}
                                path={ele.path}
                                element={
                                    <PrivateRoute redirectTo={ele.redirectTo}>
                                        {ele.privateComponent()}
                                    </PrivateRoute>
                                }
                            />
                        )
                    })
                }
            </Routes>
        </BrowserRouter>
    );
}

export default MainRouter;