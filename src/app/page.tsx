import { client } from "@/sanity/client";
import { CardType, FocusCards } from "@/components/ui/focus-cards";

const POSTS_QUERY = `*[
  _type == "post"
] | order(orderRank) {
  _id,
  title,
  link,
  thumbnail,
  media
}
`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<CardType[]>(POSTS_QUERY, {}, options);
  console.log("Posts fetched:", posts);

  return (
    <div className="bg-black w-screen h-screen flex flex-col items-center text-white">
      <h1 className="text-6xl mt-20 font-serif">My Previous Work</h1>
      <div className="mt-20  w-full h-fit">
        <FocusCards cards={posts} />
      </div>
    </div>
  );
}
