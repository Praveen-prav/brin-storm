import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
import HomePage from './components/homePage';
import IncompletePage from './components/incompleteQuiz';
import CompletePage from './components/completeQuiz';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage/>}/>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/incompletePage' element={<IncompletePage/>}/>
          <Route path='/completePage' element={<CompletePage/>}/>
          <Route path='/quizPage' element={<Quiz/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
