import { Center, Heading ,SimpleGrid , Box ,Stack, Flex, Text} from '@chakra-ui/layout'

import {

    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';

import Image from 'next/image';
import { ReactElement } from 'react';

import smartphone from '../OurServices/assests/user-interface.png'
import webservice from '../OurServices/assests/web-development.png'
import seo from '../OurServices/assests/search-engine.png'



interface ServiceProps {
    title: string;
    text: string;
    icon: ReactElement;
  }
  

export const data = [
  
    {
        id:1, title : 'Web Development' ,serviceItems :"React Js ,Angular js" ,Description : "Web devlopement using react native etc" ,imgSource : webservice ,hrefLink : "/home"
    },
    {
      id:2, title : 'App Development' ,serviceItems :"Java  , Swift", Description : "App devlopement using react native , ios , fluter etc" ,imgSource : smartphone , hrefLink : "/home"
    },
    {
        id:3, title : 'Digital Marketing' ,serviceItems :"SemRush , Google Analytics",Description : "Keyboard Analysis , Ranking ",imgSource : seo ,hrefLink : "/"
    }
]



  const Service = ({ title, text, icon }: ServiceProps) => {
    return (
      <Stack  >
          <Center>{icon}</Center>
          <Center><Heading size="lg" fontWeight={400}>{title}</Heading></Center>
        <Text color={'gray.600'}>{text}</Text>
      </Stack>
    );
  };
  


const ServicesSection = () => {
    return (
        <div>
            <Center>
                <Heading as="h2" size="xl">Our Services</Heading>
            </Center>

            <Box p={20}>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                 {data.map((s=> 
                 <div key={s.id}
                 > 
                     <Box
                      bgColor='white'
                        maxW={'330px'}
                        w={'full'}
                        boxShadow={'2xl'}
                        _hover = {{
                          bgColor : 'gray.50',
                        }}
                        rounded={'md'}
                        overflow={'hidden'}>
                        <Stack
                      
                         key ={s.id}
                        textAlign={'center'}
                        p={6}
                        color='gray.800'
                        align={'center'}>
                        <Text>{s.title}</Text>
                            <Stack
                             direction={'row'} 
                             align={'center'} 
                             justify={'center'}>
                                 <Box  m={4}>
                                 <Image height="100" width="100" alt={s.title} src={s.imgSource} />
                                 </Box>
                            </Stack>
                            <Button
                bgColor={'brand.100'}
                rounded={'full'}
                _hover = {{
                  bgColor : 'blue.700'
                }}
                color={'white'}
              >
                            Know More 
                          </Button>

                            </Stack>
                       </Box>
                </div>
                                    ))}

                  </SimpleGrid>
                                </Box>
        </div>
    )
}

export default ServicesSection
