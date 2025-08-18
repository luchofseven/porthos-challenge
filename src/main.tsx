import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Navigate, Route, Routes } from "react-router";
import { QuotesProvider } from "./context/QuotesContex.tsx";
import { PostsProvider } from "./context/PostsContext.tsx";
import { QuoteOfDayPage } from "./pages/QuoteOfDay.tsx";
import { SearchPostsPage } from "./pages/SearchPosts.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QuotesProvider>
      <PostsProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/qod" element={<QuoteOfDayPage />} />
            <Route path="/posts" element={<SearchPostsPage />} />

            {/* Ruta comodín para que cualquier otro path sea redirigido a la raíz "/" */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </HashRouter>
      </PostsProvider>
    </QuotesProvider>
  </StrictMode>
);
