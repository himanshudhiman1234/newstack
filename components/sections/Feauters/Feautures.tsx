import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading, Center } from '@chakra-ui/react';
import { FcAssistant, FcCustomerSupport, FcFlashOn, FcLike } from 'react-icons/fc';
import { BiChart, BiCode, BiLike, BiSupport } from 'react-icons/bi';
import { GrSupport } from 'react-icons/gr';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack  p={4} align={'center'} shadow={'lg'} _hover={{
      shadow :'2xl'
    }} rounded={"md"}>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text  fontWeight={600}>{title}</Text>
      <Text   textAlign={'center'}
      color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function FeauturesPage() {
  return (
      <>
    <Center>
        {/* <Heading as="h2" size="xl">Why we ?</Heading> */}
        {/* <Text>we the best service providers in india</Text> */}
    </Center>
    <Box p={20}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
        <Feature
          icon={<Icon as={BiCode} w={10} h={10}  color="brand.100" />}
          title={'Code Quality'}
          text={
            'It is the most effective way to lower technical debt. When the code is clean and elegant, it is easy to understand, maintain and extend.'
          }
        />
        <Feature
          icon={<Icon as={BiSupport} w={10} h={10} color="brand.100" />}
          title={'Support 24x7'}
          text={
            'Support model ensures that a customer is able to get their issue resolved no matter what day or time it is.'
          }
        />

        <Feature
          icon={<Icon as={BiChart} w={10} h={10} color="brand.100" />}
          title={'Results'}
          text={
            'Client satisfaction is defined as a measurement that determines how happy customers are with a company products, services, and capabilities.'
          }
        />

        <Feature
          icon={<Icon as={BiLike} w={10} h={10} color="brand.100" />}
          title={'Client Satisfaction'}
          text={
            'Client satisfaction is defined as a measurement that determines how happy customers are with a company products, services, and capabilities.'
          }
        />

      </SimpleGrid>
    </Box>
    </>
  );
}