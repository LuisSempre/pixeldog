import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () =>{
    return(
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6}  align="center">
                Hello, I&apos;m a frontend developer based in Brasil.
            </Box>
            <Box display="{{md: 'flex'}}">
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Luis Silva
                    </Heading>
                    <p>Digital Blacksmith ( Developer / Gamer / Trinker ) </p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page;
