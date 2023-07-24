import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { MainPage } from './pages/MainPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { GsapTest } from './pages/GsapTest';
function App() {
    
    return (
        <div className="app dark">
            <Header />
            <Routes>
                <Route path='/' element={<MainPage />}/>
                <Route path='/gsap' element={<GsapTest />}/>
            </Routes>
            <Footer />
        </div>
    )
}

export default App
