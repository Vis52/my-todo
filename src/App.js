import './App.css';
import react from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Todo from './components/Todo';
function App() {
  return (
    <div className="App">
      <Header/>
      <Todo/>
      <Footer/>
     
    </div>
  );
}

export default App;
