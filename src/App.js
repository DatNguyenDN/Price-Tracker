import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useDarkMode } from "./DarkModeContent";
import { publicRoutes } from "./Routes/index";
import DefaultLayout from "./Layout/DefaultLayout";
function App() {


    // const {darkMode, toggleDarkMode} = useDarkMode();
    {/**className={` 
       ${darkMode ? "dark" : "light"}`} */}

    return (
       <div className="h-screen"  >
            <Router>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout || DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
       </div>
    );
}

export default App;
