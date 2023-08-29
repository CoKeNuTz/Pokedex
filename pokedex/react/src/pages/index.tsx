import { VT323 } from 'next/font/google'
import { Pokedex } from './Pokedex'


const inter = VT323({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-10 ${inter.className}`}
    >
    <Pokedex />
    </main>
  )
}
