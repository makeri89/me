import { Flex, Text, Link, Box } from '@chakra-ui/react'
import InfoCard from '@ui/molecules/Infocard'

const InfoPage = () => {
  return (
    <Flex gap="40px" wrap="wrap">
      <InfoCard title="Work">
        <Box>
          <Text>Software developer at</Text>
          <Link href="https://kuormat.com">Kuormat.com</Link>
        </Box>
      </InfoCard>
      <InfoCard title="Play">
        <Text>Darts.</Text>
      </InfoCard>
      <InfoCard title="Study">
        <Text>Computer Science at University of Helsinki.</Text>
      </InfoCard>
    </Flex>
  )
}

export default InfoPage
