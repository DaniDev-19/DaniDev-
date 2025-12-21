import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="es">
      <body className="bg-black text-white">
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl mb-8 text-gray-400">
            Oops! La página que buscas no existe.
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 rounded-full font-bold hover:bg-blue-700 transition-colors"
          >
            Volver al Inicio
          </Link>
        </div>
      </body>
    </html>
  );
}
