import App from "next/app"
import type { AppProps , AppContext } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import withGraphQl from '../../libs/graphqlClient'

interface MyAppProps extends AppProps {
  apollo: any
}

const MyApp = (props: MyAppProps) => {
  const { Component, pageProps, apollo } = props

  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)

  return { ...appProps }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default withGraphQl({ ssr: true })(MyApp)
