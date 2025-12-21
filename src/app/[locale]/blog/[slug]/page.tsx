import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

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
    content: `
            <h2>Introduction to Next.js 15</h2>
            <p>Next.js 15 brings a host of new features and improvements that make building modern web applications easier and more efficient than ever before.</p>
            
            <h2>Key Features</h2>
            <ul>
                <li>Improved performance with Turbopack</li>
                <li>Enhanced Server Components</li>
                <li>Better TypeScript support</li>
                <li>Optimized image handling</li>
            </ul>
            
            <h2>Getting Started</h2>
            <p>To start using Next.js 15, simply run: <code>npx create-next-app@latest</code></p>
        `,
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
    content: `
            <h2>The Evolution of Web Development</h2>
            <p>Web development is constantly evolving, with new technologies and approaches emerging every year.</p>
            
            <h2>Emerging Trends</h2>
            <ul>
                <li>AI-powered development tools</li>
                <li>Edge computing and serverless architecture</li>
                <li>WebAssembly for high-performance applications</li>
                <li>Progressive Web Apps (PWAs)</li>
            </ul>
        `,
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
    content: `
            <h2>Why TypeScript with React?</h2>
            <p>TypeScript provides type safety and better developer experience when building React applications.</p>
            
            <h2>Best Practices</h2>
            <ul>
                <li>Use proper type definitions for props</li>
                <li>Leverage generics for reusable components</li>
                <li>Implement strict mode for better type checking</li>
            </ul>
        `,
  },
];

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  const post = staticPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-background pt-24 pb-32 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-blue-600 dark:hover:text-white mb-12 group transition-colors font-bold uppercase tracking-widest text-xs"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to blog
        </Link>

        <header className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-500/5 w-fit px-4 py-2 rounded-full border border-blue-500/10">
            <Calendar size={16} />
            {new Date(post.publishedDate).toLocaleDateString()}
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tighter leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-zinc-600 dark:text-gray-400 leading-relaxed italic border-l-4 border-blue-600 pl-6">
            {post.excerpt}
          </p>
        </header>

        <div className="relative max-w-5xl mx-auto aspect-video rounded-[3rem] overflow-hidden mb-20 shadow-2xl dark:shadow-blue-500/10 shadow-black/5">
          <Image
            src={post.mainImage.url}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-3xl mx-auto prose dark:prose-invert prose-blue prose-lg">
          <div
            className="text-zinc-800 dark:text-gray-300 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        <footer className="max-w-3xl mx-auto mt-20 pt-10 border-t border-black/5 dark:border-white/5">
          <div className="flex flex-wrap gap-3">
            {post.tags?.map((tag, i) => (
              <span
                key={i}
                className="bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-gray-400 px-4 py-2 rounded-xl text-sm border border-black/5 dark:border-white/5 font-bold uppercase tracking-wider"
              >
                #{tag.tag}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </article>
  );
}
