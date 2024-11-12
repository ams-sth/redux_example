import { useDispatch, useSelector } from "react-redux";
import { increase } from "../redux/slices/complexSlice";

const Collection = () => {
  const dispatch = useDispatch();
  const vari = useSelector((state) => state.complex.collection);

  const handleIncrement = (id) => { //id is an parameter
    dispatch(increase({ id })); // {id} is an object and shorthand for {id:id}
  };
  return (
    <div>
      {vari.map((v) => (
        <div key={v.id} style={{ display: "flex", gap: "1rem" }}>
          <button onClick={() => handleIncrement(v.id)}>+</button>
          <h1>{v.count}</h1>
        </div>
      ))}
    </div>
  );
};

export default Collection;
