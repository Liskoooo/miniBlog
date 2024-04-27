import { useRef } from "react";

export default function LogInForm({ changeModalType, closeIt, handleLogin }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-50">
      <div className="relative bg-white p-8 rounded-lg shadow-lg">
        <form className="mb-6">
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500 text-lg"
              ref={emailRef}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-lg text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500 text-lg"
              ref={passwordRef}
            />
          </div>

          <button
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 text-lg"
            onClick={() =>
              handleLogin(emailRef.current.value, passwordRef.current.value)
            }
          >
            Log In
          </button>
        </form>

        <div className="flex justify-between">
          <button
            className="text-lg text-blue-500 hover:text-blue-700"
            onClick={() => changeModalType()}
          >
            Register
          </button>
          <p className="text-xl cursor-pointer" onClick={() => closeIt()}>
            X
          </p>
        </div>
      </div>
    </div>
  );
}
