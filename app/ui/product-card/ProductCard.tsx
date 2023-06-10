import React, { FC } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";

interface ICard {
  card: { image: string; name: string };
}

const ProductCard: FC<ICard> = ({ card }) => {
  return (
    <div>
      <img src={card.image} alt={card.name} />
      <div className="flex justify-between mt-7">
        <div>
          <h3 className="font-medium text-[#191919] text-3xl">{card.name}</h3>
          <span className="text-[#7F7F7F] font-medium text-2xl">
            Explore Now!
          </span>
        </div>
        <Link href="/catalogue">
          <HiArrowNarrowRight color="#7F7F7F" size={32} />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
