import { Produtos } from "@pages";
import { Route, Routes, Navigate } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route path="/produtos" element={<Produtos />} />
      <Route path="*" element={<Navigate to={"/produtos"} replace={true} />} />
    </Routes>
  );
};
