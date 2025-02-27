import { createSlice, nanoid } from "@reduxjs/toolkit";
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
                    token: nanoid(), // Fake token
                    password: action.payload.password,
                };

                // localStorage.setItem("user", JSON.stringify(userData));
                // localStorage.setItem("token", userData.token);
                // localStorage.setItem("userName", userData.userName);
                // localStorage.setItem("password", userData.password);

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
