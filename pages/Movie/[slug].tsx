import axios from "axios";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import map from "lodash/map";
import filter from "lodash/filter";
import MoviDetailsComponent from "../../Components/MoviDetailsComponent";

export type Props = InferGetStaticPropsType<typeof getStaticProps>;

function MovieSlug({ movie }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <MoviDetailsComponent data={movie} />
    </div>
  );
}

export default MovieSlug;

type PathInterface = {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<PathInterface> = async () => {
  const { data, status } = await axios.get(
    "https://movie-task.vercel.app/api/popular?page=1"
  );

  if (status !== 200) {
    return {
      paths: [],
      fallback: false,
    };
  }

  const slugs = map(data.data.results, (item) => ({
    params: {
      slug: item.id.toString(),
    },
  }));

  const paths = filter(slugs, (item) => !!item.params.slug);
  return { paths, fallback: false };
};

type ResultInterface = {
  pathUrl: any;
  movie: any;
};

export const getStaticProps: GetStaticProps<
  ResultInterface,
  PathInterface
> = async (context) => {
  const { params } = context;
  const pathUrl = `https://movie-task.vercel.app/api/movie?movieId=${params?.slug}`;

  const { data, status } = await axios.get<any>(pathUrl);
  console.log("mydata", data);
  if (status !== 200 || !data.data || !data.data.id) {
    return {
      notFound: true,
      redirect: {
        basePath: false,
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      pathUrl: params ? params.slug : "default",
      movie: data,
    },
  };
};
// export async function getStaticPaths() {
//   const response = await fetch(
//     "https://movie-task.vercel.app/api/popular?page=1"
//   );
//   const url = await response.json();

//   console.log("myurl", url);

//   const paths = url.data.results
//     .map((pageurl: { slug: any; id: number }) => ({
//       params: { slug: pageurl.id.toString() },
//     }))
//     .filter((paramsurl: any) => {
//       console.log(
//         "hq",
//         paramsurl,
//         paramsurl.params.slug,
//         paramsurl.params.slug !== null
//       );
//       return paramsurl.params.slug !== null;
//     });

//   console.log("paths", paths);

//   return { paths, fallback: false };
// }

// export async function getStaticProps(context: { params: any }) {
//   const { params } = context;
//   console.log("hello", params.slug);
//   const res = await fetch(
//     `https://movie-task.vercel.app/api/movie?movieId=${params?.slug}`
//   );
//   const data = await res.json();

//   console.log("seadata", data);

//   return {
//     props: {
//       movie: data,
//     },
//   };
// }
