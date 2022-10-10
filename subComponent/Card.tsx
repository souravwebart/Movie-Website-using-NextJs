import Image from "next/image";
import Link from "next/link";
import React from "react";

import { BsUnlockFill } from "react-icons/bs";

interface Props {
  list: any;
}

function Card(Props: Props) {
  const { list } = Props;
  console.log("list", list);
  return (
    <div className="card">
      <Link href={`/Movie/${list.id}`}>
        <a>
          <div className="img1">
            <Image
              src={`https://image.tmdb.org/t/p/original` + list.poster_path}
              alt="image1"
              width={500}
              height={700}
            />
          </div>
          {list && list.original_title && (
            <div className="title">
              {list && list.original_title && list.original_title}
            </div>
          )}
          {list && list.overview && (
            <div className="text">{list && list.overview && list.overview}</div>
          )}

          <div className="catagory">
            <BsUnlockFill size={15} /> Release date
          </div>
          {list && list.release_date && (
            <div className="views">
              {list && list.release_date && list.release_date}{" "}
            </div>
          )}
        </a>
      </Link>
    </div>
  );
}

export default Card;
