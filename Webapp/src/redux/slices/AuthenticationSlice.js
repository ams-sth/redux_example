import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Note: createAsyncThunk creates three action types automatically:
// - authentication/register/pending
// - authentication/register/fulfilled
// - authentication/register/rejected
export const registerUser = createAsyncThunk(
  "authentication/register", // Note: Follow pattern -> "sliceName/actionName" for thunk naming
  async (userData, { rejectWithValue }) => {
    // Note: First parameter (userData) is what gets passed when dispatching the action
    // Note: Second parameter is thunkAPI object containing useful methods like rejectWithValue

    try {
      // Note: Always use try-catch when making API calls to handle errors gracefully
      const response = await axios.post(
        "http://localhost:5000/api/v1/register", // Note: API crud action is always performed inside try block.
        userData
        // Note: userData will contain registration data like {username, email, password} passed from component
      );
      return response.data; // Note: Only return the data you need in your state
    } catch (error) {
      // Note: rejectWithValue sends error data to rejected action payload
      // Note: error.response?.data gets error message from backend if available
      return rejectWithValue(error.response?.data || "Registration Failed");
    }
  }
);

const AuthenticationSlice = createSlice({
  name: "Authentication", // Note: This name appears in action types
  initialState: {
    image: "./Authentication/Authentication.jpg",
    user: null, // Note: Stores user data after successful registration
    status: "idle", // Note: Common status values: 'idle' | 'loading' | 'success' | 'failed'
    error: null, // Note: Stores error message if registration fails
  },
  reducers: {
    // Note: Place synchronous reducer functions here
    // Example: logout: (state) => { state.user = null }
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    // Note: Handle async action states using builder callback pattern
    builder
      .addCase(registerUser.pending, (state) => {
        // Note: Called when API request starts
        state.status = "loading";
        state.error = null; // Note: Clear any previous errors
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        // Note: Called when API request succeeds
        state.status = "success";
        state.user = action.payload; // Note: action.payload contains response.data
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        // Note: Called when API request fails
        state.status = "failed";
        state.error = action.payload; // Note: action.payload contains rejectWithValue data
      });
  },
});

// Note: Export reducer to include in store configuration
export const { clearError, logout } = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;

// Usage in component:
// Note: Dispatch thunk action like this:
// const dispatch = useDispatch();
// dispatch(registerUser({ username: "user", email: "email", password: "pass" }));

// Note: Access state in component like this:
// const { user, status, error } = useSelector((state) => state.Authentication);
