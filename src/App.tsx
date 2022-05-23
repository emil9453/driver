import 'App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from 'components'
import { links } from 'components/Header/mock/links'
import { Registration } from 'modules'
import 'presets/global.css'

function App() {
  return (
    <>
      <Header links={links} />
      <Registration />
    </>
  )
}

export default App
