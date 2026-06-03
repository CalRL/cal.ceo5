import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { api } from "../../axios.js";

type BlogPost = {
    title: string;
    slug: string;
    published: boolean;
    published_at: string;
    excerpt?: string;
    filename: string;
    content: string;
};

export default function BlogPostPage() {
    const { slug } = useParams();

    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPost() {
            if (!slug) return;

            try {
                const res = await api.get(`/blog/${slug}`);
                setPost(res.data);
            } catch (error) {
                console.error(error);
                setPost(null);
            } finally {
                setLoading(false);
            }
        }

        loadPost();
    }, [slug]);

    if (loading) {
        return <p>Loading post...</p>;
    }

    if (!post) {
        return (
            <main>
                <p>Post not found.</p>
                <Link to="/blog">Back to blog</Link>
            </main>
        );
    }

    return (
        <main className="min-h-screen text-white flex justify-center px-4 py-12">
            <article className="w-full max-w-3xl text-left">
                <Link to="/blog" className="text-white/70 hover:text-white">
                    ← Back to blog
                </Link>

                <h1 className="text-4xl font-bold mt-8 mb-2">
                    {post.title}
                </h1>

                <p className="text-sm text-white/70 mb-8">
                    {new Date(post.published_at).toLocaleDateString()}
                </p>

                <div className="markdown text-justify">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {post.content}
                    </ReactMarkdown>
                </div>
            </article>
        </main>
    );
}