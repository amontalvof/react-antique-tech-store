import React from "react";
import { InfoWrapper } from "./InfoStyle";
import Title from "../Title";
import Hero from "../Hero";
import img from "../../assets/images/AboutBgd.jpg";

function index() {
  return (
    <InfoWrapper>
      <Hero img={img} />
      <br />
      <Title title={"About Us"} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        dolorum necessitatibus et laudantium nam autem perspiciatis! Quos itaque
        aspernatur perferendis eaque perspiciatis adipisci ipsa, voluptatibus
        esse voluptate eveniet! Iusto eius dolor porro praesentium earum maxime
        vel soluta! Rem voluptates iure laudantium, odit eaque repellendus
        dolores praesentium recusandae ratione distinctio veniam, ullam labore
        consectetur harum aut odio velit placeat maxime quas repudiandae
        deleniti cupiditate! At doloremque voluptatibus ut aperiam natus commodi
        facere, dolores fuga voluptatem incidunt, quaerat explicabo veniam et.
        Maiores cumque ipsum pariatur eos amet fugit quasi quaerat officia
        excepturi earum, culpa debitis delectus quod, explicabo laborum placeat
        nesciunt eveniet.
      </p>
      <br />
      <br />
    </InfoWrapper>
  );
}

export default index;
