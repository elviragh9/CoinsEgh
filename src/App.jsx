import Layout from './Components/Layout.jsx'
import { BrowserRouter } from 'react-router';
import {AutorProvider} from './context/AutorProvider.jsx'
function App() {
 

  return (
    <>
      <AutorProvider>
        <BrowserRouter>
          <Layout></Layout>
        </BrowserRouter>
      </AutorProvider>

  
    </>
  )
}

export default App