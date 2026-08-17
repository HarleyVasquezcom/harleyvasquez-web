import { PostMeta } from "@/lib/mdx";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

type Props = {
  posts: PostMeta[];
};

export function BlogList({ posts }: Props) {
  if (posts.length === 0) {
    return (
      <section id="blog" className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Blog</h2>
          <p className="text-foreground/60">No posts yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="section-padding">
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Blog</h2>
        
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.lang}/blog/${post.slug}`}
              className="block p-6 rounded-xl glass hover:border-accent/30 transition-all group"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded bg-accent/10 text-accent-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              
              <p className="text-foreground/60 mb-4 line-clamp-2">{post.description}</p>
              
              <div className="flex items-center gap-4 text-sm text-foreground/40">
                <time>{new Date(post.date).toLocaleDateString(post.lang, { year:"numeric", month:"long", day:"numeric" })}</time>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {post.readingTime}
                </span>
              </div>
              
              <div className="flex items-center gap-2 mt-4 text-accent">
                <span className="text-sm">Read more</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
