import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import http from "../util/axios"

type Payload = {
  username: string
  password: string
}
const Login = () => {
  const [loading, setLoading] = useState(false)
  const [httpError, setHttpError] = useState()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Payload>()

  const submit: SubmitHandler<Payload> = async (payload) => {
    try {
      setLoading(true)
      const res = await http.post("/user/login", payload)

      if (res.data.code === "000") {
        //login user via redux and route
      } else {
        setHttpError(res.data.message)
      }
    } catch (error: Error) {
      setHttpError(error.response.data.message || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex rounded-3xl w-3/5 border">
        {/* <img src="" alt="" /> */}
        <div className="bg-black flex-1"></div>
        <div className="border flex-1 px-10 py-10">
          <h1 className="font-bold text-xl mb-7">Login to chat</h1>
          <form onSubmit={handleSubmit(submit)}>
            <div className="form-control mb-5">
              <div className="relative w-full h-10 border border-black rounded-lg">
                <input
                  type="text"
                  id="username"
                  className="floating-input"
                  {...register("username", {
                    required: `username is required`,
                  })}
                />
                <label htmlFor={"username"} className="floating-label">
                  username
                </label>
              </div>

              <div className="text-red-500 text-sm">
                {errors.username?.message}
              </div>
            </div>
            <div className="form-control mb-5">
              <div className="relative w-full h-10 border border-black rounded-lg">
                <input
                  type="text"
                  id="password"
                  className="peer absolute inset-0 px-2  bg-transparent"
                  {...register("password", {
                    required: `password is required`,
                  })}
                />
                <label
                  htmlFor={"password"}
                  className="absolute capitalize top-1/2 left-2 -translate-y-1/2 peer-focus:top-0 peer-focus:text-sm bg-white px-2 transition-all"
                >
                  password
                </label>
              </div>

              <div className="text-red-500 text-sm">
                {errors.password?.message}
              </div>
            </div>
            <input
              type="submit"
              value="Login"
              className="bg-black w-full text-white rounded-full py-2 font-medium text-lg cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
