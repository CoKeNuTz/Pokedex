import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div style={{
    backgroundColor: 'gray',
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}>
    <Component {...pageProps} />
  </div>
}
