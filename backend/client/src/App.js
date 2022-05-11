import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './containers/Header';
import ImageListings from './containers/ImageListings'
import ShowImage from './containers/ShowImage';
function App() {
  return (
    <div className="min-h-full">
      <Router>
      <Header />
       
        <Switch>
          
              <Route path='/' exact component={ImageListings} />
              <Route path='/view/:id' exact component={ShowImage} />
              <Route></Route>
            
        </Switch>
      </Router>
    </div>
  );
}
export default App;
