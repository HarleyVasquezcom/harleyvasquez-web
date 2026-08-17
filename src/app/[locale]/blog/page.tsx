import { getAllPosts }      from "@/lib/mdx";
import { getTranslations } from "next-intl/server";
import { BlogList }        from "@/components/sections/BlogList";

type Props = { params: Promise<{ locale: string }> };

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const posts = getAllPosts(locale);
  return <BlogList posts={posts} />;
}
