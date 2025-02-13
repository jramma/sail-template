const domain = import.meta.env.WP_DOMAIN;
const apiUrl = `${domain}/wp-json/wp/v2/`;

interface PageInfo {
  title: string;
  content: string;
}

interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  slug: string;
  featured_media: number;
}

export class WordPressAPI {
  static async getPageInfo(slug: string): Promise<PageInfo> {
    const res = await fetch(`${apiUrl}pages?slug=${slug}`);
    if (!res.ok) {
      throw new Error("Failed to fetch page info");
    }
    const [data] = await res.json();
    const {
      title: { rendered: title },
      content: { rendered: content },
    } = data;
    return { title, content };
  }

  static async getPosts(): Promise<Post[]> {
    const res = await fetch(`${apiUrl}posts`);
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }
    const data = await res.json();
    return data.map((post: any) => ({
      id: post.id,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered,
      content: post.content.rendered,
      date: post.date,
      slug: post.slug,
      featured_media: post.featured_media,
    }));
  }
}