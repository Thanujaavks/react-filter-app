import React from 'react';
import './sidebar.css';
import { GiShoppingCart } from "react-icons/gi";
import Category from "./Category/Category";
import Price from "./Price/price";
import colors from "./Colors/Colors";
import Colors from "./Colors/Colors";
function Sidebar(props) {
    return (
        <div>
            <section className={"sidebar"}>
                <div className={"logo-container"}>
                    <h1><GiShoppingCart />
                    </h1>
                </div>
                <Category/>
                <Price/>
                <Colors/>
            </section>
        </div>
    );
}

export default Sidebar;