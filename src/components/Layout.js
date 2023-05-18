import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function Layout({ children }) {
  return (
    <div className="mx-auto  sm:px-6 lg:px-8 pt-6">
      <div >
        <Navbar />
      </div>

      <main>{children}</main>
    </div>
  );
}
