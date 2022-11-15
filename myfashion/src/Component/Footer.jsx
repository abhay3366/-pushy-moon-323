import "../Css/Footer.css"
import {Link} from "react-router-dom"
import { InputGroup,Input,InputRightAddon,Text } from '@chakra-ui/react';
import {  HStack} from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { BsInstagram} from "react-icons/bs";
import {  FaFacebookSquare,FaPinterestSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BsSnapchat,BsApple } from "react-icons/bs";


// Style
const footerLi={
    listStyle:"none"
}
const footerContainer={
    width:"90%",
    margin:"auto",
    paddingTop:"100px",
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
}
const footerIcon={
    width:"50%",
    display:"flex",
    justifyContent:"space-between",
    marginTop:"15px"
    
}


const Footer=()=>{
    return(
        <>
            <div style={{background:"#181818",color:"white",marginTop:"10px"}} >
                <div  style={footerContainer}>
                    <div>
                        <Text fontSize='2xl' color="yellow" mb="19px" as='b'> Bewakoof</Text>
                        <Text fontSize='14px' color="yellow" pb="16px"> CUSTOMER SERVICE</Text>
                        <ul style={footerLi}>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                            <li><Link to="/trackOrder">Track Order</Link></li>
                            <li><Link to="/returnOrder">Return Order</Link></li>
                            <li><Link to="/cancleOrder">Cancle Order</Link></li>
                        </ul>
                        
                    </div>
                    <div >
                        <Text fontSize='14px' color="yellow" pb="16px"> COMPANY</Text>
                        <ul style={footerLi}>
                            <li>About Us</li>
                            <li>We're Hiring</li>
                            <li>Term and Condition</li>
                            <li>Privacy and Policy</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                    <Text fontSize='14px' color="yellow" pb="16px"> CONNECT WITH US</Text>
                    <ul style={footerLi}>
                       <HStack>
                            <BsInstagram style={{color:"white"}} />
                            <li> 4.7M People Like This</li>
                       </HStack>
                      <HStack>
                      <FaFacebookSquare />
                        <li>1M Followers </li>
                      </HStack>
                      <div style={footerIcon}>
                        <AiFillTwitterSquare  pl={5} size={18} />
                        <FaPinterestSquare size={18} pr={15}/>
                        <BsSnapchat size={18} pl={5}/>
                        <BsApple size={18} pl={5}/>
                      </div>
                      
                    </ul>
                    </div>
                    <div>
                    <Text fontSize='14px' color="yellow" pb="16px"> KEEP UP TO UPDATE</Text>
                       
                        <InputGroup>
                            <Input type='tel' errorBorderColor='yellow'  variant='flushed' placeholder='Enter Email Id' />
                            <InputRightAddon bg="yellow" children='SUBSCRIBE' />
                        </InputGroup>
                    </div>
                </div>
                <Divider orientation='horizontal' h="3px" />
            </div>
        </>
    )
}
export {Footer}