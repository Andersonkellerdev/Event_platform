import { ApolloProvider } from "@apollo/client"
import { Event } from "./pages/Event"
import { Router } from "./router"
import {client} from "./lib/apollo"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (   
    <ApolloProvider client={client}> 
    <BrowserRouter>
      <Router/>
      </BrowserRouter> 
      </ApolloProvider> 
  )
}

export default App
