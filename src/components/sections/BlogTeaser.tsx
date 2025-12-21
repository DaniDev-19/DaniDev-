"use client";

import { motion } from "framer-motion";
import { Link } from "@/navigation";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  mainImage: any;
  publishedDate: string;
}

export function BlogTeaser({ posts = [] }: { posts: Post[] }) {
  const t = useTranslations("Blog");
  if (posts.length === 0) return null;

  return (
    <section className="bg-background py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2
              className="text-4xl font-bold text-foreground md:text-5xl"
              dangerouslySetInnerHTML={{ __html: t.raw("title") }}
            />
            <p className="mt-4 text-gray-500 max-w-xl">{t("description")}</p>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold group"
          >
            {t("readMore")}{" "}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card group flex flex-col rounded-3xl overflow-hidden hover:bg-white/5 transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={
                    post.mainImage?.url ||
                    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                  }
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-4">
                  <Calendar size={14} />
                  {new Date(post.publishedDate).toLocaleDateString()}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-6">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-auto flex items-center gap-2 text-sm font-bold text-white group/link"
                >
                  {t("readMore")}{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover/link:translate-x-1 transition-transform text-blue-400"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
