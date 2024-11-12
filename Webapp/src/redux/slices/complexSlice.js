import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collection: [
    {
      id: 1,
      count: 0,
    },
    { id: 2, count: 0 },
    { id: 3, count: 0 },
    { id: 4, count: 0 },
    { id: 5, count: 0 },
  ],
};

const complexSlice = createSlice({
  name: "Complex",
  initialState,
  reducers: {
    increase: (state, action) => {
    /*Note: payload stores the value/argument after dispatching from component.
            Currently its storing id from dispatch(increase({ id }));*/
      const { id } = action.payload; 
      const item = state.collection.find((item) => item.id === id);
      //   const item = state.collection.find(
      //     (item) => item.id === action.payload.id
      //   );
      if (item) {
        item.count += 1;
      }
    },
  },
});
export const { increase } = complexSlice.actions;
export default complexSlice.reducer;
