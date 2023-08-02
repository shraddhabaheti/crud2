import Navbar from '../component/Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
       
    </>
  )
}