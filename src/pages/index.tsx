import type { NextPage } from "next";
import MainLayout from "@/layout/MainLayout";
import HomeTemplate from "@/temp/HomeTemplate";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HomeTemplate />
    </MainLayout>
  );
};

export default Home;
