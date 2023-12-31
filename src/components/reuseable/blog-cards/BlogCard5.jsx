import dayjs from 'dayjs';
import Link from 'next/link';
import NextLink from '../links/NextLink'; // ======================================================

// ======================================================
const BlogCard5 = props => {
  const {
    image,
    title,
    author,
    category,
    createdAt,
    comments
  } = props;
  return <figure className="overlay caption caption-overlay rounded mb-0">
      <Link href="#" passHref legacyBehavior>
        <a>
          <img src={image} alt="" />
          <span className="bg" />
        </a>
      </Link>

      <figcaption>
        <span className="badge badge-lg bg-white text-uppercase mb-3">{category}</span>
        <h2 className="post-title h3 mt-1 mb-3">
          <NextLink title={title} href="#" />
        </h2>

        <ul className="post-meta text-white mb-0">
          <li className="post-date">
            <i className="uil uil-calendar-alt" />
            <span>{dayjs(createdAt).format('DD MMM YYYY')}</span>
          </li>

          <li className="post-author">
            <Link href="#" passHref legacyBehavior>
              <a>
                <i className="uil uil-user" />
                <span>By {author}</span>
              </a>
            </Link>
          </li>

          <li className="post-comments">
            <Link href="#" passHref legacyBehavior>
              <a>
                <i className="uil uil-comment" />
                {comments} <span>Comments</span>
              </a>
            </Link>
          </li>
        </ul>
      </figcaption>
    </figure>;
};

export default BlogCard5;