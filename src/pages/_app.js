import {  ThemeProvider  }  from'next-themes'
import Layout from '@/components/Layout'
// import "tailwindcss/tailwind.css";

export default function MyApp({ Component, pageProps }) {
    return (
      <ThemeProvider>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    )
  }

