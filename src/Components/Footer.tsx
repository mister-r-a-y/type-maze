import { 
  Box, 
  Container, 
  Stack, 
  Text
} 
  from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box>
      <Container
        as={Stack}
        maxW={'6x1'}
        py={4}
        direction={{ base: 'column', md: 'row'}}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Box as="a" _hover={{color: 'green'}} href={'https://github.com/mister-r-a-y/maze-maker'}>
            Repo
          </Box>
          <Box as="a" _hover={{color: 'green'}} href={'mailto: mblack0619@gmail.com'}>
            Contact
          </Box>
        </Stack>
        <Text>made by Michael Blackmon</Text>
      </Container>
    </Box>
  )
}
