import Image from "next/image"; // Image コンポーネントのインポート
import { allPosts } from "@/.contentlayer/generated";

export default function BlogPage() {
  const posts = allPosts;

  return (
    <div className="container mx-auto max-w-4xl py-6 lg:py-10">
      <div>
        <div className="space-y-4">
          <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tight">
            Blog🚀
          </h1>
          <p className="text-muted-foreground text-xl">
            ContentLayerとMDXで書いています
          </p>
        </div>
      </div>
      <hr className="my-8" />
      {posts.map((post) => (
        <article key={post._id} className="my-4">
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              width={804}
              height={452}
              className="rounded-md border bg-muted"
            />
          )}
          <h2 className="font-extrabold text-2xl">{post.title}</h2>
          {post.description && (
            <p className="text-muted-foreground">{post.description}</p>
          )}
          {post.date && (
            <p className="text-sm text-muted-foreground">{post.date}</p>
          )}
        </article>
      ))}
    </div>
  );
}
