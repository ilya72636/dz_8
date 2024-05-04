import { ModalProvider} from './context/ModalContext'
import MainPage from './pages/mainPage/MainPage';
import About from './pages/about/About';
import './App.css';
import UserForm from './component/userForm/UserForm';

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <div>
          <MainPage />
          <About />
        </div>
    </ModalProvider>
    <p>=========================</p>
    <UserForm/>
    </div>
  );
}

export default App;
