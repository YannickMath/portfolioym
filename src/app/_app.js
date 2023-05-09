import {  ThemeProvider  }  from'next-themes'
import Layout from '@/app/layout'

export default function MyApp({ Component, pageProps }) {
    return (
      <ThemeProvider>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    )
  }

