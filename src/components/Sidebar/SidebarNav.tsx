import { Stack } from '@chakra-ui/react'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'
import { RiContactsLine, RiDatabaseLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'

export function SidebarNav() {
    return (
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
    )
}