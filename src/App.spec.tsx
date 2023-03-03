import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

import store from "./store";
import App from "./App";

describe("App", () => {
  test("Should run initial application", () => {
    const { debug } = render(
      <Provider store={store}>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </Provider>
    );
    debug();
  });
});
