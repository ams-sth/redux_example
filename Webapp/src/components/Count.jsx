import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/countSlice";

const Count = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.count);

  const toggleIncrease = () => {
    dispatch(increment());
  };

  const toggleDecrease = () => {
    dispatch(decrement());
  };

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <button onClick={toggleIncrease}>+</button>
      <h1>{count}</h1>
      <button onClick={toggleDecrease}>-</button>
    </div>
  );
};

export default Count;
