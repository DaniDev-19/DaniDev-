"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname, routing } from "@/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const handleLocaleChange = (newLocale: string) => {
    router.replace(
      // @ts-ignore
      pathname,
      { locale: newLocale }
    );
  };

  return (
    <div className="flex items-center gap-1 rounded-xl bg-white/5 border border-white/10 p-1">
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "h-7 px-2 text-[10px] font-bold uppercase transition-all",
          locale === "es"
            ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
            : "text-gray-500 hover:text-white"
        )}
        onClick={() => handleLocaleChange("es")}
      >
        ES
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "h-7 px-2 text-[10px] font-bold uppercase transition-all",
          locale === "en"
            ? "bg-purple-500 text-white shadow-lg shadow-purple-500/20"
            : "text-gray-500 hover:text-white"
        )}
        onClick={() => handleLocaleChange("en")}
      >
        EN
      </Button>
    </div>
  );
}
