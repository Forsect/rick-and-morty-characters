import { Provider } from "react-redux";
import store from "store";
import MaterialProvider from "./MaterialProvider";
import RouterProvider from "./RouterProvider";

const Providers = () => {
  return (
    <Provider store={store}>
      <MaterialProvider>
        <RouterProvider />
      </MaterialProvider>
    </Provider>
  );
};
export default Providers;
