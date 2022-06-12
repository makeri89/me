import type { NextPage } from 'next'
import Head from 'next/head'
import { Flex } from '@chakra-ui/react'
import InfoPage from '@ui/organisms/InfoPage'
import NameBox from '@ui/molecules/NameBox'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>makeri89</title>
      </Head>
      <Flex align="center" direction="column" mt="100px" gap="40px">
        <NameBox name="makeri89" />
        <InfoPage />
      </Flex>
    </>
  )
}

export default Home
