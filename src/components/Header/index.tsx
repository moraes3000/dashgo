import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { RiMenuLine } from 'react-icons/ri'
import { useSideBarDrawer } from '../../context/SideBarDrawerContext'
import { Logo } from './Logo'

import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { Search } from './Search'

export function Header() {
    const { onOpen } = useSideBarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })


    return (
        <Flex
            as='header'
            w='100%'
            maxWidth={1480}
            h='20'
            mx='auto'
            mt='4'
            px='6'
            align='center'>

                {!isWideVersion && (
                    <IconButton
                    aria-label='Open navigation'
                    icon={<Icon as={RiMenuLine}/>}
                    fontSize='24'
                    variant='unstyled'
                    onClick={onOpen}
                    mr='2' 
                    />            
                )}
            <Logo />
            {isWideVersion && <Search />}


            <Flex align='center' ml='auto'>
                <NotificationsNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    )
}