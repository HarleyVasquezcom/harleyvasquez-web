import fs          from "fs";
import path        from "path";
import matter      from "gray-matter";
import readingTime from "reading-time";

export type PostMeta = {
  slug:        string;
  title:       string;
  description: string;
  date:        string;
  tags:        string[];
  lang:        string;
  readingTime: string;
  draft?:      boolean;
};

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

export function getAllPosts(locale: string): PostMeta[] {
  const dir = path.join(CONTENT_DIR, locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug:        filename.replace(".mdx", ""),
        title:       data.title       ?? "Untitled",
        description: data.description ?? "",
        date:        data.date        ?? "",
        tags:        data.tags        ?? [],
        lang:        locale,
        readingTime: readingTime(content).text,
        draft:       data.draft       ?? false,
      };
    })
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPost(locale: string, slug: string) {
  const filepath = path.join(CONTENT_DIR, locale, `${slug}.mdx`);
  const raw      = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);
  return {
    meta: {
      slug,
      title:       data.title,
      description: data.description,
      date:        data.date,
      tags:        data.tags ?? [],
      lang:        locale,
      readingTime: readingTime(content).text,
    } as PostMeta,
    content,
  };
}
