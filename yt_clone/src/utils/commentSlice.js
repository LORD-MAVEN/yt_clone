import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
    name: "comment",
    initialState: {
        comments: [], // Corrected syntax
    },
    reducers: {
        addComment: (state, action) => {
            state.comments.push(action.payload); // Corrected syntax
        },
    },
});

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;
