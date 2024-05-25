import { useState } from "react"
import FormPage from "./components/LoginFormPage"
import "./index.css"
import SignUpFormPage from "./components/SignUpFormPage"

function App() {
 const [show, setShow] = useState(false)
  return (
    <>
   {show ? <FormPage /> : <SignUpFormPage />}
    </>
  )
}

export default App
