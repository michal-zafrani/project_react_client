import React, { useState } from 'react';

export default function About(props) {
    const [currentPage, setCurrentPage] = useState(0)
    const numberPages = React.Children.count(props.children);

    const showPage = (currentPage) => {
        const child = React.Children.toArray(props.children)[currentPage];
        return React.cloneElement(child)
    }
    return (
        <div className="about-class px-1 py-5 col-lg-6 col-sm-10 m-0 row justify-content-around">
            <h2 className="text-center">About</h2>
            <div className="col-1 m-0 p-0 d-flex align-items-center">
                <button className="about-arrow p-0"
                    disabled={currentPage === 0}
                    onClick={() => setCurrentPage(v => v - 1)}
                > &lt; </button></div>
            <div className="col-7 col-sm-9 m-0 p-0">
                {showPage(currentPage)}
            </div>
            <div className="col-1 m-0 p-0 d-flex align-items-center">
                <button className="about-arrow p-0"
                    disabled={currentPage === numberPages - 1}
                    onClick={() => setCurrentPage(v => v + 1)}
                > &gt; </button></div>
        </div>
    )
}
