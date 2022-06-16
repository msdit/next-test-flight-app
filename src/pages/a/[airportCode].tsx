import MainLayout from "@/layout/MainLayout";
import AirPortInfoTemplate from "@/temp/AirPortInfoTemplate";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const AirPortInfo: NextPage<any> = (props) => {
  return (
    <MainLayout>
      <AirPortInfoTemplate {...props} />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const list = await fetch("https://ws.alibaba.ir/api/v1/flightInfo/airports");
  const listJson = await list.json();

  const {
    params: { airportCode },
  } = ctx as any;

  return {
    props: listJson.result.find((el: any) => el.domainCode === airportCode),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const list = await fetch("https://ws.alibaba.ir/api/v1/flightInfo/airports");
  const listJson = await list.json();

  const popularPaths = listJson.result
    .filter((el: any) => el.isPopular)
    .map((el: any) => {
      return {
        params: {
          airportCode: el.domainCode,
        },
      };
    });

  return {
    paths: popularPaths,
    fallback: "blocking",
  };
};

export default AirPortInfo;
