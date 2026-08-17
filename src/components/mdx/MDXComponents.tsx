import type { MDXComponents as MDXComponentsType } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

export const MDXComponents: MDXComponentsType = {
  h1: ({ children }) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
  h2: ({ children }) => <h2 className="text-2xl font-bold mb-3 mt-8">{children}</h2>,
  h3: ({ children }) => <h3 className="text-xl font-bold mb-2 mt-6">{children}</h3>,
  p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
  a: ({ href, children }) => (
    <Link href={href || ""} className="text-accent hover:text-accent-light underline">
      {children}
    </Link>
  ),
  ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
  li: ({ children }) => <li>{children}</li>,
  code: ({ children }) => (
    <code className="bg-surface-2 px-1.5 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-surface-2 p-4 rounded-lg overflow-x-auto mb-4">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-accent pl-4 italic text-foreground/70 mb-4">
      {children}
    </blockquote>
  ),
  img: ({ src, alt }) => (
    <Image
      src={src || ""}
      alt={alt || ""}
      width={800}
      height={400}
      className="rounded-lg mb-4"
    />
  ),
};

export function useMDXComponents(components: MDXComponentsType): MDXComponentsType {
  return {
    ...MDXComponents,
    ...components,
  };
}
