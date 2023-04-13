import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Link
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link as Reactlink } from "react-router-dom";

function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} bg='#575757' colorScheme='gray' onClick={onOpen}>
            <HamburgerIcon/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
            <nav>
                <ul>
                    <li>
                    <Link as={Reactlink} to="Home">
                            Home
                    </Link>
                    </li>
                    <li>
                    <Link as={Reactlink} to="About">
                            About Me
                    </Link>
                    </li>
                    <li>
                    <Link as={Reactlink} to="Projects">
                            Projects
                    </Link>
                    </li>
                </ul>
            </nav>

            <hr/>

            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default Navbar;
