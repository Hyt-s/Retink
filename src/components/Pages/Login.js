import { Fragment} from "react";
import { Link } from "react-router-dom";

function Login({submitHandler, setEmail, setPassword}) {

  return (
    <Fragment>
      <div className="bg-gray-200 lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-lg">
            <div className="py-8 px-8 rounded-xl">
                <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
                <form action="" className="mt-6" onSubmit={submitHandler}>
                    <div className="my-5 text-sm">
                        <label for="email" className="block text-black">Email</label>
                        <input type="email" autofocus id="email" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="my-5 text-sm">
                        <label for="password" className="block text-black">Password</label>
                        <input type="password" id="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Login</button>
                </form>

                <p className="mt-12 text-xs text-center font-light text-gray-400"> Don't have an account? 
                  <Link to={"/register"}>
                  <scan className="text-blue-800 font-medium"> Create One </scan>
                  </Link>
                </p>

            </div>
        </div>
    </Fragment>
  );
}

export default Login;
