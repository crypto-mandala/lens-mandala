import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'gray.800',
      },
    },
  },
  textStyles: {
    h2: {
      fontSize: ['20px'],
      fontWeight: 'semibold',
      color: 'gray.600',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
  },
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  )
}

export default App
