import React, { useState,createContext } from "react"
import FormPage from "./components/LoginFormPage"
import SignUpFormPage from "./components/SignUpFormPage"
import "./index.css"

interface MycontextType {
  show:boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;

}
export const Mycontext = React.createContext<MycontextType | null>(null)

function App() {
 const [show, setShow] = useState<boolean>(true)

  return (
    <>
    <Mycontext.Provider 
    value={{
      show,
      setShow,

    }}>
   {show ? <FormPage /> : <SignUpFormPage />}

    </Mycontext.Provider>
    </>
  )
}

export default App
