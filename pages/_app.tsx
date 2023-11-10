import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Toaster } from 'react-hot-toast'
const inter = Inter({ subsets: ['latin'] })
export default function App({ Component, pageProps }: AppProps) {
  return <div className={inter.className}>
    <GoogleOAuthProvider clientId='169017818851-jvonm754ehonudp58l9gda40jj0inl2l.apps.googleusercontent.com'>
      <Component {...pageProps} />
      <Toaster />
    </GoogleOAuthProvider>

  </div>
}
