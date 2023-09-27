/* eslint-disable react/prop-types */

 const SingleDontaionCart = ({singleCart}) => {
    const {Img, description,category,price,card_bg_color,cart_text_color} = singleCart;

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
           <div style={cardStyle} className="flex">
           <img className="w-[200px]" src={Img} alt="" />
           <div style={cardTextColorStyle} className=" mt-8 p-5">
            <div>
                <button style={cardAndText} className="border p-2">{category}</button>
            </div>
            <p className="text-black font-bold">{description}</p>
            <p>{[price]}</p>
            <button style={cardStyle} className="btn "> Views Details</button>
           </div>
            
        </div>
    );
 };
 
 export default SingleDontaionCart;