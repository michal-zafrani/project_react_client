import React, { useState ,useEffect } from 'react';
import { Card , Button } from 'react-bootstrap';
// import img from '../../assest/laptop1.jpg';
// import imgplus from '../../assest/plus2.png';
// import imgminus from '../../assest/minus2.png';
import ModalShow from './Modalshow';
import * as Icon from 'react-bootstrap-icons';
import { Redirect, withRouter ,Route } from 'react-router-dom';
import { getJwtFromCookie } from '../Cookies'

export default withRouter(function Cardproduct({ product , actionAddBuy , currentUser , buys ,history }) {
    const [modalShow, setModalShow] = useState(false);
    const [inSal , setInSal] = useState(false)

    const addSal = () => {
        console.log('addsal');
        if (currentUser._id) {
            actionAddBuy(product);
            setInSal(true)
        } else {
            history.push('/logIn')
        }
    }

    const ifSal = () => {       
        let findBuy = (buys.length > 0 && currentUser._id) ? buys.find(buy => buy.user._id == currentUser._id) : null;
        let findPro = findBuy ? findBuy.products.find(pro => pro.product._id == product._id): null;
        setInSal(findPro ? true: false);
        return findPro ? true: false
    }

    // useEffect(() => {
    //     ifSal() 
    // }, [buys, currentUser])
 
    return (
        <>
            <Card className="col-11 col-sm-5 col-xl-3 m-2 m-lg-3 text-body">
                <Card.Img variant="top" src={`/img/${product.img}`} className="" style={{height: '200px'}} onClick={() => setModalShow(true)} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text style={{height: '160px'}} className="font-weight-light overflow-hidden">{product.description}</Card.Text>
                    <Card.Title className="text-center">{product.price}₪</Card.Title>
                    <Button className="btn btn-light col-12"  onClick={()=>addSal()} disabled={inSal ? true : false}>
                        {inSal ? <><Icon.Check  size={40} color={`var(--green)`}/><span>selected</span></> :<Icon.Cart4 size={40} color={`var(--green)`}/> }
                    </Button>
                </Card.Body>
            </Card>
            <ModalShow
                product={product}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}) 
