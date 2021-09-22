import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from '@/routes';
import 'virtual:windi.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={route.path}>
            {route.components}
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
