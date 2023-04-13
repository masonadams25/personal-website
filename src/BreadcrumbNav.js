import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons'
import { NavLink as Reactlink } from "react-router-dom";


function BreadcrumbNav() {
    return (
        <Breadcrumb spacing={['2px','4px','6px','8px']} separator={<ChevronRightIcon color='white' />}>
            <BreadcrumbItem>
                <BreadcrumbLink style={({ isActive }) => ({ color: isActive ? '#2CD383' : 'white' })} fontSize={['xs','s', 'l','1xl','2xl']} fontWeight='extrabold' as={Reactlink} to="/">Home</BreadcrumbLink>
             </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink style={({ isActive }) => ({ color: isActive ? '#2CD383' : 'white' })} fontSize={['xs','s', 'l','1xl','2xl']} fontWeight='extrabold' as={Reactlink} to="About">About</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink style={({ isActive }) => ({ color: isActive ? '#2CD383' : 'white' })} fontSize={['xs','s', 'l','1xl','2xl']} fontWeight='extrabold' as={Reactlink} to="Projects">Projects</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export default BreadcrumbNav;
