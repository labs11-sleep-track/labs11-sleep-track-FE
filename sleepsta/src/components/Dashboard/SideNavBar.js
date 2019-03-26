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
// import Blogs from './blogs/Blogs';
// import About from './about/About';

import './SideNavBar.css';




class SideNav extends React.Component {
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

        <NavLink exact to='/'>
        <div className="title">
        {/* <i class="fas fa-bed"></i> &nbsp; */}
        SLEEP<i>STA</i>
        </div>
        </NavLink>
        

        {/* <NavLink exact to='/'><h1>SLEEPSTA</h1></NavLink>

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
        {/* </main> */}
       

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItem>
                <NavLink to="/whysleep">
                <p>Why Sleep?</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/blogs">
                <p>Blogs</p>
                </NavLink>
              </NavItem>

              {/* <i class="fas fa-chart-bar"></i> */}

              

             


              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <p>Options</p>
                </DropdownToggle>

                <DropdownMenu right>

                <DropdownItem>
                  <Link to="/login">
                  <i class="fas fa-user"></i>&nbsp; 
                    Login
                    </Link>
                  </DropdownItem>

                  <DropdownItem>
                  <Link to="/register">
                  <i class="fas fa-user-plus"></i>&nbsp; 
                    Register
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
          <Route path="/register" component={Register} /> 
          <Route path="/update" component={UserForm} /> 
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

export default SideNav;