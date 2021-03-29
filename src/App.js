import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/common/navbar/navbar';
import Characters from './Components/common/characters/characters';
import Planets from './Components/common/planets/planets';
import { DataProvider } from './DataContext/DataProvider';

function App() {
  return (
    <DataProvider>
        <div>
            <Navigation />
            <Characters />
            <Planets />
        </div>
    </DataProvider>
  );
}

export default App;
