import Home from "../Pages/Home"
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import MyTracking from '../Pages/MyTracking'
import PriceTracker from '../Pages/PriceTracker'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/contact', component: Contact},
    {path: '/mytracking', component: MyTracking},
    {path: '/pricetracker', component: PriceTracker},
    {path: '/pricetracker', component: PriceTracker},
    {path: '/login', component: Login},
    {path: '/signup', component: SignUp},
]

const privateRoutes = {


}

export {publicRoutes,privateRoutes}