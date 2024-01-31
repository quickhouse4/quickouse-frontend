import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  const [label, setLabel] = useState()
  return (
    <>
      <Header setLabel={setLabel}/>
      <div class="container w-100">
        <div class="row m-2 p-2">
          <div class="col-md-12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
              laoreet odio nec, accumsan proin eleifend orci habitasse venenatis
              semper lacinia potenti natoque, nascetur porttitor leo molestie
              cum convallis risus parturient tincidunt congue. Facilisis litora
              orci nascetur laoreet nam in rhoncus mattis vehicula nunc, leo
              porttitor pellentesque consequat potenti porta iaculis
            </p>
          </div>
          <div class="col-md-12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
              laoreet odio nec, accumsan proin eleifend orci habitasse venenatis
              semper lacinia potenti natoque, nascetur porttitor leo molestie
              cum convallis risus parturient tincidunt congue. Facilisis litora
              orci nascetur laoreet nam in rhoncus mattis vehicula nunc, leo
              porttitor pellentesque consequat potenti porta iaculis
            </p>
          </div>
          <div class="col-md-12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
              laoreet odio nec, accumsan proin eleifend orci habitasse venenatis
              semper lacinia potenti natoque, nascetur porttitor leo molestie
              cum convallis risus parturient tincidunt congue. Facilisis litora
              orci nascetur laoreet nam in rhoncus mattis vehicula nunc, leo
              porttitor pellentesque consequat potenti porta iaculis
            </p>
          </div>
          <div class="col-md-12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
              laoreet odio nec, accumsan proin eleifend orci habitasse venenatis
              semper lacinia potenti natoque, nascetur porttitor leo molestie
              cum convallis risus parturient tincidunt congue. Facilisis litora
              orci nascetur laoreet nam in rhoncus mattis vehicula nunc, leo
              porttitor pellentesque consequat potenti porta iaculis
            </p>
          </div>
          <div class="col-md-12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
              laoreet odio nec, accumsan proin eleifend orci habitasse venenatis
              semper lacinia potenti natoque, nascetur porttitor leo molestie
              cum convallis risus parturient tincidunt congue. Facilisis litora
              orci nascetur laoreet nam in rhoncus mattis vehicula nunc, leo
              porttitor pellentesque consequat potenti porta iaculis
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
