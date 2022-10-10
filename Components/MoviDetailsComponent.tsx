import React from "react";
import Image from "next/image";
import { MovieApi } from "../Interface/movieDeatils";

interface Props {
  data: MovieApi;
}

function MoviDetailsComponent(Props: Props) {
  const { data } = Props;
  console.log("details", data);
  return (
    <div className="container-fluid">
      <div
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${data.data.backdrop_path}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "470px",
          backgroundPosition: "center",
          padding: "0px",
          margin: "0px",
          borderBottomRightRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
      ></div>
      <div
        className="container"
        style={{ marginBottom: "100px", marginTop: "-100px" }}
      >
        <div className="movie-details" style={{ marginBottom: "100px" }}>
          <div
            className="leftmovie-details"
            style={{
              justifyContent: "center",
              margin: "auto",
              textAlign: "center",
            }}
          >
            {data.data && data.data.poster_path && (
              <Image
                src={
                  `https://image.tmdb.org/t/p/original` + data.data.poster_path
                }
                alt="Picture of the author"
                width={200}
                height={200}
                className="posterImage"
              />
            )}
            {data.data && data.data.title && (
              <h1
                style={{ color: "#fff", fontWeight: 600, fontSize: "24px" }}
                className="titleposter"
              >
                {data.data.title}
              </h1>
            )}
            {data.data && data.data.tagline && (
              <h2
                style={{
                  color: "rgb(200 199 199 / 64%)",
                  fontWeight: 400,
                  fontSize: "18px",
                }}
                className="tagposter"
              >
                {data.data.tagline}
              </h2>
            )}
            {data.data && data.data.status && (
              <h6
                style={{
                  color: "rgb(200 199 199 / 64%)",
                  fontWeight: 400,
                  fontSize: "16px",
                }}
                className="statusposter"
              >
                <span style={{ color: "#ffb3ef", fontWeight: 600 }}>
                  Status
                </span>{" "}
                : {data.data.status}
              </h6>
            )}
          </div>
          <div
            className="rightmoviedetails"
            style={{
              padding: "25px 0px",
              minHeight: "100px",
              backgroundColor: "rgb(0 0 0 / 23%)",
              margin: "20px auto",
              borderRadius: "10px",
            }}
          >
            {data.data && data.data.overview && (
              <p
                style={{
                  color: "#fff",
                  fontWeight: 400,
                  fontSize: "16px",
                  textAlign: "center",
                  margin: "auto",
                }}
                className="overviewposter"
              >
                {data.data.overview}
              </p>
            )}
          </div>
          <div
            style={{
              padding: "25px 0px",
              minHeight: "100px",
              backgroundColor: "rgb(0 0 0 / 23%)",
              margin: "20px auto",
              borderRadius: "10px",
            }}
          >
            <div className="grid-poster" style={{ textAlign: "center" }}>
              <div
                className="poster-grid-details"
                style={{
                  display: "flex",
                  textAlign: "center",
                  margin: "15px auto",
                  justifyContent: "center",
                }}
              >
                <div
                  className="poster-caption"
                  style={{
                    borderRight: "2px solid #fff",
                    paddingRight: "10px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#fff",
                      fontWeight: 500,
                      textAlign: "right",
                    }}
                  >
                    Genres:
                  </p>
                </div>

                {data.data && data.data.genres && (
                  <div
                    className="postercaption-answer"
                    style={{ paddingLeft: "10px" }}
                  >
                    {data.data.genres.map((list: any, idx: number) => {
                      return (
                        <p
                          key={idx}
                          style={{
                            fontSize: "16px",
                            color: "#fff",
                            fontWeight: 500,
                            textAlign: "left",
                          }}
                        >
                          {list.name}
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="grid-poster" style={{ textAlign: "center" }}>
              <div
                className="poster-grid-details"
                style={{
                  display: "flex",
                  textAlign: "center",
                  margin: "15px auto",
                  justifyContent: "center",
                }}
              >
                <div
                  className="poster-caption"
                  style={{
                    borderRight: "2px solid #fff",
                    paddingRight: "10px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#fff",
                      fontWeight: 500,
                      textAlign: "right",
                    }}
                  >
                    Total Budget:
                  </p>
                </div>

                {data.data && data.data.budget && (
                  <div
                    className="postercaption-answer"
                    style={{ paddingLeft: "10px" }}
                  >
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#fff",
                        fontWeight: 500,
                        textAlign: "left",
                      }}
                    >
                      ${data.data.budget}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="grid-poster" style={{ textAlign: "center" }}>
              <div
                className="poster-grid-details"
                style={{
                  display: "flex",
                  textAlign: "center",
                  margin: "15px auto",
                  justifyContent: "center",
                }}
              >
                <div
                  className="poster-caption"
                  style={{
                    borderRight: "2px solid #fff",
                    paddingRight: "10px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#fff",
                      fontWeight: 500,
                      textAlign: "right",
                    }}
                  >
                    Website:
                  </p>
                </div>

                {data.data && data.data.homepage && (
                  <div
                    className="postercaption-answer"
                    style={{ paddingLeft: "10px" }}
                  >
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#fff",
                        fontWeight: 500,
                        textAlign: "left",
                      }}
                    >
                      {data.data.homepage}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="grid-poster" style={{ textAlign: "center" }}>
              <div
                className="poster-grid-details"
                style={{
                  display: "flex",
                  textAlign: "center",
                  margin: "15px auto",
                  justifyContent: "center",
                }}
              >
                <div
                  className="poster-caption"
                  style={{
                    borderRight: "2px solid #fff",
                    paddingRight: "10px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#fff",
                      fontWeight: 500,
                      textAlign: "right",
                    }}
                  >
                    Release Date:
                  </p>
                </div>

                {data.data && data.data.release_date && (
                  <div
                    className="postercaption-answer"
                    style={{ paddingLeft: "10px" }}
                  >
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#fff",
                        fontWeight: 500,
                        textAlign: "left",
                      }}
                    >
                      {data.data.release_date}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="grid-poster" style={{ textAlign: "center" }}>
              <div
                className="poster-grid-details"
                style={{
                  display: "flex",
                  textAlign: "center",
                  margin: "15px auto",
                  justifyContent: "center",
                }}
              >
                <div
                  className="poster-caption"
                  style={{
                    borderRight: "2px solid #fff",
                    paddingRight: "10px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#fff",
                      fontWeight: 500,
                      textAlign: "right",
                    }}
                  >
                    Revenue:
                  </p>
                </div>

                {data.data && data.data.revenue && (
                  <div
                    className="postercaption-answer"
                    style={{ paddingLeft: "10px" }}
                  >
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#fff",
                        fontWeight: 500,
                        textAlign: "left",
                      }}
                    >
                      ${data.data.revenue}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="grid-poster" style={{ textAlign: "center" }}>
              <div
                className="poster-grid-details"
                style={{
                  display: "flex",
                  textAlign: "center",
                  margin: "15px auto",
                  justifyContent: "center",
                }}
              >
                <div
                  className="poster-caption"
                  style={{
                    borderRight: "2px solid #fff",
                    paddingRight: "10px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#fff",
                      fontWeight: 500,
                      textAlign: "right",
                    }}
                  >
                    Run Time:
                  </p>
                </div>

                {data.data && data.data.runtime && (
                  <div
                    className="postercaption-answer"
                    style={{ paddingLeft: "10px" }}
                  >
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#fff",
                        fontWeight: 500,
                        textAlign: "left",
                      }}
                    >
                      {data.data.runtime} days
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="grid-poster" style={{ textAlign: "center" }}>
              <div
                className="poster-grid-details"
                style={{
                  display: "flex",
                  textAlign: "center",
                  margin: "15px auto",
                  justifyContent: "center",
                }}
              >
                <div
                  className="poster-caption"
                  style={{
                    borderRight: "2px solid #fff",
                    paddingRight: "10px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#fff",
                      fontWeight: 500,
                      textAlign: "right",
                    }}
                  >
                    Rating:
                  </p>
                </div>

                {data.data && data.data.vote_average && (
                  <div
                    className="postercaption-answer"
                    style={{ paddingLeft: "10px" }}
                  >
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#fff",
                        fontWeight: 500,
                        textAlign: "left",
                      }}
                    >
                      {data.data.vote_average}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="grid-poster" style={{ textAlign: "center" }}>
              <div
                className="poster-grid-details"
                style={{
                  display: "flex",
                  textAlign: "center",
                  margin: "15px auto",
                  justifyContent: "center",
                }}
              >
                <div
                  className="poster-caption"
                  style={{
                    borderRight: "2px solid #fff",
                    paddingRight: "10px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#fff",
                      fontWeight: 500,
                      textAlign: "right",
                    }}
                  >
                    Language:
                  </p>
                </div>

                {data.data && data.data.spoken_languages && (
                  <div
                    className="postercaption-answer"
                    style={{ paddingLeft: "10px" }}
                  >
                    {data.data.spoken_languages.map(
                      (list: any, idx: number) => {
                        return (
                          <p
                            key={idx}
                            style={{
                              fontSize: "16px",
                              color: "#fff",
                              fontWeight: 500,
                              textAlign: "left",
                            }}
                          >
                            {list.english_name} | {list.name}
                          </p>
                        );
                      }
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="grid-poster" style={{ textAlign: "center" }}>
              <div
                className="poster-grid-details"
                style={{
                  display: "flex",
                  textAlign: "center",
                  margin: "15px auto",
                  justifyContent: "center",
                }}
              >
                <div
                  className="poster-caption"
                  style={{
                    borderRight: "2px solid #fff",
                    paddingRight: "10px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#fff",
                      fontWeight: 500,
                      textAlign: "right",
                    }}
                  >
                    Production Countries:
                  </p>
                </div>

                {data.data && data.data.production_countries && (
                  <div
                    className="postercaption-answer"
                    style={{ paddingLeft: "10px" }}
                  >
                    {data.data.production_countries.map(
                      (list: any, idx: number) => {
                        return (
                          <p
                            key={idx}
                            style={{
                              fontSize: "16px",
                              color: "#fff",
                              fontWeight: 500,
                              textAlign: "left",
                            }}
                          >
                            {list.name}
                          </p>
                        );
                      }
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="grid-poster" style={{ textAlign: "center" }}>
              <div
                className="poster-grid-details"
                style={{
                  display: "flex",
                  textAlign: "center",
                  margin: "15px auto",
                  justifyContent: "center",
                }}
              >
                <div
                  className="poster-caption"
                  style={{
                    borderRight: "2px solid #fff",
                    paddingRight: "10px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#fff",
                      fontWeight: 500,
                      textAlign: "right",
                    }}
                  >
                    Production Companies:
                  </p>
                </div>

                {data.data && data.data.production_companies && (
                  <div
                    className="postercaption-answer"
                    style={{ paddingLeft: "10px" }}
                  >
                    {data.data.production_companies.map(
                      (list: any, idx: number) => {
                        return (
                          <>
                            {list.logo_path && (
                              <Image
                                key={idx}
                                src={`https://image.tmdb.org/t/p/original${list.logo_path}`}
                                alt="production"
                                width={50}
                                height={25}
                              />
                            )}

                            <p
                              key={idx}
                              style={{
                                fontSize: "16px",
                                color: "#fff",
                                fontWeight: 500,
                                textAlign: "left",
                              }}
                            >
                              {list.name}
                            </p>
                          </>
                        );
                      }
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviDetailsComponent;
