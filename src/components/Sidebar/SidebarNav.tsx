import { Stack } from '@chakra-ui/react'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'
import { RiContactsLine, RiDatabaseLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'

export function SidebarNav() {
    return (
        <Stack spacing='12' align='flex-start'>
            <NavSection title='GERAL'>
                <NavLink icon={RiDatabaseLine} href='/dashboard'>Dashboard</NavLink>
                <NavLink icon={RiContactsLine} href='/users'>Usuário</NavLink>
            </NavSection>

            <NavSection title='AUTOMAÇÂO'>
                <NavLink icon={RiInputMethodLine} href='/forms'>Formulários</NavLink>
                <NavLink icon={RiGitMergeLine} href='/automation'>Automação</NavLink>
            </NavSection>
        </Stack>
    )
}