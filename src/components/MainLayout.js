import { Footer } from "./footer";
import { Navbar } from "./navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}