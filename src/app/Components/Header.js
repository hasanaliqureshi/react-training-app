import {Component} from 'react';
import {render} from 'react-dom';
import {Sidebar} from './Sidebar.js';
import '../CSS/Header.css';
export class Header extends Component {
    render() {
        return (
          <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="row">
                <div  className="col-xs-2 text-left list-icon">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
                <div className="col-xs-8 text-center main-heading">
                  <p>FIFA WORLD CUP 2018 SCHEDULE</p>
                </div>
                <div className="col-xs-2 text-right setting-icon">
                  <i className="fa fa-cog" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </nav>
          <Sidebar />
          </div>
    );
    }
}
