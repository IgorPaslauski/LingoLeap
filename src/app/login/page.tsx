'use client'
import { redirect } from "next/navigation";

export default function LoginPage() {
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Login submitted");

    redirect("/home");
  };
  return (
    <div className="flex items-center justify-center h-screen flex-col space-y-8">
      <div >
        <h1>
          <span className="text-4xl font-bold text-gray-800">PortGo</span> {" "}
          <span className="text-4xl font-bold text-blue-600">Quiz</span>
          <span className="text-4xl font-bold text-gray-800">App</span>
        </h1>
      </div>
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Digite seu email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
          >
            Entrar
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Não tem uma conta?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Registrar
          </a>
        </p>
      </div>
    </div>
  );
}
