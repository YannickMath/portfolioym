import Navbar from '@/components/Navbar'
import '@/styles/globals.css'




export default function Layout({ children }) {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      

<Navbar/>
<main>
{children}
  </main>


    </div>
   )
}
