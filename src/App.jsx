import ImageBanner from './assets/img/Rosane-removebg-preview.png'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Explorer from './Components/Explorer/Explorer'
export default function App(){

    return(
        <>
         <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Explorer />} />
                <Route path='/dashboard' exact element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}