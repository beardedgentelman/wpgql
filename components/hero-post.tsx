import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import Likes from "./likes";

export default function HeroPost({
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
    <section>
      <div className="mb-8 md:mb-16">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link
              href={`/posts/${slug}`}
              className="hover:underline"
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h3>
          <div className="flex items-center gap-4 mb-4 md:mb-0 text-lg">
            <Date dateString={date}/>
            <Likes initialLikes={likes} postId={postId}/>
          </div>
        </div>
        <div>
          <div
              className="text-lg leading-relaxed mb-4"
              dangerouslySetInnerHTML={{__html: excerpt }}
          />
          <Avatar author={author} />
        </div>
      </div>
    </section>
  );
}
