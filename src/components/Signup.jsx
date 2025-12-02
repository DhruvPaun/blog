import React, { useState } from 'react'
import { authService } from '../appwrite/auth'
import { useDispatch } from 'react-redux'
import { login } from '../features/slice'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from "react-router-dom"
import Input from './Input'
import Button from './Button'

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState("")

  async function handleSignup(data) {
    setError("")
    try {
      const userData = await authService.createAccount(data)
      if (userData) {
        const currentUser = await authService.getCurrentUser()
        if (currentUser) dispatch(login(currentUser))
        navigate("/")
      }
    } catch (err) {
      setError(err.message || "Signup failed. Please try again.")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-50">
      <form
        onSubmit={handleSubmit(handleSignup)}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Sign Up</h2>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        {/* Name */}
        <Input
          type="text"
          placeholder="Enter Your Name"
          label="Name"
          className="w-full border border-amber-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-amber-400"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        {/* Email */}
        <Input
          type="email"
          placeholder="Enter Your Email"
          label="Email"
          className="w-full border border-amber-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-amber-400"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^([\w.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/i,
              message: "Please enter a valid email"
            }
          })}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        {/* Password */}
        <Input
          type="password"
          placeholder="Enter Your Password"
          label="Password"
          className="w-full border border-amber-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-amber-400"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
              message: "Password must be 8+ chars, include uppercase, lowercase & number"
            }
          })}
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

        {/* Signup Button */}
        <Button
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 rounded-lg transition-all duration-200"
        >
          Sign Up
        </Button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-amber-600 hover:underline font-medium">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Signup
