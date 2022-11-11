
import { Route,Routes } from "react-router-dom"
import { Logo } from "./Logo"
import { Mens } from "./Mens"
import { MobileCover } from "./MobileCover"
import { Women } from "./Women"
import {Login} from "./Login"
import { AddToCart } from "./AddToCart"

const AllRoutes=()=>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Logo/>} >MENS</Route>
                <Route path="/mens" element={<Mens/>} >MENS</Route>
                <Route path="/women" element={<Women/>} >WOMEN</Route>
                <Route path="/MobileCover" element={<MobileCover/>}>MOBILE COVERS</Route>
                <Route path="/login" element={<Login />}>LOGIN</Route>
                <Route path="/addToCart" element={<AddToCart />}>LOGIN</Route>
            </Routes>


        </>
    )
}
export {AllRoutes}