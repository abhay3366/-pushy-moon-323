import { Link} from "react-router-dom"
import {Flex,Box,Spacer} from '@chakra-ui/react'
// import {AllRoutes} from '../Routes/AllRoutes';
import { InputGroup,InputLeftElement,Input,Image } from '@chakra-ui/react'
import { Search2Icon} from '@chakra-ui/icons'
import { FaShoppingBag} from "react-icons/fa";
// import { FiHeart } from "react-icons/fi";


import "../Css/Navbar.css"

const Navbar=()=>{
   return(
    <>
        {/* <AllRoutes /> */}
        {/* TopNavbar */}
        <div style={{background:"#EAEAEA",padding:"5px"}}>
        <Flex  style={{fontSize:"12px",width:"90%",margin:"auto"}}>
            <Flex gap='5' justifyContent='space-around'  >
                <Box>
                    <Link to="/offer">Offer</Link>
                </Box>
                <Box>
                    <Link to="/fanbook">Fanbook</Link>
                </Box>
                <Box>
                    <Link to="/downloadApp">Download App</Link>
                </Box>
                <Box>
                    <Link to="/tribe">TriBe Membership</Link>
                </Box>
            </Flex>
            <Spacer />
            <Flex gap='5'>
                <Box>
                    <Link to="/contact">Contact Us</Link>
                </Box>
                <Box>
                    <Link to="/trackOrder">Track Order</Link>
                </Box>
            </Flex>

        </Flex>
        </div>

        {/* Navbar */}
        <div>
        <Flex style={{fontSize:"12px",width:"90%",margin:"auto"}}>
            <Box p='1' flexGrow="4">
                <span className="logo">
                        <Link to="/">
                            <svg width="200" height="36" viewBox="0 0 264 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.1 28.4c0 .9-.1 1.7-.4 2.3-.2.7-.6 1.2-1 1.7s-.9.9-1.5 1.2c-.6.3-1.2.5-1.9.7-.7.2-1.5.3-2.3.4-.8.1-1.6.1-2.5.1H4v-23h16.3c.7 0 1.3 0 2 .1s1.3.2 1.9.3c.6.2 1.2.4 1.7.6.5.3 1 .6 1.4 1.1.4.4.7 1 .9 1.6.2.6.3 1.3.3 2.2 0 1.5-.4 2.7-1.1 3.5-.7.9-1.9 1.5-3.5 1.7 1.1.1 2.1.2 2.9.5.8.3 1.4.6 1.9 1.1.5.5.9 1 1.1 1.7.2.6.3 1.3.3 2.2zm-7.7-9.8c0-.3 0-.6-.1-.8-.1-.3-.3-.5-.5-.7-.2-.2-.6-.4-1-.5-.4-.1-.9-.2-1.5-.2h-9.1v4.3h9.1c.6 0 1.1-.1 1.5-.2.4-.1.7-.3 1-.5.2-.2.4-.4.5-.7.1-.2.1-.4.1-.7zm1.4 9.1c0-.5-.1-.9-.3-1.3-.2-.3-.5-.6-.8-.7-.4-.2-.9-.3-1.5-.3-.6-.1-1.3-.1-2.2-.1h-8.9v4.9H19c.8 0 1.6 0 2.2-.1.6-.1 1.1-.2 1.5-.4.4-.2.7-.4.8-.7.3-.4.3-.8.3-1.3zM59.3 33.6c-1.9.6-3.8 1.1-5.6 1.3-1.9.3-3.8.4-5.7.4-2.5 0-4.7-.3-6.7-.8s-3.6-1.3-4.9-2.3c-1.3-1-2.4-2.3-3.1-3.8-.7-1.5-1.1-3.2-1.1-5 0-1.7.4-3.3 1.1-4.8.7-1.5 1.7-2.8 3-3.9s2.9-2 4.7-2.6c1.8-.6 3.9-.9 6.1-.9 2.1 0 4 .3 5.7.8 1.7.6 3.2 1.4 4.5 2.5 1.2 1.1 2.2 2.5 2.9 4.1.7 1.6 1 3.5 1 5.6v1.5H38.6c.2.7.5 1.4 1 2 .5.6 1.1 1.1 1.9 1.5.8.4 1.8.7 2.9 1 1.2.2 2.5.4 4.1.4 1.1 0 2.2-.1 3.3-.2 1.1-.1 2.1-.3 3.1-.6.9-.2 1.8-.5 2.6-.8.8-.3 1.4-.6 1.8-.8v5.4zM55 21.2c-.1-.6-.2-1.2-.5-1.8-.3-.6-.7-1.2-1.3-1.6-.6-.5-1.4-.9-2.4-1.2-1-.3-2.2-.5-3.7-.5-1.4 0-2.6.2-3.6.5s-1.9.8-2.5 1.3c-.7.5-1.2 1.1-1.6 1.7-.4.6-.6 1.1-.7 1.6H55zM86.8 11.8l5.9 15.9L99 11.8h6.4l-9.2 22.9h-6.9l-6-15.4-6 15.4h-6.9l-9.2-22.9h6.5l6.2 15.6 6-15.6h6.9zM126.7 34.7v-2.3c-.8.4-1.6.8-2.5 1.2-.9.3-1.8.6-2.8.9-1 .2-2 .4-3 .5-1 .1-2.1.2-3.1.2-1.2 0-2.4-.1-3.6-.4-1.2-.2-2.2-.6-3.1-1.1-.9-.5-1.6-1.2-2.1-2.1-.5-.8-.8-1.9-.8-3.1 0-1.5.4-2.8 1.3-3.9.8-1 2.1-1.9 3.9-2.5 1.7-.7 3.9-1.2 6.6-1.5 2.7-.4 5.8-.6 9.4-.8v-.5c0-.4-.1-.8-.3-1.1-.2-.4-.6-.7-1.1-1-.5-.3-1.3-.5-2.2-.7-.9-.2-2.1-.3-3.5-.3-1.1 0-2.2.1-3.3.2-1.1.1-2.2.3-3.2.5s-2 .4-2.9.7c-.9.3-1.7.5-2.5.8v-5.5c.8-.2 1.7-.4 2.6-.6 1-.2 2-.4 3-.5 1-.1 2.1-.3 3.2-.3 1.1-.1 2.1-.1 3.1-.1 1.9 0 3.7.2 5.3.5 1.6.3 3 .8 4.2 1.5 1.2.7 2.1 1.5 2.8 2.5.7 1 1 2.2 1 3.7v15.2h-6.4v-.1zm0-10.5c-2.4.1-4.4.2-6.1.4-1.7.2-3 .4-4.1.6-1.1.2-2 .5-2.6.7-.6.3-1.1.5-1.4.8-.3.3-.5.5-.6.8-.1.3-.1.5-.1.7 0 .3.1.5.2.8.1.2.4.5.8.7.4.2.8.3 1.4.5.6.1 1.4.2 2.3.2 1 0 2-.1 3-.2 1-.2 1.9-.4 2.8-.6.9-.3 1.7-.6 2.4-1 .8-.4 1.4-.8 2-1.2v-3.2zM159.7 34.7c-.1-1.2-.4-2.3-.9-3.3-.5-.9-1.1-1.7-1.8-2.4s-1.6-1.2-2.5-1.7c-.9-.4-1.9-.8-2.9-1.1-1-.3-2-.4-2.9-.6-1-.1-1.9-.2-2.7-.2h-1.8v9.2H138V11.8h6.2v8.8h1.3c.9 0 1.8-.1 2.7-.2.9-.1 1.9-.3 2.8-.6.9-.3 1.8-.7 2.6-1.1.8-.5 1.6-1 2.3-1.7.7-.7 1.2-1.4 1.7-2.3.4-.9.7-1.8.8-2.9h6.3c-.1 1.2-.4 2.3-.7 3.3-.4 1-.8 1.9-1.4 2.6-.6.8-1.2 1.4-1.8 2-.7.6-1.4 1.1-2.1 1.5-.7.4-1.4.8-2.1 1-.7.3-1.4.5-2 .6.8.1 1.6.3 2.4.6.8.3 1.7.6 2.5 1s1.6 1 2.4 1.6c.8.6 1.4 1.4 2 2.2.6.8 1.1 1.8 1.5 2.9.4 1.1.7 2.3.8 3.6h-6.5zM246.5 16.7c-.7 0-1.4 0-1.9.1-.6.1-1.1.2-1.5.4-.4.2-.7.5-.9.9-.2.4-.3 1-.3 1.7v.9h17.3v4.9h-17.3v9.2h-6.2V19.3c0-1.2.2-2.2.5-3.2.4-.9.9-1.7 1.8-2.4.8-.6 1.9-1.1 3.3-1.5 1.4-.3 3-.5 5.1-.5h13.7v4.9h-13.6v.1zM199.1 23.1c0 2-.4 3.8-1.1 5.3-.7 1.5-1.8 2.8-3.2 3.9-1.4 1-3 1.8-5 2.3-2 .5-4.2.8-6.6.8-2.4 0-4.7-.3-6.6-.8-2-.5-3.7-1.3-5-2.3-1.4-1-2.5-2.3-3.2-3.9-.8-1.5-1.1-3.3-1.1-5.3s.4-3.8 1.1-5.3c.8-1.5 1.8-2.8 3.2-3.9 1.4-1 3.1-1.8 5-2.3 2-.5 4.2-.8 6.6-.8 2.4 0 4.6.3 6.6.8s3.6 1.3 5 2.3c1.4 1 2.4 2.3 3.2 3.9.7 1.5 1.1 3.3 1.1 5.3zM233 23.1c0 2-.4 3.8-1.1 5.3-.7 1.5-1.8 2.8-3.2 3.9-1.4 1-3 1.8-5 2.3-2 .5-4.2.8-6.6.8-2.4 0-4.7-.3-6.6-.8-2-.5-3.7-1.3-5-2.3-1.4-1-2.5-2.3-3.2-3.9-.8-1.5-1.1-3.3-1.1-5.3s.4-3.8 1.1-5.3c.8-1.5 1.8-2.8 3.2-3.9 1.4-1 3.1-1.8 5-2.3 2-.5 4.2-.8 6.6-.8 2.4 0 4.6.3 6.6.8s3.6 1.3 5 2.3c1.4 1 2.4 2.3 3.2 3.9.7 1.5 1.1 3.3 1.1 5.3zM231 11.8l-2.6-2.4c-2.3-2-5.3-3-8.4-2.6l-4.6.6-.6-4.7 4.6-.6c4.4-.5 8.8.9 12.1 3.8l2.6 2.4-3.1 3.5z" fill="#000"/></svg>
                        </Link>
                </span>
            </Box>
            
            <Box p='1' >
                <ul className="nav-links">
                        <Link to="/mens"  className="mens">
                            <li>MENS</li>
                        </Link>
                        <Link to="/women" className="women">
                            <li>WOMEN</li>
                        </Link>
                        <Link to="/MobileCover" className="mobileCover">
                            <li>MOBILE COVERS</li>
                        </Link>
                </ul>
            </Box>
            <Box p='1' >
                <InputGroup>
                        <InputLeftElement
                        pointerEvents='none'
                        children={<Search2Icon color='gray.300' />}
                        />
                        <Input type='tel' focusBorderColor='gray.250' placeholder='Search by Product,category or collection' className="navSearch" />
                </InputGroup>
            </Box>
            
            <Box pt='3' pl="4"  gridGap={5}>
                <Link to="/login" className="login">
                    <li style={{listStyle:"none"}}>LOGIN</li>
                </Link>
            </Box>
            <Box pt='3' pl="4">
                <Link to="/login" className="login">
                    {/* <li style={{listStyle:"none"}}><FiHeart style={{fontSize:"25px"}} /></li> */}
                </Link>
            </Box>
            <Box pt='3' pl="4">
                <Link to="/login" className="login">
                    <li style={{listStyle:"none"}}><FaShoppingBag style={{fontSize:"25px"}} /></li>
                </Link>
            </Box>
            <Box pt='3' pl="4">
                <Link to="/login" className="login">
                <Image borderRadius='full' boxSize='30px'  src='https://images.bewakoof.com/web/india-flag-round-1639566913.png'alt='Indian Flag'/>
                </Link>
            </Box>
        </Flex>
        </div>
    </>
   ) 
}
export {Navbar}