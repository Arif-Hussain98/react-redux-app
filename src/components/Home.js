import React from 'react'
function Home(){
    return(
        <div>
            <div className="add-to-cart">
                <img src="https://www.iconpacks.net/icons/2/free-add-to-cart-icon-3046-thumb.png"></img>
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://cdn.homeshopping.pk/product_images/k/593/iphone-11-pro-max-midnight-green-select-2019__32224_zoom.png"></img>
                </div>

                <div className="text-wrapper item">
                    <span>IPhone 11 Pro</span><br></br>
                    <span>Price: $1000.00</span>
                </div>

                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;