import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  // En Next.js 15, requestLocale es una promesa
  const locale = await requestLocale;

  // Validar locale o usar fallback
  const currentLocale = locale || "es";

  return {
    locale: currentLocale,
    messages: (await import(`../messages/${currentLocale}.json`)).default,
  };
});
