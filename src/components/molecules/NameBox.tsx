import { Flex } from '@chakra-ui/react'
import Heading from '@ui/atoms/Heading'

interface Props {
  name: string
}

const NameBox = ({ name }: Props) => {
  return (
    <a href="https://github.com/makeri89">
      <Flex
        py="15px"
        px="25px"
        border="2px solid #770406"
        borderRadius="10px"
        boxShadow="inset 0px 0px 4px 2px #770406"
        _hover={{
          cursor: 'pointer',
        }}
        onClick={() => console.log('hello')}
      >
        <Heading
          fontFamily="Space Mono"
          fontWeight="700"
          _hover={{ textDecoration: 'none' }}
        >
          {name}
        </Heading>
      </Flex>
    </a>
  )
}

export default NameBox
