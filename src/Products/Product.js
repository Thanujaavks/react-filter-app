import React from 'react'
import "./Product.css"
import { FaStar } from "react-icons/fa";
import { BsFillBagHeartFill } from "react-icons/bs";

function Product() {
    return (
        <>
            <section className={"card-container"}>
                <section className={"card"}>
                    <img src={"https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"} alt={"shoe"} className={"card-image"}/>
                    <div className={"card-details"}>
                        <h3 className={"card-title"}>
                            Shoe
                        </h3>
                        <section className={"card-reviews"}>
                            <FaStar className={"rating-star"}/>
                            <FaStar className={"rating-star"}/>
                            <FaStar className={"rating-star"}/>
                            <FaStar className={"rating-star"}/>
                            <span className={"total-review"}></span>
                        </section>
                        <section className={"card-price"}>
                            <div className={"price"}>
                                <del>$300</del>200
                            </div>
                            <div className={"bag"}>
                                <BsFillBagHeartFill />
                            </div>
                        </section>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Product;