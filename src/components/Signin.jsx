import { FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { InputGroup,InputRightElement } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Signin = () => {
    const [email,setEmail]=useState();
    const [show,setShow]=useState(false);
    const [password,setPassword]=useState();
    const navigate=useNavigate();
    function handleClick()
    {
        setShow(!show);
    }
    async function handleSignIn() {
        try {
            const res = await axios.post('https://proj-backend-kappa.vercel.app/login', {
                email: email,
                password: password
            });
            if (res.status === 200) {

                console.log(res.data);
                // console.log(res.data.token);
                localStorage.setItem('userInfo',JSON.stringify(res.data.token))
                // localStorage.setItem('uid',JSON.stringify(res.data.email));
                Cookies.set('uid',res.data.email)
                alert('Account successful');
                navigate('/dashboard')
                // alert('Account successful');
            }
        } catch (error) {
            console.error('Error during sign up:', error);
        }
    }
  return (
   <VStack spacing='5px'>
         <FormControl id='email' isRequired>
            <FormLabel>
                Email ID
            </FormLabel>
            <Input placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)}/>
         </FormControl>
         <FormControl id='Password' isRequired>
            <FormLabel>
                Password
            </FormLabel>
            <InputGroup>
            <Input
             type={show ? 'text' : 'password'}
             placeholder='Enter your Password' color='black'
                onChange={(e)=>setPassword(e.target.value)}
            />
            <InputRightElement>
                <Button bgColor='transparent' marginRight='12px' onClick={handleClick}>
                    {
                        show ? "Hide" : "Show"
                    }
                </Button>
            </InputRightElement>
            </InputGroup>         </FormControl>
         <Button w='80%' marginTop='5px' colorScheme='blue' onClick={handleSignIn} >Sign In</Button>

   </VStack>
  )
}

export default Signin