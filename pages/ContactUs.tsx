import React from 'react'
import {
    Stack,
    Flex,
    Button,
    Box,
    Text,
    VStack,
    useBreakpointValue,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Textarea,
    Link,
    Heading,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function ContactUs() {
    let [value, setValue] = React.useState("")

    let handleInputChange = (e) => {
      let inputValue = e.target.value
      setValue(inputValue)
    }
  
    return (

     <> 

<Flex
      w={'full'}
      h={'100vh'}
      // backgroundImage={
      //   'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      // }
      // backgroundSize={'cover'}
      // backgroundPosition={'center center'}
      bgColor="blue.100"

       >
      <VStack
        w={'full'}
        justify={'center'}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                    <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Contact Us</Heading>
       
        </Stack>

     

        <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={10}>
         
            <Stack >
            
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="contactnumber">
                <FormLabel>Contact Number</FormLabel>
                <Input type="Number" />
              </FormControl>
              <FormControl id="contactnumber">
                <FormLabel>Message</FormLabel>
                            <Textarea
                                    value={value}
                                    onChange={handleInputChange}
                            
                                    placeholder="message"
                                    size="sm"
                />              </FormControl>
              <Stack >
                
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'brand.100',
                  }}>
                  Submit
                </Button>
              </Stack>
            </Stack>
          </Box>
        

      </VStack>
    </Flex>



      </>
    );
  }