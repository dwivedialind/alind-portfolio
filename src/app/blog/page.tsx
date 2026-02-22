import { getSortedPostsData } from '../../lib/posts';
import './blog.css';

export default function BlogIndex() {
    const allPostsData = getSortedPostsData();

    return (
        <div className="blog-index-container">
            <header className="blog-header">
                <h1 className="page-title">Blog</h1>
                <p className="page-subtitle">Thoughts on engineering, AI, and building products.</p>
            </header>

            <div className="posts-list">
                {allPostsData.map(({ id, date, title, excerpt }) => (
                    <a href={`/blog/${id}`} className="post-list-item" key={id}>
                        <div className="post-meta">
                            <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</time>
                        </div>
                        <h2 className="item-title">{title}</h2>
                        {excerpt && <p className="item-excerpt">{excerpt}</p>}
                        <div className="read-more">Read article &rarr;</div>
                    </a>
                ))}
            </div>
        </div>
    );
}
