
import { Route,Routes } from "react-router-dom"
import { Logo } from "./Logo"
import { Mens } from "./Mens"
import { MobileCover } from "./MobileCover"
import { Women } from "./Women"
import {Login} from "./Login"
import { AddToCart } from "./AddToCart"
import {Home} from "./Home"
import { Offer } from "./Offer"
import { Fanbook } from "./Fanbook"
import { DownloadApp } from "./DownloadApp"
import { TriBe } from "./TriBe"

const AllRoutes=()=>{
    return(
        <>
            <Routes>
                {/* <Route path="/" element={<Logo/>} ></Route> */}
                <Route path="/" element={<Home />} >Home</Route>
                <Route path="/mens" element={<Mens/>} ></Route>
                <Route path="/women" element={<Women/>} >WOMEN</Route>
                <Route path="/MobileCover" element={<MobileCover/>}>MOBILE COVERS</Route>
                <Route path="/login" element={<Login />}>LOGIN</Route>
                <Route path="/addToCart" element={<AddToCart />}>AddToCart</Route>
                <Route path="/offer" element={<Offer />}>AddToCart</Route>
                <Route path="/fanbook" element={<Fanbook />}>Fanbook</Route>
                <Route path="/downloadApp" element={<DownloadApp />}>DownloadApp</Route>
                <Route path="/tribe" element={<TriBe />}>TriBe</Route>
            </Routes>
        </>
    )
}
export {AllRoutes}