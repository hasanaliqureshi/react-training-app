import {Component} from 'react';
import {render} from 'react-dom';
import {Header} from './Components/Header.js';
class App extends Component {
  render(){
    return(
      <div className="app">
        <Header/>
      </div>
    )
  }
}
render(
<App />,
    document.getElementById('app'));
