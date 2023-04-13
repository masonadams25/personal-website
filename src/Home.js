import React from 'react';
import {
  Box,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react';


function Home() {
    return (
      <Box
      w='100%'
      h='100vh'
      bgGradient={[
        'linear(to-tr, #2CD383, #0648F9)',
        'linear(to-tl, #0648F9, #2CD383)',
      ]}
    >
        <Flex justify='center'>
          <Stack spacing='0px'>
            <Text color='white' fontSize={['3xl', '4xl', '5xl','6xl']} fontWeight='extrabold'>
                Hello!
            </Text>
            <Text color='white' fontSize={['3xl', '4xl', '5xl','6xl']} fontWeight='extrabold'>
                I'm Mason
            </Text>
            <Text color='white' fontSize={['3xl', '4xl', '5xl','6xl']} fontWeight='extrabold'>
                Welcome to my website
            </Text>
          </Stack>
        </Flex>
      </Box>      
      
    );
  }

  export default Home;