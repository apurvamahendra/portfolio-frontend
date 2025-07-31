import React from "react";
import { client } from "@/sanity/client";
import { CardType } from "@/components/ui/focus-cards";
import { MediaCarousel } from "@/components/MediaCarousel";

const POST_BY_ID_QUERY = `*[
  _type == "post" && _id == $id
][0] {
  _id,
  title,
  subtitle,
  link,
  thumbnail,
  media
}`;

const Page = async ({ params }: { params: { cardId: string } }) => {
  const { cardId } = params;

  // Fetch the specific post using the cardId
  const post = await client.fetch<CardType>(POST_BY_ID_QUERY, { id: cardId });

  if (!post) {
    return (
      <div className="h-screen ">
        <h1 className="text-center text-5xl text-white mt-20">
          Post not found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-serif text-center mb-4">
            {post.title}
          </h1>
        </div>

        {/* Media Carousel */}
        <MediaCarousel media={post.media} title={post.title} />
      </div>
    </div>
  );
};

export default Page;
