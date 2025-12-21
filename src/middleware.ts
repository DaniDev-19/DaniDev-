import createMiddleware from "next-intl/middleware";
import { routing } from "./navigation";

export default createMiddleware(routing);

export const config = {
  // Coincidir con todas las rutas excepto:
  // - api (Payload o Next)
  // - admin (Panel de administración de Payload)
  // - _next (internos de Next.js)
  // - _static (archivos estáticos)
  // - todos los archivos en la raíz pública (favicon.ico, etc.)
  matcher: ["/((?!api|admin|_next|_static|.*\\..*).*)"],
};
