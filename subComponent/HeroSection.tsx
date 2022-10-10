import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import Image from "next/image";

interface Props {
  data: any;
}

export default function HeroSection(Props: Props) {
  const { data } = Props;
  console.log("data", data);
  return (
    <div>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        id="Topswiper"
      >
        {data.slice(0, 5).map((x: any, idx: number) => {
          return (
            <SwiperSlide key={idx}>
              <div
                style={{
                  backgroundColor: "#000",
                  background: "linear-gradient(to top, #3204fdba, #9907facc)",
                }}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/original` + x.backdrop_path}
                  alt="Hero Image"
                  width={1920}
                  height={700}
                />
                <div style={{ backgroundColor: "#000", padding: "10px 20px" }}>
                  {x && x.original_title && (
                    <h1
                      style={{
                        fontWeight: 700,
                        fontSize: "21px",
                        color: "#fff",
                      }}
                    >
                      {x.original_title}
                    </h1>
                  )}
                  {x && x.overview && (
                    <p
                      style={{
                        fontWeight: "normal",
                        fontSize: "18px",
                        color: "#fff",
                      }}
                    >
                      {x.overview}
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
