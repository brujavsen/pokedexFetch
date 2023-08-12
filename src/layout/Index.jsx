import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const Index = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default Index