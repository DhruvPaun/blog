import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../features/slice";
import { authService } from "../appwrite/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [hasError, setHasError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLogin(data) {
    setHasError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setHasError(error.message || "Login failed. Please try again.");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-orange-100 px-4">
      <div className="bg-white/90 backdrop-blur-sm shadow-xl border border-amber-100 rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-stone-800 mb-6">
          Welcome Back 👋
        </h2>

        {hasError && (
          <p className="text-red-500 text-sm text-center mb-4">{hasError}</p>
        )}

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
          {/* Email */}
          <div>
            <Input
              type="email"
              label="Email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^([\w.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">{errors.email.message}</span>
            )}
          </div>

          {/* Password */}
          <div>
            <Input
              type="password"
              label="Password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                  message:
                    "Password must contain at least 8 characters, one uppercase, one lowercase, and one number",
                },
              })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 text-white font-semibold rounded-lg transition-all duration-300 shadow-md ${
              isSubmitting
                ? "bg-amber-300 cursor-not-allowed"
                : "bg-amber-500 hover:bg-amber-600"
            }`}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </form>

        <p className="text-center text-sm text-stone-500 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-amber-600 hover:text-amber-700 font-medium transition-colors"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
