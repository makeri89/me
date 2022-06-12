import { Heading, HeadingProps } from '@chakra-ui/react'

interface Props extends HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const CustomHeading = ({ as = 'h1', ...props }: Props) => {
  return <Heading as={as} {...props} />
}

export default CustomHeading
