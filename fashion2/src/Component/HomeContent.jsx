import "../Css/Navbar.css";
import { Box,Image } from "@chakra-ui/react"

const HomeContent=()=>{
    return(
        <>
            <Box pt={3}>
                <Image h={70} src={ require("../Image/Gender-Picker-Banner-desktop-desktop-1-1667479003.webp")} alt="contentImg" />
            </Box>
            <div className="homeContentContainer">
                <div>
                    <img src="https://images.bewakoof.com/web/Gender-Picker-Banner-desktop-desktop-men-2-1667479004.jpg" alt="homeContentImg" />
                </div>
                <div>
                    <img src="https://images.bewakoof.com/web/Gender-Picker-Banner-desktop-desktop-women-3-1667479005.jpg" alt="homeContent Img" />
                </div>
            </div>
        </>
    )
}
export default HomeContent