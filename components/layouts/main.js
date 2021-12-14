import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react' 
const Main = ({ children}) => {
    return(
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <title>Luis Silva - Homepage</title>
            </Head>
            <Navbar />
            <Container maxW="container.md" pt={14}>   
                {children}
            </Container>
        </Box>
    )
}

export default Main