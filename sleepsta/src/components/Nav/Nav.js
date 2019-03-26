import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import { Link } from 'react-router-dom';
import { Route, withRouter} from 'react-router-dom';

import LoginForm from '../Login/LoginForm';
import Register from '../Register/RegisterForm';
import UserForm from '../Profile/UpdateUserForm';
import Profile from '../Profile/Profile';
// import Blogs from './blogs/Blogs';
// import About from './about/About';

import './Nav.css';


class LoggedOutNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="NavBar">
        <Navbar color="#4C546F" light expand="md">

        <NavLink href='/'>
        <div className="title">
        SLEEP<i>STA</i>
        </div>
        </NavLink>
       

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItem>
                <NavLink href="/whysleep">
                <p>Why Sleep?</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/blogs">
                <p>Blogs</p>
                </NavLink>
              </NavItem>


              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <p>Menu</p>
                </DropdownToggle>

                <DropdownMenu right>

                <DropdownItem>
                  <Link to="/profile">
                  <i class="fas fa-chart-bar"></i>&nbsp; 
                    Profile
                    </Link>
                  </DropdownItem>

                  <DropdownItem>
                  <Link to="/update">
                  <i class="fas fa-user-edit"></i>&nbsp; 
                    Update Account
                    </Link>
                  </DropdownItem>

                  <DropdownItem>
                  <i class="fas fa-bed"></i>&nbsp;
                    Blogs
                  </DropdownItem>

                  <DropdownItem>
                  <i class="fas fa-code"></i>&nbsp;
                    SLEEPSTA Team
                  </DropdownItem>

                  <DropdownItem divider />

                  <DropdownItem>
                  <i onClick={this.logout} class="fas fa-sign-out-alt">&nbsp;Logout</i>
                  </DropdownItem>
                  
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

        <main>
          <Route path="/login" component={LoginForm} />
          {/* <Route path="/register" component={Register} />  */}
          <Route path="/update" component={UserForm} /> 
          {/* <Route path="/profile" component={Profile} />  */}
          {/* <Route path="/blogs" component={Blogs} />
          <Route path="/about" component={About} />   */}
        </main>
      </div>
    );
  }

logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  };
}

export default withRouter(LoggedOutNav);



// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { NavLink, Route, withRouter} from 'react-router-dom';

// import './Nav.css';

// import LoginForm from '../Login/LoginForm';
// // import Reg from './about/Reg';
// // import Blogs from './blogs/Blogs';
// // import About from './about/About';


// class Nav extends Component {
//   render() {
//     return (
//       <div className="Nav">
//         <header>
//           <nav>
//             <div className="navBar">

//             <NavLink exact to='/'><h1>SLEEPSTA</h1></NavLink>

//             <div className="navBar1">
//             <NavLink to="/why">Why Sleep?</NavLink>
//             <NavLink to="/blogs">Blogs</NavLink>


//             <div className="icons">
//               <Link exact to='/'><i class="fas fa-bed"></i></Link>
//               <Link to="/login"><i className="far fa-user"></i></Link>
//               <i onClick={this.logout} class="fas fa-sign-out-alt"></i>
//             </div>
//             </div>
//             </div>
//           </nav>
//         </header>

//         <main>
//           <Route path="/login" component={LoginForm} />
//           {/* <Route path="/register" component={Reg} /> */}
//           {/* <Route path="/blogs" component={Blogs} />
//           <Route path="/about" component={About} />  */}
//         </main>
          
//       </div>
//     );
//   }

//   logout = () => {
//     localStorage.removeItem('jwt');
//     this.props.history.push('/login');
//   };
// }

// export default withRouter(Nav);