import React, { useState, useContext } from "react";
import { CartContext } from "../../context/cart";
import { NavbarWrapper } from "./NavbarStyle";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Drawer } from "react-rainbow-components";
import { BadgeOverlay } from "react-rainbow-components";

function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { cartItems } = useContext(CartContext);

  return (
    <NavbarWrapper>
      <div className="smallScreenNav">
        <div className="dropdown">
          <FaBars
            onClick={() => setOpenDrawer(true)}
            style={{ float: "right" }}
          />
        </div>
      </div>
      <ul className="topnav">
        <li>
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/"
          >
            <h3>Home</h3>
          </Link>
        </li>
        <li>
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/about"
          >
            <h3>About</h3>
          </Link>
        </li>
        <li>
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/products"
          >
            <h3>Products</h3>
          </Link>
        </li>
        <li className="right">
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/cart"
          >
            <h3>
              <BadgeOverlay
                value={cartItems}
                position="bottom-right"
                isHidden={cartItems === 0 ? true : false}
              >
                Cart
              </BadgeOverlay>
            </h3>
          </Link>
        </li>
        <li className="right">
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/login"
          >
            <h3>Login</h3>
          </Link>
        </li>
      </ul>
      <Drawer
        header="Antique Tech Store"
        slideFrom="right"
        isOpen={openDrawer}
        onRequestClose={() => setOpenDrawer(false)}
      >
        <ul>
          <li>
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/"
            >
              <h2
                style={{ color: "#303030", fontSize: "3vh", margin: "10px" }}
                onClick={() => setOpenDrawer(false)}
              >
                Home
              </h2>
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/about"
            >
              <h2
                style={{ color: "#303030", fontSize: "3vh", margin: "10px" }}
                onClick={() => setOpenDrawer(false)}
              >
                About
              </h2>
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/products"
            >
              <h2
                style={{ color: "#303030", fontSize: "3vh", margin: "10px" }}
                onClick={() => setOpenDrawer(false)}
              >
                Products
              </h2>
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/login"
            >
              <h2
                style={{ color: "#303030", fontSize: "3vh", margin: "10px" }}
                onClick={() => setOpenDrawer(false)}
              >
                Login
              </h2>
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/cart"
            >
              <h2
                style={{ color: "#303030", fontSize: "3vh", margin: "10px" }}
                onClick={() => setOpenDrawer(false)}
              >
                <BadgeOverlay
                  value={cartItems}
                  position="bottom-right"
                  isHidden={cartItems === 0 ? true : false}
                >
                  Cart
                </BadgeOverlay>
              </h2>
            </Link>
          </li>
        </ul>
      </Drawer>
    </NavbarWrapper>
  );
}

export default Navbar;
