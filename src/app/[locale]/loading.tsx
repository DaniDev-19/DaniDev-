import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] h-screen w-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900 shadow-2xl border border-zinc-200 dark:border-zinc-800">
        <Loader2 className="h-12 w-12 animate-spin text-blue-600 dark:text-blue-400" />
        <p className="text-sm font-bold text-foreground animate-pulse">
          Cargando...
        </p>
      </div>
    </div>
  );
}
