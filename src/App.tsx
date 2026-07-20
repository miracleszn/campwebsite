
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import Landing from './pages/Landing'
import PaginatedProductList from './pages/PaginateTesting'
import SignUp from './pages/SignUp'
import SignUpVerify from './pages/SignUpVerify'
import 'leaflet/dist/leaflet.css';


function App() {

  

  return (
    <>
      {/* <SignUp/> */}
      {/* <SignUpVerify/> */}
      
      
        <Landing/>
        {/* <PaginatedProductList/> */}
    </>
  )
}

export default App
