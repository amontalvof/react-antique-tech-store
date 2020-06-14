import React, { useState, useContext } from "react";
import { CartContext } from "../../context/cart";
import { UserContext } from "../../context/user";
import { NavbarWrapper } from "./NavbarStyle";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Drawer } from "react-rainbow-components";
import { BadgeOverlay } from "react-rainbow-components";

function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { cartItems } = useContext(CartContext);
  const {
    logedin,
    handleLoginOpen,
    handleCloseSession,
    registerin,
  } = useContext(UserContext);

  const loginSmallNavbar = () => {
    setOpenDrawer(false);
    handleLoginOpen();
  };

  const logoutSmallNavbar = () => {
    setOpenDrawer(false);
    handleCloseSession();
  };

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
        <li>
          {logedin ? (
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/checkout"
            >
              <h3>Pay now</h3>
            </Link>
          ) : (
            <div></div>
          )}
        </li>
        <li className="right">
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/cart"
          >
            <h3>
              {cartItems < 1 ? (
                "Cart"
              ) : (
                <BadgeOverlay value={cartItems} position="bottom-right">
                  Cart
                </BadgeOverlay>
              )}
            </h3>
          </Link>
        </li>
        {logedin ? (
          <li
            className="right"
            onClick={() => {
              handleCloseSession();
            }}
          >
            <h3 className="openLogin">Log out</h3>
          </li>
        ) : (
          <li
            className="right"
            onClick={() => {
              handleLoginOpen();
            }}
          >
            <h3 className="openLogin">Log in</h3>
          </li>
        )}
      </ul>
      <Drawer
        header={
          logedin
            ? `Welcome ${registerin.usernameregistro}`
            : "Antique Tech Store"
        }
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
            {logedin ? (
              <Link
                style={{
                  textDecoration: "none",
                }}
                to="/checkout"
              >
                <h2
                  style={{ color: "#303030", fontSize: "3vh", margin: "10px" }}
                  onClick={() => setOpenDrawer(false)}
                >
                  Pay now
                </h2>
              </Link>
            ) : (
              <div></div>
            )}
          </li>
          {logedin ? (
            <li>
              <h2
                style={{ color: "#303030", fontSize: "3vh", margin: "10px" }}
                onClick={() => logoutSmallNavbar()}
              >
                Log out
              </h2>
            </li>
          ) : (
            <li>
              <h2
                style={{ color: "#303030", fontSize: "3vh", margin: "10px" }}
                onClick={() => loginSmallNavbar()}
              >
                Log in
              </h2>
            </li>
          )}

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
                {cartItems < 1 ? (
                  "Cart"
                ) : (
                  <BadgeOverlay value={cartItems} position="bottom-right">
                    Cart
                  </BadgeOverlay>
                )}
              </h2>
            </Link>
          </li>
        </ul>
      </Drawer>
    </NavbarWrapper>
  );
}

export default Navbar;
