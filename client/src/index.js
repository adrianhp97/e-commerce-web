import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import { Route, Switch } from "react-router-dom";

import 'semantic-ui-css/semantic.min.css';
import './index.css';

import routes from "./routes";

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={props => {
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                );
              }}
            />
          );
        })}
      </Switch>
    </ConnectedRouter>
  </Provider>,
  target
);
