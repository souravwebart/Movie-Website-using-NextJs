import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { CardApi } from "../Interface/card";

interface Props {
  data: CardApi;
}

function SearchComponent(Props: Props) {
  const { data } = Props;
  const [query, setQuery] = useState("Search Your favourite Movie");

  const { results } = data.data;

  const getFilteredItems = (query: string, value: any[]) => {
    if (!query) {
      return value;
    }
    return value.filter((x) =>
      x.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filteredItems = getFilteredItems(query, results);

  const HandleChange = (e: any) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <div className="row">
        <div className="col-12">
          <div className="input-group">
            <input
              className="form-control border-secondary py-2"
              type="search"
              value={query}
              onChange={HandleChange}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                style={{
                  padding: "10px",
                  borderTopLeftRadius: "0px",
                  borderBottomLeftRadius: "0px",
                }}
              >
                <BsSearch size={20} />
              </button>
            </div>
          </div>
          {query != "" ? (
            <div className="search-result" style={{ margin: "50px 0px" }}>
              {filteredItems &&
                filteredItems.map((movie, idx) => {
                  return (
                    <Link href={`/Movie/${movie.id}`} key={idx}>
                      <a style={{ textDecoration: "none" }}>
                        <div
                          className="search-result-box"
                          style={{
                            display: "flex",
                            backgroundColor: "rgb(113 81 120 / 42%)",
                            padding: "10px",
                            borderRadius: "10px",
                            margin: "10px 0px",
                          }}
                        >
                          <div
                            className="search-movie-poster"
                            style={{
                              minWidth: "150px",
                              marginTop: "10px",
                              marginLeft: "auto",
                              marginRight: "auto",
                              justifyContent: "center",
                              textAlign: "center",
                            }}
                          >
                            <Image
                              src={
                                `https://image.tmdb.org/t/p/original` +
                                movie.poster_path
                              }
                              alt="movie poster"
                              width={100}
                              height={120}
                            />
                          </div>
                          <div className="search-movie-details">
                            {movie && movie.title && (
                              <h1
                                style={{
                                  marginTop: "10px",
                                  color: "#fff",
                                  fontSize: "18px",
                                  fontWeight: 600,
                                  lineHeight: 1.7,
                                  textDecoration: "none",
                                }}
                              >
                                {movie.title}
                              </h1>
                            )}
                            {movie && movie.overview && (
                              <p
                                style={{
                                  marginTop: "10px",
                                  color: "#fff",
                                  fontSize: "16px",
                                  fontWeight: "normal",
                                  lineHeight: 1.5,
                                  textDecoration: "none",
                                }}
                              >
                                {movie.overview}
                              </p>
                            )}
                          </div>
                        </div>
                      </a>
                    </Link>
                  );
                })}
            </div>
          ) : (
            <div style={{ margin: "50px 0px" }}>
              <h1
                style={{
                  marginTop: "20px",
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: 1.7,
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Please Input something To get search result
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
