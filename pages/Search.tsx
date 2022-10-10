import axios from "axios";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import SearchComponent from "../Components/SearchComponent";

const Search: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <SearchComponent data={data} />
    </div>
  );
};

export default Search;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await axios({
    url: process.env.NEXT_PUBLIC_ENV_VARIABLE,
    responseType: "json",
  });

  return {
    props: {
      data: data.data,
    },
  };
};
