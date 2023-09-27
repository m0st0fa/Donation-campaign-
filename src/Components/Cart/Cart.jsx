/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Cart = ({ cart }) => {
    const { Img, category, description, card_bg_color, cart_text_color, id } = cart;

    const cardStyle = {
        backgroundColor: card_bg_color,
    };
    const cardTextColorStyle = {
        color: cart_text_color,
    }

    const cardAndText = {
        backgroundColor: card_bg_color,
        color: cart_text_color
    }

    return (
        <Link to={`/Donation/${id}`}>
            <div className="card" style={cardStyle}>
                <figure><img className="w-full h-[400px]" src={Img} alt="Item" /></figure>
                <div className="card-body">
                <div>
                    <button style={cardAndText} className="btn">{category}</button>
                </div>
                    <p style={cardTextColorStyle} >{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default Cart;
