
import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import { RiContactsLine, RiDatabaseLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export function Sidebar() {
    return (
        <Box as='aside' w='64' mr='8'>
            <Stack spacing='12' align='flex-start'>
                <NavSection title='GERAL'>
                    <NavLink icon={RiDatabaseLine}>Dashboard</NavLink>
                    <NavLink icon={RiContactsLine}>Usuário</NavLink>
                </NavSection>

                <NavSection title='AUTOMAÇÂO'>
                    <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
                    <NavLink icon={RiGitMergeLine}>Automação</NavLink>
                </NavSection>

            </Stack>
        </Box>
    )
}