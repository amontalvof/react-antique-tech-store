import React from "react";
import { Card } from "react-rainbow-components";
import { Link } from "react-router-dom";
import { Button } from "react-rainbow-components";
import { FaArrowRight } from "react-icons/fa";

export default function index(props) {
  const { image, title, id, price } = props;
  return (
    <div>
      <Card title={title}>
        <div className="rainbow-p-around_xx-medium rainbow-align-content_center rainbow-flex_column">
          <img src={image.url} alt="product" style={{ width: "80%" }} />
          <Link
            to={`product/${id}`}
            style={{
              textDecoration: "none",
            }}
          >
            <Button variant="border" className="rainbow-m-around_medium">
              <h4 style={{ fontSize: "20px" }}>
                View Details <FaArrowRight style={{ marginLeft: "4px" }} />
              </h4>
            </Button>
          </Link>
          <h1
            className="rainbow-p-top_small rainbow-font-size-heading_large"
            style={{ color: "#6860db" }}
          >
            ${price}
          </h1>
        </div>
      </Card>
    </div>
  );
}
