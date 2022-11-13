import "../Css/Footer.css"
import {Link} from "react-router-dom"
import { InputGroup,Input,InputRightAddon,Text } from '@chakra-ui/react';
import {  HStack} from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";

const Footer=()=>{
    return(
        <>
            <div style={{background:"black",color:"white",marginTop:"10px"}} >
                <div className="footerContainer" style={{width:"90%",margin:"auto",paddingTop:"100px"}}>
                    <div>
                        <Text fontSize='2xl' color="yellow" mb="19px" as='b'> Bewakoof</Text>
                        <Text fontSize='14px' color="yellow" pb="16px"> CUSTOMER SERVICE</Text>
                        <ul>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                            <li><Link to="/trackOrder">Track Order</Link></li>
                            <li><Link to="/returnOrder">Return Order</Link></li>
                            <li><Link to="/cancleOrder">Cancle Order</Link></li>
                        </ul>
                        
                    </div>
                    <div>
                        <Text fontSize='14px' color="yellow" pb="16px"> COMPANY</Text>
                        <ul>
                            <li>About Us</li>
                            <li>We're Hiring</li>
                            <li>Term and Condition</li>
                            <li>Privacy and Policy</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                    <Text fontSize='14px' color="yellow" pb="16px"> CONNECT WITH US</Text>
                    <ul>
                       <HStack>
                            <BsInstagram style={{color:"white"}} />
                            <li> 4.7M People Like This</li>
                       </HStack>
                      <HStack>
                        <AiOutlineFacebook />
                        <li>1M Followers </li>
                      </HStack>
                      <AiOutlineFacebook />
                    </ul>
                    </div>
                    <div>
                    <Text fontSize='14px' color="yellow" pb="16px"> KEEP UP TO UPDATE</Text>
                       
                        <InputGroup>
                            <Input type='tel'  variant='flushed' placeholder='Enter Email Id' />
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