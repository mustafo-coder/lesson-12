import React, { useState } from "react";
import ProductCard from "./product-card";
import ProductModal from "./product-modal";

const Products = ({ products }) => {
  const [productModal, setProductModal] = useState(false);

  const modalHandler = (product) => {
    setProductModal(product);
  }

  const closeModal = () => {
    setProductModal(false)
  }

  return (
    <div className="container mt-10">
      <div className="grid grid-cols-3 gap-5">
        {products.length > 0 &&
          products.map((p) => <ProductCard modalHandler={modalHandler} key={p.id} product={p} />)}
      </div>
      {products.length == 0 && (
        <h1 className="text-5xl text-center my-10 text-gray-300">
          Products not found
        </h1>
      )}
      {productModal && <ProductModal closeModal={closeModal} productID={productModal}/>}
    </div>
  );
};

export default Products;
