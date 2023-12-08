import React from 'react'
import "./Product.css"
import { FaStar } from "react-icons/fa";

function Product() {
    return (
        <>
            <section className={"card-container"}>
                <section className={"card"}>
                    <img src={"https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"} alt={"shoe"}/>
                    <div className={"card-details"}>
                        <h3 className={"card-title"}>
                            Shoe
                        </h3>
                        <section className={"card-reviews"}>
                            <FaStar /><FaStar /><FaStar /><FaStar />
                            <span className={"total-review"}></span>
                        </section>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Product;