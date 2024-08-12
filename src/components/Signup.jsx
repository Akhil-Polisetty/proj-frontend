import React, { useState } from 'react'
import { Stack, HStack, VStack, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
  import { Button, ButtonGroup } from '@chakra-ui/react'
// const axios=require('axios')
import axios from 'axios';

const Signup = () => {
    const [show,setShow]=useState(false);
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [confpassword,setConfpassword]=useState();
    // const history=useHistory();
    function handleClick()
    {
        setShow(!show);
    }
    async function handleSignUP() {
        try {
            const res = await axios.post('https://proj-backend-peach.vercel.app/register', {
                name: name,
                email: email,
                password: password
            });
            if (res.status === 201) {
                console.log(res.data);
                console.log(res.data.token);
                console.log('Account successfully created');
                // localStorage.setItem('userInfo',JSON.stringify(res.data.token))
                alert('Account successful');
            }
        } catch (error) {
            console.error('Error during sign up:', error);
        }
    }
    return (
    <VStack spacing='5px'>
        <FormControl id='username' isRequired>
            <FormLabel>
                Name
            </FormLabel>
            <Input placeholder='Enter your Username' color='black'
                onChange={(e)=>setName(e.target.value)}
            />
        </FormControl>
        <FormControl id='email' isRequired>
            <FormLabel>
                Email
            </FormLabel>
            <Input placeholder='Enter your Email ID' color='black'
                onChange={(e)=>setEmail(e.target.value)}
            />
        </FormControl>
        <FormControl id='password' isRequired>
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
            </InputGroup>
        </FormControl>
        <FormControl id='confpassword' isRequired>
            <FormLabel>
                Confirm Password
            </FormLabel>
            <Input placeholder='Enter the Password another time' color='black'
                onChange={(e)=>setConfpassword(e.target.value)}
            />
        </FormControl>
        <Button w='80%' marginTop='5px'  colorScheme='blue' onClick={handleSignUP}>Sign up</Button>
    </VStack>
  )
}

export default Signup