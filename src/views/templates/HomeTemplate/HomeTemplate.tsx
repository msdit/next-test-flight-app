import { getList } from "@/redux/reducer/dataReducer";
import Button from "@/ui/Button";
import Select from "@/ui/Select";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Styles from "./HomeTemplate.module.css";

const HomeTemplate: FC = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const airportList = useSelector((state: any) => state.data.airportList);
  const handleSelectChange = (value: string): void => {
    router.push(`/result/${value}`);
  };

  useEffect(() => {
    dispatch(getList());
  }, []);

  console.log(airportList);

  return (
    <div className={Styles.homeTemplateRoot}>
      {/* <Button>جست و جو</Button> */}
      <Select
        className={Styles.homeTemplateSelect}
        title="نام فرودگاه"
        data={airportList.map((el: any) => ({
          value: el.domainCode,
          label: el.name,
        }))}
        onChange={handleSelectChange}
      />
    </div>
  );
};

export default HomeTemplate;
