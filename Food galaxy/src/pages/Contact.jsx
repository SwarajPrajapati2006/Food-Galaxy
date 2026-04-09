import React from 'react'
import { useFormik } from "formik"
import * as Yup from "yup"

const Contact = () => {

  const valiDateSchema = Yup.object({
    name: Yup.string()
      .min(6, "At least 6 characters")
      .required("Name is required"),

    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),

    message: Yup.string()
      .required("Enter message")
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    validationSchema: valiDateSchema,

    onSubmit: (values) => {
      console.log(values)

      localStorage.setItem("name", values.name)
      localStorage.setItem("email", values.email)
      localStorage.setItem("message", values.message)
    }
  })

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dmkspibfj/image/upload/v1775542358/south_indian_vufuqh.jpg')"
      }}
    >

      {/* Glass Form */}
      <form 
        onSubmit={formik.handleSubmit}
        className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-xl rounded-2xl p-8 w-87.5 space-y-5 text-white"
      >

        <h1 className="text-2xl font-bold text-center">
          Contact Us
        </h1>

        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full p-3 bg-white/30 border border-white/40 rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-200 text-sm mt-1">
              {formik.errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full p-3 bg-white/30 border border-white/40 rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-200 text-sm mt-1">
              {formik.errors.email}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            name="message"
            placeholder="Enter your message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            rows="4"
            className="w-full p-3 bg-white/30 border border-white/40 rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
          />
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-200 text-sm mt-1">
              {formik.errors.message}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-200"
        >
          Submit
        </button>

      </form>
    </div>
  )
}

export default Contact