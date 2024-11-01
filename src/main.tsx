// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router"; // 라우터 설정 파일 경로

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

root.render(<RouterProvider router={router} />);
