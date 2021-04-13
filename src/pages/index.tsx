import Head from 'next/head'
import { Input } from '../components/Form/Input'
import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import React from 'react'

type SingInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm()

  const handleSingIn: SubmitHandler<SingInFormData> =async (values) => {
    await new Promise(resolve => setTimeout(resolve,2000))
    console.log(values)
    

  }

  return (
    <Flex
      w='100vw'
      h='100vh'
      alignItems='center'
      justifyContent='center'>

      <Flex
        as='form'
        width='100%'
        maxWidth={360}
        bg="gray.800"
        p='8'
        borderRadius={8}
        flexDir='column'
        onSubmit={handleSubmit(handleSingIn)}
      >

        <Stack spacing='4'>
          <Input name='email' type='email' label='E-mail' {...register('email')} />
          <Input name='password' type='password' label='Senha' {...register('password')} />
        </Stack>

        <Button type='submit' mt='6' colorScheme='pink' size='lg' isLoading={formState.isSubmitting}>
          Entrar
          </Button>

      </Flex>
    </Flex>
  )
}
