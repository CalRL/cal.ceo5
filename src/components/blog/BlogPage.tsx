import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type BlogPostMeta = {
    title: string;
    slug: string;
    published: boolean;
    published_at: string;
    excerpt?: string;
    filename: string;
};

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogPostMeta[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPosts() {
            try {
                const res = await fetch("http://localhost:4000/api/blog");

                if (!res.ok) {
                    throw new Error("Failed to load posts");
                }

                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        loadPosts();
    }, []);

    if (loading) {
        return <p>Loading posts...</p>;
    }

    return (
        <main className="min-h-screen text-white flex justify-center px-4 py-12">
            <section className="w-full max-w-3xl text-left">
                <h1 className="text-4xl font-bold mb-8">Blog</h1>

                {posts.length === 0 && <p>No posts yet.</p>}

                <div className="space-y-6">
                    {posts.map((post) => (
                        <article key={post.slug}>
                            <h2 className="text-lg font-normal">
                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="hover:underline"
                                >
                                    {post.title}
                                </Link>
                            </h2>

                            <p className="text-sm text-white/70 mt-1">
                                {new Date(post.published_at).toLocaleDateString()}
                            </p>

                            {post.excerpt && (
                                <p className="mt-3 text-white/85">
                                    {post.excerpt}
                                </p>
                            )}
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}