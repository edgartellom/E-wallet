import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserCarts } from "../../redux/slices/cartSlice";
import { useFirebaseAuth } from "react-redux-firebase";

const useCarts = () => {
  const { auth } = useFirebaseAuth();
  const dispatch = useDispatch();
  const userCarts = useSelector((state) => state.userCarts);
  const cartsStatus = useSelector((state) => state.cartsStatus);

  return <div>const userId = auth.uid</div>;
};

export default useCarts;
