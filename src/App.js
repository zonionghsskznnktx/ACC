import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Password from './pages/Password';
import Code from './pages/Code';
import Return from './pages/ReturnFb';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/password" element={<Password />} />
                <Route path="/code" element={<Code />} />
                <Route path="/return" element={<Return />} />
            </Routes>
        </Router>
    );
}

export default App;
