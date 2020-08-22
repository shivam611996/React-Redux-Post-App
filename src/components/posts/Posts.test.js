import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Posts from "./Posts";
import store from "../../redux/store";

describe("<Posts />", () => {
  describe("when it renders", () => {
    it("should render 'Posts' heading", () => {
      const { container, unmount } = render(
        <Provider store={store}>
          <Posts />
        </Provider>
      );

      expect(container.firstChild.firstChild).toMatchInlineSnapshot(`
      <h2>
        Posts
      </h2>
    `);
      unmount();
    });

    it("should render loading when posts are loading", () => {
      const { getByText, unmount } = render(
        <Provider store={store}>
          <Posts />
        </Provider>
      );

      expect(getByText("Loading...")).toBeInTheDocument();
      unmount();
    });
  });
});
