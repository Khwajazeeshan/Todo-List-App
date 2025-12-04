import Navbar from "./components/Navbar"
import Create from "./components/Create"
import Data from "./components/Data"
import "./App.css"

function App() {


  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Create />
        <Data />
      </main>
    </div>
  )
}

export default App
