import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    Link,
    IconProps,
  } from '@chakra-ui/react';
  
  export default function AboutCompany() {
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            We at {' '}
            <Text as={'span'}   
   >
              StackZenith IT Solutions
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
           we believe every idea holds immense promise, and therefore, we impart innovation and intelligence to transform your vision into an impeccable reality.

         We emphasize on enterprise grade B2B, B2C and B2E applications that bring value to your life and build long-term strategic partnership with our clients while taking pride in exceeding their expectations using our in-depth engineering skills, and advanced design aesthetic.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <a href="/AboutUs">
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'blue'}
              bg={'brand.100'}
              _hover={{ bg:'brand.100' }}>
              Know More 
            </Button>
            </a>
          </Stack>
          
        </Stack>
      </Container>
    );
  }
  
