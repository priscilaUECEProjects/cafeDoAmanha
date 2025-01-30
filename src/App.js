

 develop
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import About from './components/About';
import Stories from './components/Stories';



function App() {
    return (
        <Router>
           
            <Routes>
                
                <Route path="/sobre-nos" element={<About />} /> 
                <Route path="/histórias" element={<Stories />} /> 

            </Routes>
           
        </Router>
    );
}

export default App;
