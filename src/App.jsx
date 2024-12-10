import { Main } from './Components/Main/Main'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Nav } from './Components/Nav/Nav'
import { BrowserRouter, Routers, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Main>
        <Routers>
          <Route index exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </Routers>
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
