import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Professional Portfolio",
    template: "%s | Professional Portfolio",
  },
  description:
    "Create stunning digital experiences with a Full Stack Developer specializing in Next.js, React, and Node.js.",
  keywords: [
    "Portfolio",
    "Web Developer",
    "Next.js",
    "React",
    "Full Stack",
    "Software Engineer",
  ],
  openGraph: {
    title: "Professional Portfolio",
    description: "Create stunning digital experiences.",
    url: process.env.NEXT_PUBLIC_SERVER_URL,
    siteName: "Professional Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Portfolio",
    description: "Create stunning digital experiences.",
  },
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!["en", "es"].includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.className} bg-background text-foreground antialiased`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="min-h-screen pt-16">{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
