import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
    showProfileData: boolean;
}
export function Profile({ showProfileData }: ProfileProps) {
    return (

        <Flex align='center'>
            {showProfileData && (
                <Box mr='4' textAlign='right'>
                    <Text>Bruno Moraes</Text>
                    <Text color='gray.300' fontSize='small'>bruno_bmoraes@hotmail.com</Text>
                </Box>
            )}

            <Avatar size='md' name='Bruno Moraes' src='https://github.com/moraes3000.png' />
        </Flex>
    )
}