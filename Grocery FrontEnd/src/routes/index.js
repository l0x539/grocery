

import { Home } from "../pages/homeClient";
import { Test } from "../pages/test";
import { _404 } from "../404";
import { HomeService } from "../pages/homeService";

export const paths = [
    
    { path:"/service", component: HomeService },
    { path:"/test", component: Test },
    { path:"/order/:orderId", component: Test },
    { path:"/", component: Home },
]

export const error = [
    { code:"404", component: _404 }
]