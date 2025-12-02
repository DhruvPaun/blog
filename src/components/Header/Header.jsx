import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "../Container";
import { logout } from "../../features/slice";
import { authService } from "../../appwrite/auth";

function Header() {
  const authStatus = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", status: true },
    { name: "Login", slug: "/login", status: !authStatus },
    { name: "Signup", slug: "/signup", status: !authStatus },
    { name: "All Posts", slug: "/all-post", status: authStatus },
    { name: "Add Post", slug: "/add-post", status: authStatus },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 shadow-sm border-b border-amber-100">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <h1
            onClick={() => navigator("/")}
            className="text-2xl font-extrabold tracking-wide cursor-pointer text-stone-800 hover:text-amber-500 transition-colors duration-300"
          >
            Dev<span className="text-amber-500">Blog</span>
          </h1>

          {/* Navigation Links */}
          <ul className="hidden sm:flex items-center space-x-6">
            {navItems.map(
              (val) =>
                val.status && (
                  <li key={val.name}>
                    <button
                      onClick={() => navigator(val.slug)}
                      className="text-white font-medium hover:text-amber-500 transition-colors duration-200"
                    >
                      {val.name}
                    </button>
                  </li>
                )
            )}
          </ul>

          {/* Logout Button */}
          {authStatus && (
            <button
              className="ml-4 px-4 py-2 bg-amber-500 text-white font-semibold rounded-md hover:bg-amber-600 shadow-sm transition-all duration-200"
              onClick={() => authService.logout().then(() => dispatch(logout()))}
            >
              Logout
            </button>
          )}
        </nav>
      </Container>
    </header>
  );
}

export default Header;
