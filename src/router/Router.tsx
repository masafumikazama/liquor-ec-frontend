import { VFC, memo } from "react";
import { Routes, Route } from "react-router-dom";

import { List } from "../components/pages/List"
import { Home } from "../components/pages/Home"
import { ViewCart } from "../components/pages/ViewCart";
import { CheckoutOption } from "../components/pages/CheckoutOption";
import { Payment } from "../components/pages/Payment";
import { Page404 } from "../components/pages/Page404";

export const Router: VFC = memo(() =>
  <Routes>
    <Route path="/" element={<List />} />
    <Route path="/home" element={<Home />} />
    <Route path="/view_cart" element={<ViewCart />} />
    <Route path="/checkout_option" element={<CheckoutOption />} />
    <Route path="/payment" element={<Payment />} />
    <Route path="*" element={<Page404 />} />
  </Routes>
);
