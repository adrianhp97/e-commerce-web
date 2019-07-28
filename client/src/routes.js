import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";

import Home from "./containers/Home";

export default [
  {
    path: "/",
    exact: true,
    protected: false,
    layout: DefaultLayout,
    component: Home
  }
];
