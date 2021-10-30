import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getJwtFromCookie } from './Cookies';
import { connect } from 'react-redux';
import { actions } from '../redux/actions/Actions'
import Cardproduct from './products/Cardproduct';
import { Toast, ToastHeader } from 'react-bootstrap';
import ModalAlert from './ModalAlert';


function Home({ actionlogInWithJwt, products, user }) {

    const [modalShow, setModalShow] = useState(false);

    // useEffect(() => {
    //     actionlogInWithJwt();
    // }, [])

    return (
        <>
            <div className="divhomebox m-0 p-0 d-flex justify-content-center align-items-center">
                <div className="row col-10 mx-auto justify-content-center">
                    <Link to="/products/laptops" className="col-sm-5 col-10 col-lg-3 justify-content-center text-decoration-none text-white text-center">
                        <div className="home_part img_part_1 mx-auto"></div>
                        <p className="p-2">Laptop</p>
                    </Link>
                    <Link to="/products/desktops" className="col-sm-5 col-10 col-lg-3 justify-content-center text-decoration-none text-white text-center">
                        <div className="home_part img_part_2 mx-auto"></div>
                        <p className="p-2">desktop computer</p>
                    </Link>
                    <Link to="/products/accessories" className="col-sm-5 col-10 col-lg-3 justify-content-center text-decoration-none text-white text-center">
                        <div className="home_part img_part_3 mx-auto"></div>
                        <p className="p-2">Accessories and gadgets</p>
                    </Link>
                    <Link to="/products/others" className="col-sm-5 col-10 col-lg-3 justify-content-center text-decoration-none text-white text-center">
                        <div className="home_part img_part_4 mx-auto"></div>
                        <p className="p-2">Others</p>
                    </Link>
                </div>
            </div>
{/* 
            <button onClick={() => setModalShow(true)}>modal alert</button>
            <ModalAlert
                user={user.name}
                resAction='create'
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> */}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user.currentUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionlogInWithJwt: () => dispatch(actions.checkIfJwt())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

