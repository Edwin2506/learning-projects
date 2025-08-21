import { useState } from 'react'
import Header from './components/header/header.jsx'
import Footer from './components/Footer/footer.jsx'
import ToDoContainer from './components/toDoContainer/toDoContainer.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main>
        <ToDoContainer/>
      </main>
      <Footer/>
    </>
  )
}

export default App
