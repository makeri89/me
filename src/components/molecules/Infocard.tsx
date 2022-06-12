import { Flex, FlexProps, Text } from '@chakra-ui/react'
import Heading from '@ui/atoms/Heading'

interface Props extends FlexProps {
  title: string
  children: React.ReactNode
}

const InfoCard = ({ title, children, ...props }: Props) => {
  return (
    <Flex
      direction="column"
      bg="white"
      p="30px"
      h="350px"
      w="250px"
      gap="10px"
      borderRadius="15px"
      boxShadow="8px 8px 8px 0 #770406"
      {...props}
    >
      <Heading as="h2">{title}</Heading>
      {children}
    </Flex>
  )
}

export default InfoCard
