import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Header() {
  return (
    <div className="header">

        <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        <div className="header_search">
          <input className="header_searchInput" type="text" />
          <SearchIcon className="header_searchIcon" />
          
        </div>
        <div className="header_nav">

          <div className="header_option">
            <span className="header_optionLineOne">Hello Guest</span>
            <span className="header_optionLineOne">Sign In</span>
                  
          </div>

          <div className="header_option">
            <span className="header_optionLineTwo">returns</span>
            <span className="header_optionLineTwo">& orders</span>

          </div>

          <div className="header_option">
            <span className="header_optionLineThree">Your</span>
            <span className="header_optionLineThree">Prime</span>

          </div>

          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineFour header_basketCount">0</span>

          </div>


        </div>

    </div>
  )
}

export default Header