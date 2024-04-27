export default function RegisterForm({ onCancel }) {
  return (
    <div className="w-96 mx-auto mt-10 bg-gray-800 p-6 rounded-lg shadow-lg pl-10 pr-10">
      <form>
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-2 text-yellow-300">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500 bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2 text-yellow-300">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500 bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 text-yellow-300">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500 bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-yellow-300">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500 bg-gray-700 text-white"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-yellow-300">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500 bg-gray-700 text-white"
          />
        </div>

        <div className="flex justify-between mb-4 ">
          <button
            type="button"
            className="w-1/2 bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 mr-2"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-1/2 bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 ml-2"
          >
            Register !
          </button>
        </div>
      </form>
    </div>
  );
}
