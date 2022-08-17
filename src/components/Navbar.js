import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNumbers } from "../actions/getAction";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


function Navbar(props) {

  console.log("Top Navbar", props);

  useEffect(() => {
    console.log(getNumbers());
    getNumbers();
  }, []);
  return (
    <header>
      <div className="overlay"></div>
      <nav>
        <h2>Let's Shop 💝</h2>
        <ul>
          <li>
            <Button
              variant="contained"
              sx={{ color: 'white', backgroundColor: 'orange' }}
            >
              <Link to="/">Home</Link>
            </Button>
          </li>
          <li>
            <Button
              variant="contained"
                sx={{ color: 'white', backgroundColor: 'orange' }}
            >
              <Link to="/about">About</Link>
            </Button>
          </li>
          <li>
            <Button
              variant="contained"
              startIcon={<ShoppingBasketIcon style={{color:"blue"}} />}
              style={{
                backgroundColor: "orange",
                color: "red",
                listStyle: "none",
                textDecoration:"none"
              }}
            >
              <Link to="/cart">
                Cart
                <span>{props.basketProps.basketNumbers}</span>
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { getNumbers })(Navbar);
