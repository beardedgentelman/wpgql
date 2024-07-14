import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import Likes from "./likes";

export default function PostPreview({
  postId,
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  likes
}) {
  return (
      <div>
          <div className="mb-5">
              {coverImage && (
                  <CoverImage title={title} coverImage={coverImage} slug={slug}/>
              )}
          </div>
          <h3 className="text-3xl mb-3 leading-snug">
              <Link
                  href={`/posts/${slug}`}
                  className="hover:underline"
                  dangerouslySetInnerHTML={{__html: title}}
              ></Link>
          </h3>
          <div className="flex items-center gap-4 text-lg mb-4">
              <Date dateString={date}/>
              <Likes initialLikes={likes} postId={postId}/>
          </div>
          <div
              className="text-lg leading-relaxed mb-4"
              dangerouslySetInnerHTML={{__html: excerpt}}
          />
          <Avatar author={author}/>
      </div>
  );
}
