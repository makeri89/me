import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../lib/theme/theme'

import '@fontsource/comfortaa/400.css'
import '@fontsource/raleway/400.css'
import '@fontsource/space-mono/400.css'
import '@fontsource/space-mono/700.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
