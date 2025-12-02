import { useEffect, useState } from "react";
import "./App.css";
import { Header, Footer } from "./index";
import { authService } from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/slice";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) dispatch(login(userData));
        else dispatch(logout());
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-stone-50 via-amber-50 to-orange-100 text-xl font-semibold text-stone-600 animate-pulse">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-stone-50 via-amber-50 to-orange-100 text-stone-800 font-inter">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
