import { Routes, Route } from "react-router-dom";
import {
  Dashboard,
  Error,
  Home,
  Login,
  Products,
  ProtectedRoute,
  SharedLayout,
  SharedLayoutProduct,
  SingleProduct,
} from "./pages";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState("");
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />

        <Route path="login" element={<Login setUser={setUser} />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />
        <Route path="products" element={<SharedLayoutProduct />}>
          <Route index element={<Products />} />

          <Route path=":productId" element={<SingleProduct />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;
