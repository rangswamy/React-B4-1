// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "./redux/features/products/productsSlice";
// import Products from "./components/Products";
// import Loading from "./components/Loading";

import About from "./components/About";
import Team from "./components/Team";

function App() {

  // const dispatch = useDispatch();
  // const loading = useSelector(state => state.productsReducer.loading);

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch])

  return (
    <div>
      {/* {loading ? <Loading /> : <Products />} */}
      <About/>
      <Team/>
    </div>
  );
}

export default App;
