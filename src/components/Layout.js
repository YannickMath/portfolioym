import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import '@/components/Container'




export default function Layout({ children }) {
  return (
    <div>
<Navbar/>
<main>
{children}
  </main>
    </div>
   )
}
