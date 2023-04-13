import React from 'react';
import {
  Box,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react';


function About() {
    return (
      <Box
      w='100%'
      h='100vh'
      bgGradient={[
        'linear(to-tl, #2CD383, #0648F9)',
        'linear(to-br, #0648F9, #2CD383)',
      ]}
    >
        <Flex justify='center'>
          <Stack spacing='0px'>
            <Text color='white' fontSize={['3xl', '4xl', '5xl','6xl']} fontWeight='extrabold'>
                Under construction :(
            </Text>
            <Text color='white' fontSize={['3xl', '4xl', '5xl','6xl']} fontWeight='extrabold'>
            </Text>
          </Stack>
        </Flex>
      </Box>      
      
    );
  }

  export default About;