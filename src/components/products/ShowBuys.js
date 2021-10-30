import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { getBuysList } from '../service';
import { Table } from 'react-bootstrap';

function ShowBuys() {

    const [arrBuys, setArrBuys] = useState();

    useEffect(() => {
        getBuysList().then((res) => {
            setArrBuys(res.data);
            console.log(res.data);
        })
    }, [])

    return (
        <>
            {arrBuys && <div className="col-11 col-md-5 mx-auto border rounded bg-white p-5">
                <h3 className="col-12 text-center text-body">All Your Buys</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>product number</th>
                            <th>₪</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arrBuys.buys.map((buy, index) => (
                            <tr key={`SHOW${buy._id}`}>
                                <td>{new Date(buy.date).toLocaleDateString()}</td>
                                <td>{buy.sumproducts}</td>
                                <td>{buy.pricetotal}₪</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>}
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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowBuys)
