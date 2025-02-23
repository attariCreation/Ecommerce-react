import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: localStorage.getItem("userName") || "",
    password: "", 
    loading: false, 
    isLogin: !!localStorage.getItem("token"),
    token: localStorage.getItem("token") || null,
    error: false,
};

const loginSlice = createSlice({
    name: "login", 
    initialState, 
    reducers: {
        loginUser: (state, action) => {
            state.loading = true;
            state.error = false;

            if (action.payload.userName && action.payload.password) {
                const userData = {
                    userName: action.payload.userName,
                    token: "dummy-token-123", // Fake token
                };

                localStorage.setItem("user", JSON.stringify(userData));
                localStorage.setItem("token", userData.token);
                localStorage.setItem("userName", userData.userName);

                state.userName = userData.userName;
                state.token = userData.token;
                state.isLogin = true;
                state.loading = false;
            } else {
                state.error = true;
                state.loading = false;
            }
        },

        logoutUser: (state) => {
            state.userName = "";
            state.password = "";
            state.token = null;
            state.isLogin = false;
            state.error = false;

            localStorage.removeItem("user");
            localStorage.removeItem("token");
            localStorage.removeItem("userName");
        }
    }
});

export const { loginUser, logoutUser } = loginSlice.actions;
export default loginSlice.reducer;
