'use client'
import { signIn } from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { z, ZodIssue } from "zod";
import { loginSchema } from "@/lib/validation";

interface FormValues {
  email: string;
  password: string;
}

const FormLogin = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormValues((old) => ({ ...old, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      // Validate form values using Zod
      loginSchema.parse(formValues);

      // Clear previous errors
      setErrors({});
      setIsLoading(true);

      // Perform sign in
      const result = await signIn("credentials", {
        redirect: false,
        email: formValues.email,
        password: formValues.password,
      });

      setIsLoading(false);

      if (result?.error) {
        setErrors({ form: result.error });
      } else {
        // Redirect to home page
        window.location.href = "/";
      }
    } catch (error) {
      setIsLoading(false);
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err: ZodIssue) => {
          newErrors[err.path[0] as string] = err.message;
        });
        setErrors(newErrors);
      } else {
        console.error(error);
        setErrors({ form: "An unexpected error occurred." });
      }
    }
  }

  return (
    <div className="xl:grid xl:grid-cols-3 xl:grid-rows-1">
      <div className="xl:block hidden xl:col-span-2">
        <img src="/el4.jpeg" alt="bakau kuntul perak" className="xl:w-full xl:h-screen xl:object-cover" />
      </div>
      <div className="bg-light-green h-screen xl:bg-light-green">
        <div className="px-10 pt-20 xl:h-40 xl:mt-28 xl:mx-8 xl:rounded-xl xl:p-6">
          <h1 className="text-4xl font-black xl:text-4xl xl:font-black">Masuk <br /> Ke-Akun Anda</h1>
          <form onSubmit={handleSubmit}>
            <div className="xl:my-4">
              <input 
                type="email" 
                name="email"
                id="email"
                placeholder="Email" 
                value={formValues.email}
                onChange={handleInput}
                className="w-full border-b-2 border-b-black p-2 bg-transparent placeholder:text-black xl:w-full xl:border-b-2 xl:border-b-black xl:p-2 xl:bg-transparent xl:placeholder:text-black" />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="xl:mb-4">
              <input 
                type="password" 
                name="password"
                id="password"
                placeholder="Password" 
                value={formValues.password}
                onChange={handleInput}
                className="w-full border-b-2 border-b-black p-2 bg-transparent placeholder:text-black xl:w-full xl:border-b-2 xl:border-b-black xl:p-2 xl:bg-transparent xl:placeholder:text-black" />
              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>
            <button type="submit" className="bg-sky-950 text-white px-4 py-2 mt-4 w-full rounded-md xl:bg-sky-950 xl:text-white xl:px-4 xl:py-2 xl:mt-4 xl:w-full xl:rounded-md">
              {isLoading ? "Logging in..." : "Masuk"}
            </button>
            {errors.form && <p className="text-red-500">{errors.form}</p>}
            <p className="text-sm text-center py-4 xl:text-sm xl:text-center xl:py-4">Belum punya akun? <a href="/register" className="text-orange-500 text-sm xl:text-orange-500 xl:text-sm">daftar disini</a></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
