import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import HomeComponent from "../Components/HomeComponent";
import axios from "axios";

const Home: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <HomeComponent data={data} />
    </div>
  );
};

export default Home;

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
