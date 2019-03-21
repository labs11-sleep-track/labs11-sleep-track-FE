import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink, Route, withRouter} from 'react-router-dom';

import './Nav.css';

import LoginForm from '../Login/LoginForm';
// import Reg from './about/Reg';
// import Blogs from './blogs/Blogs';
// import About from './about/About';


class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <header>
          <nav>
            <div className="navBar">

            <NavLink exact to='/'><h1>SLEEPSTA</h1></NavLink>

            <div className="navBar1">
            <NavLink to="/why">Why Sleep?</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>


            <div className="icons">
              <Link exact to='/'><i class="fas fa-bed"></i></Link>
              <Link to="/login"><i className="far fa-user"></i></Link>
              <i onClick={this.logout} class="fas fa-sign-out-alt"></i>
            </div>
            </div>
            </div>
          </nav>
        </header>

        <main>
          <Route path="/login" component={LoginForm} />
          {/* <Route path="/register" component={Reg} /> */}
          {/* <Route path="/blogs" component={Blogs} />
          <Route path="/about" component={About} />  */}
        </main>
          
      </div>
    );
  }

  logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  };
}

export default withRouter(Nav);