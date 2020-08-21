import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { fetchUsers } from "./redux/users/usersSlice";
import { fetchComments } from "./redux/comments/commentsSlice";
import PostsList from "./components/posts/PostsList";

store.dispatch(fetchUsers());
store.dispatch(fetchComments());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PostsList />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
