import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";

const commentsAdapter = createEntityAdapter();

const initialState = commentsAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const json = await response.json();
    return json;
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchComments.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.status = "succeeded";
      // Add any fetched comments to the array
      commentsAdapter.upsertMany(state, action.payload);
    },
    [fetchComments.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export default commentsSlice.reducer;

export const { selectAll: selectAllcomments } = commentsAdapter.getSelectors(
  (state) => state.comments
);

export const selectCommentsByPostId = createSelector(
  [selectAllcomments, (state, postId) => postId],
  (comments, postId) => comments.filter((comment) => comment.postId === postId)
);
