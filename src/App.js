import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  theme,
  Center,
  Flex,
  Spacer,
  Stack
} from '@chakra-ui/react';

import { Routes, Route} from "react-router-dom";
import Home from './Home';
import Projects from './Projects';
import About from './About';
import NoMatch from './Nomatch';
import Basic from './Basic';
import BreadcrumbNav from './BreadcrumbNav';




function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg='black' w='100%' h = '64px' p={4} color='white' style={{position: 'sticky', top: '0'}}>
        <Flex justifyContent={'center'}>
          <Text bgGradient='linear(to-r, #0648F9, #2CD383)' bgClip='text' fontSize={['m','l', 'xl', '2xl','3xl']} fontWeight='extrabold'>
            Mason Adams
          </Text>
          <Spacer/>
          <Stack>
            <Spacer/>
            <BreadcrumbNav/>
          </Stack>
          {/*<ColorModeSwitcher justifySelf="right-end" />*/}
        </Flex>
      </Box>      
      <Box>
        <Center>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="About" element={<About/>}/>
            <Route path="Projects" element={<Projects/>}/>
            <Route path="*" element={<NoMatch />} />
          </Routes> 
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default App;
