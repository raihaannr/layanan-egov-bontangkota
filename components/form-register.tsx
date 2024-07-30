'use client'
import { signIn } from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { ZodIssue } from "zod";

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirm: string;
  role?: string; // Optional because it's added during submission
}

const FormRegister = () => {
 
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormValues((old) => ({ ...old, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (formValues.password !== formValues.confirm) {
      return setErrors({ confirm: "Password and confirm password do not match" });
    }

    try {
      setIsLoading(true);
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formValues, role: "user" }), // Include role in the form values
      });

      const result = await res.json();

      setIsLoading(false);

      if (result.status === "validation_error") {
        const newErrors: Record<string, string> = {};
        result.errors.forEach((err: ZodIssue) => {
          newErrors[err.path[0] as string] = err.message;
        });
        return setErrors(newErrors);
      }

      if (!res.ok) return alert("Register failed");

      setFormValues({
        name: "",
        email: "",
        password: "",
        confirm: "",
      });
      setErrors({});
      return signIn(undefined, { callbackUrl: "/" });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  return (
    <div className="xl:grid xl:grid-cols-3 xl:grid-rows-1">
      <div className="xl:block hidden xl:col-span-2">
        <img src="/el4.jpeg" alt="bakau kuntul perak" className="xl:w-full xl:h-screen xl:object-cover" />
      </div>
      <div className="bg-light-green h-screen xl:bg-light-green">
        <div className="px-10 pt-20 xl:h-40 xl:mt-28 xl:mx-8 xl:rounded-xl xl:p-6">
          <h1 className="text-4xl font-black xl:text-4xl xl:font-black">Pendaftaran Akun</h1>
          <form onSubmit={handleSubmit}>
            <div className="xl:my-4">
              <input 
                type="text" 
                placeholder="Nama Lengkap"
                name="name"
                id="name" 
                value={formValues.name}
                onChange={handleInput}
                className="w-full border-b-2 border-b-black p-2 bg-transparent placeholder:text-black xl:w-full xl:border-b-2 xl:border-b-black xl:p-2 xl:bg-transparent xl:placeholder:text-black" />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
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
            <div className="xl:mb-4">
              <input 
                type="password" 
                name="confirm"
                id="confirm"
                placeholder="Konfirmasi Password" 
                value={formValues.confirm}
                onChange={handleInput}
                className="w-full border-b-2 border-b-black p-2 bg-transparent placeholder:text-black xl:w-full xl:border-b-2 xl:border-b-black xl:p-2 xl:bg-transparent xl:placeholder:text-black" />
              {errors.confirm && <p className="text-red-500">{errors.confirm}</p>}
            </div>
            <input type="hidden" name="role" value="user" /> {/* Hidden input field for role */}
            <button type="submit" className="bg-sky-950 text-white px-4 py-2 mt-4 w-full rounded-md xl:bg-sky-950 xl:text-white xl:px-4 xl:py-2 xl:mt-4 xl:w-full xl:rounded-md">
              {isLoading ? "Registering..." : "Daftar"}
            </button>
            <p className="text-sm text-center py-4 xl:text-sm xl:text-center xl:py-4">Sudah punya akun? <a href="/login" className="text-orange-500 text-sm xl:text-orange-500 xl:text-sm">masuk disini</a></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormRegister;
