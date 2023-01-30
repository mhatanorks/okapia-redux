import { store } from "../redux/store";
import { Provider } from "react-redux";

import Home from "../components/provider/pr_index";

export default function Render() {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
}
