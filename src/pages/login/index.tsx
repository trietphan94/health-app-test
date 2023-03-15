
const Login = () =>{
  return (
    <div className="wrapper-content">
      <div className="max-w-md mx-auto mt-20 mb-40">
        <form>
          <h2 className="mb-5 text-2xl text-center">Login</h2>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required /> 
          </div>
          <button type="submit" className="w-full btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login