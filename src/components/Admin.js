import React , { useRef } from 'react'

export default function Admin() {
    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const priceRef = useRef(null);
    const groupRef = useRef(null);
    const fileRef = useRef(null);
    return (
        <form className="p-4 col-10 col-md-8 col-lg-5 about-class">
            <h5>add product</h5>
            <div className="form-group">
                <label htmlFor="name">name</label>
                <input type="text" id="name" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="description">description</label>
                <textarea id="description" className="form-control" rows="3" maxLength="100" />
            </div>
            <div className="form-group">
                <label htmlFor="price">price</label>
                <input type="number" id="price" className="form-control" />
            </div>
            <div class="form-group">
                <label htmlFor="sel1">group:</label>
                <select class="form-control" id="sel1">
                    <option>laptop</option>
                    <option>desktop</option>
                    <option>accessories</option>
                    <option>gadgets</option>
                </select>
            </div>
            <div class="form-group">
                <label htmlFor="file">image file:</label>
                <input type="file" class="form-control form-control-file border" name="file" id="file"/>
            </div>
        </form>
    )
}
