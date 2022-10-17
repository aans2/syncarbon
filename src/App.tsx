// Third party libs
import React from "react";
import Auth from "use-eazy-auth";
import { AuthRoute, GuestRoute } from "use-eazy-auth/routes";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Internal imports
import Login from "./Pages/Login/View";
import { login, me, refresh } from "./Utils/Login";
import Layout2 from "./Pages/Layout2/View";
import Layout1 from "./Pages/Layout1/View";
import Tabelas from "./Pages/Tabelas/View";
import Setor from "./Pages/Setor/View";
import Diesel from "./Pages/Diesel/View";
import AllSetor from "./Pages/AllSetor/View";

export function createList(quantity: number) {
  if (quantity === 0) return [];
  var list = [];
  for (let i = 0; i < quantity; i++) {
    list.push("a");
  }
  return list;
}

export var callAuthApiPromise: any;

export var isDiferentUser: (stateUser: string) => boolean;

export var getUser: () => string;

function App() {
  return (
    <Auth
      loginCall={login}
      meCall={me}
      refreshTokenCall={refresh}
      render={(authActions, authState, userState) => {
        callAuthApiPromise = authActions.callAuthApiPromise;
        isDiferentUser = (stateUser: string) =>
          stateUser !== (userState.user as any).id;
        getUser = () => (userState.user as any).id as string;
        return (
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Layout1" element={<Layout1 />} />
              <Route path="/setor" element={<Setor />} />
              <Route path="/Todosetor" element={<AllSetor />} />
              <Route path="/setor/Diesel" element={<Diesel />} />
              <Route path="/Layout2" element={<Layout2 />} />
              <Route path="/Tabelas" element={<Tabelas />} />

              {/* <GuestRoute path="/" element={<Login />} /> */}
              {/* <GuestRoute path="/login"  element={<Login/>} /> */}
              {/* <AuthRoute
                path="/Layout1"
                redirectTo="/login"
                children={<Layout1 />}
              /> */}
            </Routes>
          </Router>
        );
      }}
    />
  );
}

export default App;
