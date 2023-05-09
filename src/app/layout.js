import Navbar from '@/components/Navbar'
import '@/styles/globals.css'




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
