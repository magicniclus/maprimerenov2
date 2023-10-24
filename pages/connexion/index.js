import React, { useState } from "react";
import Basic from "../../layout/Basic";
import { authenticateWithFirebase } from "../../firebase/partnerManager";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await authenticateWithFirebase(email, password);
      console.log("Utilisateur connecté!");
      // router.push("/mon-espace");
    } catch (error) {
      console.error("Erreur de connexion:", error);
    }
  };

  return (
    <Basic>
      <div className="min-h-[calc(100vh-100px)] bg-slate-50 w-full max-w-[1250px] px-0 py-0 lg:px-20 lg:py-10 mx-auto flex justify-between items-center ">
        <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-sm space-y-10">
            <div>
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-dark">
                Connectez-vous
              </h2>
            </div>
            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="relative -space-y-px rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="pl-2 relative block w-full rounded-t-md border-0 py-1.5 text-dark ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Mot de passe
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="pl-2 relative block w-full rounded-b-md border-0 py-1.5 text-dark ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm leading-6 text-dark"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm leading-6">
                  <a
                    href="#"
                    className="font-semibold text-primary hover:text-primary/50"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-primary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Basic>
  );
};

export default Index;
