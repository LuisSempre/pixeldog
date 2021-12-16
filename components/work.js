import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title =({ children}) => (
    <Box>
        <NextLink href={href}>
            <Link>Works</Link>    
        </NextLink>
        <span>
            {''}
            <ChevronRightIcon />{''}
        </span>
        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            {children}    
        </Heading>
    </Box>
)

export const WorkImage = ({ src, alt}) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4}/>
)

export const Meta = ({ children }) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)