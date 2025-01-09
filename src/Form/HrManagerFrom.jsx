import React from "react";
import { useForm } from "react-hook-form";

const HrManagerFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    
    console.log("Form submitted", data);


    console.log('getting file data',data.CompanyLogo[0]) //getting file to data from for future update the imgae url from bbimage
  };

//   var form = new FormData();
//   form.append("image", file.files[0])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Join as HR
        </h2>

        {/* Form Section */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              {...register("fullName", { required: "Full Name is required" })}
              className="input input-bordered w-full mt-1"
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>


          <div>
            <label
            
              className="block text-sm font-medium text-gray-700"
            >
              Company Name
            </label>
            <input
              type="text"
              id="Company Name"
              {...register("Company Name", { required: "Company Name" })}
              className="input input-bordered w-full mt-1"
              placeholder="Company Name"
            />
            {errors.CompanyName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.CompanyName.message}
              </p>
            )}
          </div>

          <div>
            <label
            
              className="block text-sm font-medium text-gray-700"
            >
              Company Logo
            </label>
            <input
              type="file"
              id="Company Logo"
              {...register("CompanyLogo", )}
              className=" w-full mt-1"
              placeholder="Company Logo"
            />
           
          </div>





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

          <div>
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              {...register("dob", { required: "Date of Birth is required" })}
              className="input input-bordered w-full mt-1"
            />
            {errors.dob && (
              <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select a Package
            </label>
            <select
              id="package"
              {...register("package", { required: "Package selection is required" })}
              className="select select-bordered w-full mt-1"
            >
              <option disabled value="">Choose a package</option>
              <option value="5">5 Members for $5</option>
              <option value="10">10 Members for $8</option>
              <option value="20">20 Members for $15</option>
            </select>
            {errors.package && <p className="text-red-500 text-sm mt-1">{errors.package.message}</p>}
          </div>

          <button type="submit" className="btn btn-primary w-full mt-4">
            Sign Up
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

export default HrManagerFrom;
