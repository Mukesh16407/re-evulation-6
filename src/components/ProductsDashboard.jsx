import React, { useEffect } from "react";
import {getproductsData,sortProducts} from '../Redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./css/product.css";
export const Products = () => {
  // to get all products list on component mounts
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state.sortProducts)
  useEffect(() => {
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    dispatch(getproductsData())
  }, [dispatch]);

  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
    dispatch(sortProducts(e.target.value.trim()));
  };
  
  return (
    <>
      <h2>Products</h2>
      <select onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      <div id={styles.container} className="products-list">
        {/* map throught th products  list and display the results */}
        {data &&
          data.map((el) => {
            return (
              <div
                className={styles.card}
                key={el.id}
                onClick={() => nav(`/products/${el.id}`)}
              >
                <img src={el.image} alt="" height="80%" width="100%" />
                {/* display the results here */ el.title}
              </div>
            );
          })}
      </div>
    </>
  );
};
