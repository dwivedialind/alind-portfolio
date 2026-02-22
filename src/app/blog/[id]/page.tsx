import { getAllPostIds, getPostData } from '../../../lib/posts';
import '../blog.css';
import { Metadata } from 'next';

// Next.js static generation requirement
export const dynamicParams = false; // Add this to 100% enforce static Generation

export async function generateStaticParams() {
    const ids = getAllPostIds();
    // Return exactly the shape Next.js wants: [{ id: 'slug1' }, { id: 'slug2' }]
    return ids.map((post) => ({
        id: post.params.id,
    }));
}

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const resolvedParams = await params;
    const postData = await getPostData(resolvedParams.id);

    return {
        title: `${postData.title} | Alind Dwivedi`,
        description: postData.excerpt || 'Technical blog post by Alind Dwivedi',
        alternates: {
            canonical: postData.canonicalUrl || `https://alinddwivedi.github.io/blog/${resolvedParams.id}`,
        },
    };
}

export default async function Post({ params }: Props) {
    const resolvedParams = await params;
    const postData = await getPostData(resolvedParams.id);

    return (
        <article className="article-container">
            <header className="article-header">
                <h1 className="article-title">{postData.title}</h1>
                <div className="article-meta">
                    <time dateTime={postData.date}>
                        {new Date(postData.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </time>
                    {postData.canonicalUrl && (
                        <span>• Originally published elsewhere</span>
                    )}
                </div>
            </header>
            <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
            />
        </article>
    );
}
