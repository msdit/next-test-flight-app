import FlightCard from "@/mod/FlightCard";
import { useRouter } from "next/router";
import type { FC } from "react";
import Styles from "./ResultTemplate.module.css";

const ResultTemplate: FC = () => {
  const router = useRouter();
  const { query } = router;

  return (
    <div className={Styles.resultTemplateRoot}>
      {query.airport}
      <FlightCard />
    </div>
  );
};

export default ResultTemplate;
