import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Header, Registration } from './components'
import { links } from './components/Header/mock/links'
import { cities } from './components/Registration/mock/cities'
import './presets/global.css'

function App() {
  return (
    <>
      <Header links={links} />
      <Registration cities={cities} />
    </>
  )
}

export default App
