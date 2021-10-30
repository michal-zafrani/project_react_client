import React from 'react'
import { Link , withRouter } from 'react-router-dom';
import { Navbar, Container, NavDropdown, Nav ,Badge } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import logo from '../assest/mac.png'
import { connect } from 'react-redux';
import { actions } from '../redux/actions/Actions';
import { clearAllCookies } from './Cookies'

export const Nav0 = (props) => {
    const countSal= () => {
        let findBuy = (props.buys.length > 0 && props.currentUser._id) ? props.buys.find(buy => buy.user._id == props.currentUser._id) : null;
        let findPro = findBuy ? findBuy.products.length : null;
        return findPro;
    }
    return (
        <>
            <Navbar bg="light" expand="lg" fixed="top" className="justify-content-center">
                <Container>
                    <Navbar.Brand className="navbar-brand nav-item col-8 col-md-1">
                        <Link to="/"><img src={logo} alt="logo" className="col-2 col-md-8" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="w-100">
                            <Nav.Link as={Link} to="/"><span className="nav-link"> Home</span></Nav.Link>
                            <NavDropdown title="Products" id="basic-nav-dropdown" className="nav-link">
                                <NavDropdown.Item as={Link} to="/products/laptops" className="nav-link">Laptop</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/products/desktops" className="nav-link">desktop computer</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/products/accessories" className="nav-link">Accessories and gadgets</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/products/others" className="nav-link">others</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/about"><span className="nav-link">About</span></Nav.Link>
                            <div className="nav-link flex-grow-1"/>
                            <Nav.Link as={Link} to="/shoppingCart"><span className="nav-link"><Badge className="bg-info rounded-circle">{countSal() ? countSal() : '0' }</Badge><Icon.Cart4 size={35} /></span></Nav.Link>
                            <NavDropdown title={<span>{props.currentUser.name ? props.currentUser.name : 'Sign In'} <Icon.PersonCircle size={35} /></span>} id="basic-nav-dropdown" className="nav-link">
                                {props.currentUser.name ?<>
                                    <NavDropdown.Item onClick={() => { props.history.push('/showBuys')}}>My Buys</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => {props.actionSetCurrentUserNull() ; props.history.push('/')}}>Log Out</NavDropdown.Item></>
                                    : <NavDropdown.Item as={Link} to="/logIn" className="nav-link">Sign Up</NavDropdown.Item>}
                                </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser,
        buys: state.buy
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionSetCurrentUserNull: () =>{ 
            clearAllCookies()
            dispatch(actions.setCurrentUser({ name: '', _id: null }))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav0))
