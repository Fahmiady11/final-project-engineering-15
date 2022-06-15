import './App.css';
import './output.css';
//eslint-disable-next-line
import { Routes, Route, Switch } from 'react-router-dom';
import NotFound from './Component/pages/NotFound';
import ForumPage from './Component/pages/ForumPage';
import LoginPage from './Component/pages/LoginPage';
import RegisterPage from './Component/pages/RegisterPage';
import FaqPage from './Component/pages/FaqPage';
import AboutPage from './Component/pages/AboutPage';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ForumPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
