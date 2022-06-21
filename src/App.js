
import Introduction from './Components/Introduction.js';
import { Router, Route } from 'react-router-dom';


function App() {
  
  return (
     <Router>
      <div className="intro">
        <Route path="/">
          <Introduction />
        </Route>
      </div>
     </Router>
  );
}

export default App;
