import React, { useState } from "react";
import { CardApi } from "../Interface/card";
import Card from "../subComponent/Card";
import HeroSection from "../subComponent/HeroSection";

interface Props {
  data: CardApi;
}

function HomeComponent(Props: Props) {
  const { data } = Props;

  const [visible, setVisible] = useState(12);
  const showMoreWorks = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  return (
    <div>
      <HeroSection data={data.data.results} />
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
        className="homegrid"
      >
        {data.data.results.slice(0, visible).map((list: any, idx: number) => {
          return <Card key={idx} list={list} />;
        })}
      </div>
      <div className="loadmorebutton">
        <button
          style={{
            display: visible >= data.data.results.length ? "none" : "hidden",
          }}
          className="loadmorebtn"
          onClick={showMoreWorks}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default HomeComponent;
