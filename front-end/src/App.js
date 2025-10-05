import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Messages from './Messages';
import MessageStandalone from './MessageStandalone';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import AboutUs from './AboutUs';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="App-main">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Messages */}
            <Route path="/messages" element={<Messages />} />
            <Route path="/messages/:messageId" element={<MessageStandalone />} />

            {/* About Us — allows both paths */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
