import { Form, Link, useActionData } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { useEffect,  useState} from "react";
import useRegister from "../hooks/useRegister";
import FormInput from "../componets/FormInput";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  return { email, password };
};

function Login() {
  const userData = useActionData();

  const { loginUser, isPending } = useLogin();
  const { isPending: isPendingUseRegister, registerWithGoogle } = useRegister();
  const [erorInput, setErrorInput] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (userData) {
      if (userData.email && userData.password) {
        loginUser(userData.email, userData.password);
      } else {
        if (userData.email || userData.password) {
          if (!userData.password) {
            let name = {
              email: "",
              password: "input-error",
            };
            setErrorInput(name);
          }
          if (!userData.email) {
            let name = {
              email: "input-error",
              password: "",
            };
            setErrorInput(name);
          }
          if (!userData.email) {
            let name = {
              email: "input-error",
              password: "",
            };
            setErrorInput(name);
          }
        } else {
          let name = {
            email: "input-error",
            password: "input-error",
          };
          setErrorInput(name);
        }
      }
    }
  }, [userData]);

  return (
    <div className="grid grid-cols-1 min-h-screen relative">
      <video  
      src="./src/assets/food.mp4"
        autoPlay
        muted
        loop
        className="w-full fixed bg-cover place-items-center bg-orange-50 bg-center h-screen object-cover"
      >
        
      </video>
      <div className="h-full  justify-center bg-slate-500 grid place-items-center bg-[url('./olovli.mp4')]">
        <div className="card bg-base-100 w-96 shadow-x1 p-8">
          <Form method="post" className="flex flex-col items-center gap-5">
            <h1 className="text-3x1 font-semibold">Login</h1>
            <FormInput type="email" label="email" name="email" status={erorInput.email} />
            <FormInput type="password" label="password" name="password" status={erorInput.password} />
            <div className="w-full">
              {!isPending && (
                <button className="btn btn-primary btn-block">Login</button>
              )}
              {isPending && (
                <button disabled className="btn btn-primary btn-block">
                  Loading...
                </button>
              )}{" "}
            </div>
          </Form>
          {!isPendingUseRegister && (
            <div className="w-full mt-5">
              <button
                onClick={registerWithGoogle}
                className="btn btn-neutral btn-block"
              >
                Google
              </button>
            </div>
          )}
          {isPendingUseRegister && (
            <div className="w-full mt-5">
              <button disabled className="btn btn-neutral btn-block">
                Loading...
              </button>
            </div>
          )}
          <h5 className=" mt-5 text-center">
            Not a member yet? Register
            <Link
              className="ml-2 link link-hover link-primary capitalize"
              to="/register"
            >
              register
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
}
export default Login;
