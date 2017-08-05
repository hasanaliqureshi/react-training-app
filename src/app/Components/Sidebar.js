import {Component} from 'react';
import {render} from 'react-dom';
import '../CSS/Sidebar.css';
export class Sidebar extends Component {
    render() {
        return (
          <div>
          <div className="sidebar-overlay"></div>
          <aside id="sidebar" className="sidebar sidebar-default open" role="navigation">
              <div className="sidebar-header header-cover sdcover">
                  <div className="top-bar"></div>
                  <button type="button" className="sidebar-toggle">
                      <i className="icon-material-sidebar-arrow"></i>
                  </button>
                  <div className="sidebar-image">
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53474/atom_profile_01.jpg" />
                  </div>
                  <a data-toggle="dropdown" className="sidebar-brand" href="#settings-dropdown">
                      john.doe@gmail.com
                      <b className="caret"></b>
                  </a>
              </div>
              <ul className="nav sidebar-nav">
                  <li className="dropdown">
                      <ul id="settings-dropdown" className="dropdown-menu">
                          <li>
                              <a href="#"  >
                                  Profile
                              </a>
                          </li>
                          <li>
                              <a href="#"  >
                                  Settings
                              </a>
                          </li>
                          <li>
                              <a href="#"  >
                                  Help
                              </a>
                          </li>
                          <li>
                              <a href="#"  >
                                  Exit
                              </a>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <a href="#">
                          <i className="sidebar-icon md-inbox"></i>
                          Inbox
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <i className="sidebar-icon md-star"></i>
                          Starred
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <i className="sidebar-icon md-send"></i>
                          Sent Mail
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <i className="sidebar-icon md-drafts"></i>
                          Drafts
                      </a>
                  </li>
                  <li className="divider"></li>
                  <li className="dropdown">
                      <a className="ripple-effect dropdown-toggle" href="#" data-toggle="dropdown">
                          All Mail
                          <b className="caret"></b>
                      </a>
                      <ul className="dropdown-menu">
                          <li>
                              <a href="#"  >
                                  Social
                                  <span className="sidebar-badge">12</span>
                              </a>
                          </li>
                          <li>
                              <a href="#"  >
                                  Promo
                                  <span className="sidebar-badge">0</span>
                              </a>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <a href="#">
                          Trash
                          <span className="sidebar-badge">3</span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          Spam
                          <span className="sidebar-badge">456</span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          Follow Up
                          <span className="sidebar-badge badge-circle">i</span>
                      </a>
                  </li>
              </ul>
          </aside>
          </div>
    );
    }
}
