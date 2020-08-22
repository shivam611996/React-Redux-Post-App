import React from "react";
import { render } from "@testing-library/react";
import Detail from "./Detail";

describe("<Detail />", () => {
  describe("when it renders", () => {
    it("should render title and value", () => {
      const { getByText, unmount } = render(
        <Detail title="title" value="value" />
      );

      expect(getByText("title")).toHaveTextContent("title");
      expect(getByText("value")).toHaveTextContent("value");
      unmount();
    });
  });
});
