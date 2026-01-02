"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function NotFound() {
  return (
    <html lang="es">
      <body
        className={`${outfit.className} bg-background text-foreground antialiased suppressHydrationWarning`}
      >
        <div className="min-h-screen flex items-center justify-center px-4 overflow-hidden relative">
          <div className="relative w-full max-w-2xl text-center z-10">
            {/* Elementos de fondo */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-[12rem] md:text-[15rem] font-black leading-none tracking-tighter bg-gradient-to-b from-foreground to-foreground/20 bg-clip-text text-transparent opacity-20 select-none">
                404
              </h1>

              <div className="relative -mt-20 md:-mt-28">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Oops! La página que buscas no existe.
                </h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link href="/">
                    <Button
                      size="lg"
                      className="h-14 px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-blue-600/20"
                    >
                      Volver al Inicio
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Decoración */}
            <div className="mt-20 flex justify-center gap-4 opacity-30">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" />
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce delay-100" />
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce delay-200" />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
