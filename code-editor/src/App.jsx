import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home'
import EditorPage from "./pages/EditorPage";


function App() {

  return (
    <>
<div>
  <Toaster 
  position='top-center' toastOptions={{}}></Toaster>
</div>
     
    {/* routing */}
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/editor/:roomId" element={<EditorPage/>} /> 
          {/* dynamic routing */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
