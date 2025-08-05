export default function Login({error,handlePasswordSubmit,setPassword,password}){
    return (
              <div className="max-w-md mx-auto mt-40 p-6 rounded-xl text-white  shadow bg-[#121212]">
        <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
        {error && <p className="mb-2 text-red-500">{error}</p>}
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="Enter admin password"
            className="border p-2 rounded w-full text-white     border-b border-gray-600 focus:outline-none focus:border-[#651FFF] py-2 placeholder-gray-500 transition-colors duration-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#651FFF] text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Enter
          </button>
        </form>
      </div>
    )
}