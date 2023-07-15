import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { MainPage } from './pages/MainPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
function App() {
    
    return (
        <div className="app light">
            <Header />
            <Routes>
                <Route path='/' element={<MainPage/>}/>
            </Routes>
            <Footer />
        </div>
    )
}

export default App
