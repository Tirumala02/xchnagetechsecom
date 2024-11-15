import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  // Truncate the name to a maximum of 20 characters
  const truncateName = (text, maxLength) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      className="text-gray-700 cursor-pointer"
      to={`/product/${id}`}
    >
      {/* Image Container */}
      <div
        className="overflow-hidden w-40 h-40 flex items-center justify-center bg-gray-100 mx-auto rounded-lg"
      >
        <img
          className="hover:scale-110 transition ease-in-out w-full h-full object-cover"
          src={image[0]}
          alt={name}
        />
      </div>
      {/* Product Name */}
      <p className="pt-3 pb-1 text-sm">
        {truncateName(name, 20)}
      </p>
      {/* Product Price */}
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
