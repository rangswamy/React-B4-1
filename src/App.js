import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./redux/features/products/productsSlice";
import Products from "./components/Products";
import Loading from "./components/Loading";

function App() {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.productsReducer.loading);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  return (
    <div>
      {loading ? <Loading /> : <Products />}
    </div>
  );
}

export default App;
