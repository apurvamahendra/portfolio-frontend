"use client";
import { urlFor } from "@/utils/sanityImage";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

// Define the type once and use it everywhere
export type CardType = {
  _id: string;
  title: string;
  subtitle: string;
  thumbnail: {
    asset: {
      _ref: string;
    };
  };
  media: {
    asset: {
      _ref: string;
    };
  }[];
  link: string | null;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardType;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <a
      href={card.link || `/carousel/${card._id}`}
      target={card.link ? "_blank" : undefined}
      rel="noopener noreferrer"
    >
      <span className=" flex flex-col items-start gap-2 my-2 lg:hidden ">
        <p className="text-xl">{card.title}</p>
        <p className="text-sm">{card.subtitle}</p>
      </span>
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-70 w-full transition-all duration-300 ease-out text-black ",
          hovered !== null && hovered !== index && "scale-[0.98]"
        )}
      >
        <img
          src={urlFor(card.thumbnail).url()}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/70 flex flex-col justify-end items-start py-5 px-4 transition-opacity duration-300 ",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 select-none">
            {card.title}
          </div>
          <div className="text-sm md:text-base text-neutral-300 mt-2">
            {card.subtitle}
          </div>
        </div>
      </div>
    </a>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex justify-center px-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10  md:px-8 w-full ">
        {cards.map((card, index) => (
          <Card
            key={card._id}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </div>
  );
}
