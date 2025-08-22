import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import WeatherPage from './pages/WeatherPage/WeatherPage'

function App() {
  return (
    <>
      <Header title={"Weather App"}/>
      <main>
        <WeatherPage/>
      </main>
      <Footer/>
    </>
  )
}

export default App
