import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { MyContext } from "../Provider/AuthContext";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const LoginForm = () => {
  // const notify = () => ;
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const{signIn} =useContext(MyContext)
  // console.log(signIn)

  const onSubmit = (data) => {
    
    console.log("Form submitted", data.email,data.password);

    const email =data.email;
    const password=data.password;
    signIn(email,password)
    .then((userCredential) => {

      // succfull login taots
      toast.success("Successful login!")

      // Signed in 
      const user = userCredential.user;
      console.log(user)
      navigate('/dashboard')
      // ...
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)    
       toast.error(`error :-${errorMessage}`)

    });
  

    // console.log('getting file data',data.CompanyLogo[0]) //getting file to data from for future update the imgae url from bbimage
  };

//   var form = new FormData();
//   form.append("image", file.files[0])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login Form
        </h2>

        {/* Form Section */}
        <form  className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <ToastContainer />

      





          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email format",
                },
              })}
              className="input input-bordered w-full mt-1"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="input input-bordered w-full mt-1"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

        

    
          <button type="submit" className="btn btn-primary w-full mt-4">
            Login
          </button>
        </form>

        {/* Social Login Section */}
        <div className="divider">OR</div>
        <div className="flex flex-col space-y-2">
          <button className="btn btn-outline btn-google w-full">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
