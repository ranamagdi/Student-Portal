import { Routes,Route,HashRouter} from 'react-router-dom';
import Student_Portal from './Pages/Student_Portal/Student_Portal';
function App() {
  return (
    <div >
     <HashRouter>
      <Routes>
      <Route path="/" element={<Student_Portal/>}/>
      </Routes>
    </HashRouter>


    </div>
  );
}

export default App;
