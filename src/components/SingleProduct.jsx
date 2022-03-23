import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getClickedproductData } from "../Redux/actions";
import styles from "./";

export const SingleProductList = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.clickedProd);

  // make a request to get the details
  useEffect(() => {
    dispatch(getClickedproductData(params.id));
  }, []);
  return (
    <div className={styles.container}>
      <img src={data.image} alt={data.title} />
      <div>
        <h1
          style={{
            color: `${data.category == "women" ? "purple" : "teal"}`,
            border: `2px dashed ${
              data.category == "women" ? "teal" : "purple"
            }`,
          }}
        >
          {data.title}
        </h1>
        <h2
          style={{
            color: `${data.category == "women" ? "teal" : "purple"}`,
            border: `2px dashed ${
              data.category == "women" ? "purple" : "teal"
            }`,
          }}
        >
          Rs {data.price}
        </h2>
        <p>Brand: {data.brand}</p>
        <p>Category: {data.category}</p>

        {console.log(data)}
      </div>
    </div>
  );
};


