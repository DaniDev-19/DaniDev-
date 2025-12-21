"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { sendEmail } from "@/actions/contact";
import { useTranslations } from "next-intl";

export function Contact() {
  const t = useTranslations("Contact");
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<{
    success?: boolean;
    error?: string;
  } | null>(null);

  async function handleSubmit(formData: FormData) {
    setIsPending(true);
    setStatus(null);
    try {
      const result = await sendEmail(formData);
      setStatus(result);
      if (result.success) {
        (document.getElementById("contact-form") as HTMLFormElement).reset();
      }
    } catch (e) {
      setStatus({ error: t("status.error") });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-background py-24 px-4 md:px-6 overflow-hidden"
    >
      {/* Decorative gradient */}
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 h-64 w-64 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-foreground md:text-6xl tracking-tight"
            dangerouslySetInnerHTML={{ __html: t.raw("title") }}
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            className="mx-auto mt-6 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-10">
              <div className="flex items-center space-x-6 group">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-white/5 text-blue-600 dark:text-blue-400 border border-black/5 dark:border-white/10 group-hover:scale-110 transition-transform shadow-lg dark:shadow-none">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                    {t("info.email")}
                  </h4>
                  <p className="text-zinc-600 dark:text-gray-400 font-medium text-lg">
                    hello@johndoe.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-white/5 text-purple-600 dark:text-purple-400 border border-black/5 dark:border-white/10 group-hover:scale-110 transition-transform shadow-lg dark:shadow-none">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                    {t("info.location")}
                  </h4>
                  <p className="text-zinc-600 dark:text-gray-400 font-medium text-lg">
                    Silicon Valley, CA ({t("info.remote")})
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-white/5 text-pink-600 dark:text-pink-400 border border-black/5 dark:border-white/10 group-hover:scale-110 transition-transform shadow-lg dark:shadow-none">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                    {t("info.call")}
                  </h4>
                  <p className="text-zinc-600 dark:text-gray-400 font-medium text-lg">
                    +(123) 456-7890
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive contact card */}
            <div className="relative group p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-gradient-to-br dark:from-white/5 dark:to-transparent overflow-hidden shadow-sm">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_70%)]" />
              <p className="relative z-10 text-zinc-600 dark:text-gray-400 leading-relaxed font-medium">
                {t("quote")}
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              id="contact-form"
              action={handleSubmit}
              className="space-y-8 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden bg-white dark:bg-zinc-900/50 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-2xl dark:shadow-none"
            >
              <div className="absolute top-0 right-0 h-64 w-64 bg-blue-500/10 blur-[100px] -mr-32 -mt-32 pointer-events-none" />

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-3">
                  <label className="text-xs font-black text-zinc-500 dark:text-gray-500 ml-1 uppercase tracking-[0.2em]">
                    {t("labels.name")}
                  </label>
                  <Input
                    name="name"
                    required
                    placeholder={t("placeholders.name")}
                    className="h-14 border-black/10 dark:border-white/5 bg-zinc-50 dark:bg-white/[0.03] text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-gray-700 focus:ring-blue-500/30 rounded-2xl transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-zinc-500 dark:text-gray-500 ml-1 uppercase tracking-[0.2em]">
                    {t("labels.email")}
                  </label>
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder={t("placeholders.email")}
                    className="h-14 border-black/10 dark:border-white/5 bg-zinc-50 dark:bg-white/[0.03] text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-gray-700 focus:ring-blue-500/30 rounded-2xl transition-all"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-zinc-500 dark:text-gray-500 ml-1 uppercase tracking-[0.2em]">
                  {t("labels.subject")}
                </label>
                <Input
                  name="subject"
                  placeholder={t("placeholders.subject")}
                  className="h-14 border-black/10 dark:border-white/5 bg-zinc-50 dark:bg-white/[0.03] text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-gray-700 focus:ring-blue-500/30 rounded-2xl transition-all"
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-zinc-500 dark:text-gray-500 ml-1 uppercase tracking-[0.2em]">
                  {t("labels.message")}
                </label>
                <Textarea
                  name="message"
                  required
                  placeholder={t("placeholders.message")}
                  className="min-h-[180px] border-black/10 dark:border-white/5 bg-zinc-50 dark:bg-white/[0.03] text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-gray-700 focus:ring-blue-500/30 rounded-2xl resize-none transition-all"
                />
              </div>

              {status && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-5 rounded-2xl flex items-center gap-4 ${status.success ? "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"}`}
                >
                  {status.success ? (
                    <CheckCircle2 size={24} />
                  ) : (
                    <AlertCircle size={24} />
                  )}
                  <span className="font-semibold">
                    {status.success ? t("status.success") : status.error}
                  </span>
                </motion.div>
              )}

              <Button
                disabled={isPending}
                className="w-full h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white border-0 font-bold text-lg rounded-2xl shadow-[0_0_25px_rgba(37,99,235,0.25)] hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
              >
                {isPending ? (
                  t("status.pending")
                ) : (
                  <span className="flex items-center justify-center">
                    <Send className="mr-3 h-5 w-5" /> {t("status.send")}
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
