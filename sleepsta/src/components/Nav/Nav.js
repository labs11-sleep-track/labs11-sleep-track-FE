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

                <div className="dropdown">

                <DropdownItem>
                  <Link to="/profile">
                  <i class="fas fa-chart-bar"></i>&nbsp; 
                    Profile
                    </Link>
                  </DropdownItem>

                  <DropdownItem>
                  <i class="fas fa-bed"></i>&nbsp;
                    Blogs
                  </DropdownItem>

                  <DropdownItem>
                  <Link to="/update">
                  <i class="fas fa-user-edit"></i>&nbsp; 
                    Update Account
                    </Link>
                  </DropdownItem>

                  <DropdownItem divider />

                  <DropdownItem>
                  <i class="fas fa-code"></i>&nbsp;
                    SLEEPSTA Team
                  </DropdownItem>

                  <DropdownItem>
                  <i onClick={this.logout} class="fas fa-sign-out-alt">&nbsp;Logout</i>
                  </DropdownItem>

                  </div>
                  
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

        <main>
          <Route path="/login" component={LoginForm} />
          {/* <Route path="/register" component={Register} />  */}
          <Route path="/update" component={UserForm} /> 
          {/* <Route path="/profile" component={Profile} /> */}
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