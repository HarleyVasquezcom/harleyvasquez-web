import { getPost, getAllPosts } from "@/lib/mdx";
import { MDXRemote }            from "next-mdx-remote/rsc";
import rehypePrettyCode         from "rehype-pretty-code";
import { MDXComponents }        from "@/components/mdx/MDXComponents";
import { ArrowLeft, Clock }     from "lucide-react";
import Link                     from "next/link";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const locales = ["en", "es", "fr", "de", "pt", "it"];
  return locales.flatMap((locale) =>
    getAllPosts(locale).map((p) => ({ locale, slug: p.slug }))
  );
}

const rehypeOptions = {
  theme: { dark: "github-dark-dimmed", light: "github-light" },
  keepBackground: false,
};

export default async function PostPage({ params }: Props) {
  const { locale, slug } = await params;
  const { meta, content } = await getPost(locale, slug);

  return (
    <article className="section-padding pt-32">
      <div className="max-w-2xl mx-auto">
        <Link href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-sm text-foreground/40 hover:text-foreground mb-10 transition-colors">
          <ArrowLeft size={14} /> Back to blog
        </Link>
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {meta.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-accent/10 text-accent-light">{t}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{meta.title}</h1>
          <div className="flex items-center gap-4 text-sm text-foreground/40">
            <time>{new Date(meta.date).toLocaleDateString(locale, { year:"numeric", month:"long", day:"numeric" })}</time>
            <span className="flex items-center gap-1"><Clock size={12} /> {meta.readingTime}</span>
          </div>
        </header>
        <div className="prose prose-invert prose-green max-w-none">
          <MDXRemote
            source={content}
            components={MDXComponents}
            options={{ mdxOptions: { rehypePlugins: [[rehypePrettyCode, rehypeOptions]] } }}
          />
        </div>
      </div>
    </article>
  );
}
