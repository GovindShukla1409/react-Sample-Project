import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/OurServices";
import Careers from "../components/Careers";
import Guides from "../components/Guides";
import Experience from "../components/Experience";

const route = [
    { path: '/', Component: Home },
    { path: '/about', Component: About },
    { path: '/services', Component: Services },
    { path: '/careers', Component: Careers },
    { path: '/guides', Component: Guides },
    { path: '/experience', Component: Experience },
]
export default route;