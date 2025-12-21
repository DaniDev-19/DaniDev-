import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { getTranslations } from "next-intl/server";

// Static blog posts data
const staticPosts = [
  {
    id: "1",
    title: "Building Modern Web Applications with Next.js 15",
    excerpt:
      "Explore the latest features in Next.js 15 and how they can improve your development workflow and application performance.",
    slug: "nextjs-15-features",
    publishedDate: "2024-12-15",
    mainImage: {
      url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    },
    tags: [{ tag: "Next.js" }, { tag: "React" }, { tag: "Web Dev" }],
  },
  {
    id: "2",
    title: "The Future of Web Development",
    excerpt:
      "Discover emerging trends and technologies that are shaping the future of web development in 2025 and beyond.",
    slug: "future-of-web-dev",
    publishedDate: "2024-12-10",
    mainImage: {
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop",
    },
    tags: [{ tag: "Web Dev" }, { tag: "Trends" }, { tag: "AI" }],
  },
  {
    id: "3",
    title: "Mastering TypeScript for React Development",
    excerpt:
      "Learn advanced TypeScript patterns and best practices for building type-safe React applications.",
    slug: "typescript-react",
    publishedDate: "2024-12-05",
    mainImage: {
      url: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2070&auto=format&fit=crop",
    },
    tags: [{ tag: "TypeScript" }, { tag: "React" }],
  },
];

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Blog");

  return (
    <div className="container mx-auto py-24 px-4 md:px-6 bg-background transition-colors duration-300">
      <header className="mb-16">
        <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tighter mb-6">
          Technical <span className="text-gradient">Blog</span>
        </h1>
        <p className="text-xl text-zinc-600 dark:text-gray-400 max-w-2xl leading-relaxed">
          Insightful articles about modern web development, architecture, and
          design patterns.
        </p>
      </header>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {staticPosts.map((post) => (
          <article
            key={post.id}
            className="group flex flex-col rounded-[2.5rem] overflow-hidden bg-white dark:bg-zinc-950/40 border border-black/5 dark:border-white/5 hover:border-blue-500/30 transition-all hover:shadow-2xl dark:hover:shadow-none shadow-sm"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="relative aspect-[16/10] overflow-hidden"
            >
              <Image
                src={post.mainImage.url}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </Link>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-zinc-500 dark:text-gray-500 mb-6 font-black">
                <span className="flex items-center gap-2 bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full border border-black/5 dark:border-white/5">
                  <Calendar
                    size={14}
                    className="text-blue-600 dark:text-blue-400"
                  />
                  {new Date(post.publishedDate).toLocaleDateString()}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-zinc-600 dark:text-gray-400 line-clamp-3 mb-8 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex gap-2">
                  {post.tags?.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-md border border-blue-500/10 font-bold uppercase"
                    >
                      #{tag.tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-white/5 flex items-center justify-center text-zinc-600 dark:text-white hover:bg-blue-600 hover:text-white hover:scale-110 transition-all border border-black/5 dark:border-white/10"
                >
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
