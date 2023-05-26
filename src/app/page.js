import About from '@/components/About'
import Contact from '@/components/Contact'
import Image from 'next/image'

export default function Home() {
  return (
    <main >
      <section className='landing-page'>
        <About />
        <Contact />
      </section>
    </main>
  )
}
