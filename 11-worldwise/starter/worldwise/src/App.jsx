import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

import { CitiesProvider } from "../contexts/CitiesContext";
import { AuthProvider } from "../contexts/fakeAuthContext";
import ProtectedRoute from "../pages/ProtectedRoute";

import CityList from "../components/CityList";
import CountryList from "../components/CountryList";
import City from "../components/City";
import Form from "../components/Form";
import SpinnerFullPage from "../components/SpinnerFullPage";

/* 
import Homepage from "../pages/Homepage";
import Pricing from "../pages/Pricing";
import Product from "../pages/Product";
import AppLayout from "../pages/AppLayout";
import Login from "../pages/Login"; 
import PageNotFound from "../pages/PageNotFound";
*/

const Homepage = lazy(() => import("../pages/Homepage"));
const Pricing = lazy(() => import("../pages/Pricing"));
const Product = lazy(() => import("../pages/Product"));
const AppLayout = lazy(() => import("../pages/AppLayout"));
const Login = lazy(() => import("../pages/Login"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

export default function App() {
  return (
    <div>
      <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Suspense fallback={<SpinnerFullPage />}>
              <Routes>
                <Route index element={<Homepage />} />
                <Route path="/product" element={<Product />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="login" element={<Login />} />
                <Route
                  path="/app"
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                      ßßß
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate replace to="cities" />} />
                  <Route path="cities" element={<CityList />} />
                  <Route path="cities/:id" element={<City />} />
                  <Route path="countries" element={<CountryList />} />
                  <Route path="form" element={<Form />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProvider>
    </div>
  );
}
