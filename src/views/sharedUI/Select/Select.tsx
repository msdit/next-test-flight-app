import Link from "next/link";
import { FC, useEffect, useState } from "react";
import Button from "../Button";
import Styles from "./Select.module.css";

interface ISelectProps {
  data: {
    value: string;
    label: string;
  }[];
  onChange: (param: string) => void;
  title: string;
  className?: string;
}

const Select: FC<ISelectProps> = (props) => {
  const { data, onChange, title, className = "" } = props;

  const [filterdList, setFilterdList] = useState(data);
  const onFilter = (str: string): void => {
    const newList = data.filter((el) => el.label.includes(str));
    setFilterdList(newList);
  };

  useEffect(() => {
    setFilterdList(data);
  }, [data]);

  const [inputValue, setInputValue] = useState("");
  const onInputChange = (e: any) => {
    const val = e.target.value;
    setInputValue(val);
    onFilter(val);
  };

  return (
    <div className={`${Styles.selectRoot} ${className}`.trim()}>
      <input
        className={Styles.selectInput}
        onChange={onInputChange}
        value={inputValue}
        placeholder={title}
      />
      <ul className={Styles.selectList}>
        {filterdList.map((el) => (
          <li
            className={Styles.selectItem}
            key={el.value}
            onClick={() => onChange(el.value)}
          >
            {el.label}
            <Link href={`/a/${el.value}`}>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                اطلاعات بیشتر
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
