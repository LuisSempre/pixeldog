import { Box } from '@chakra-ui/react'

const Footer = () => {
    return(
        <Box as="footer" bg="glassTeal" color="white" fontSize="sm" p={4}>
            &copy; {new Date().getFullYear()} Luis Silva. All Rights Reserved.
        </Box>
    )
}

export default Footer