import { FC, useRef } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Button from "@/ui/Button";
import {
  addComment,
  asyncAddComment,
  deleteComment,
} from "@/redux/reducer/commentsReducer";
import Styles from "./AirPortInfoTemplate.module.css";

const AirPortInfoTemplate: FC<any> = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const airportCode = router.query.airportCode;

  const commentList = useSelector<any, any>(
    (state) => state.comment.commentList
  );

  const formRef = useRef<any>(null);
  const nameRef = useRef<any>(null);
  const emailRef = useRef<any>(null);
  const textRef = useRef<any>(null);

  const saveComment = (e: any) => {
    e.preventDefault();
    dispatch(
      addComment({
        name: nameRef.current.value,
        email: emailRef.current.value,
        text: textRef.current.value,
      })
    );
    formRef.current.reset();
  };

  const asycSaveComment = (e: any) => {
    e.preventDefault();
    dispatch(
      asyncAddComment({
        name: nameRef.current.value,
        email: emailRef.current.value,
        text: textRef.current.value,
      })
    );
    formRef.current.reset();
  };

  const delComment = (email: string) => {
    dispatch(deleteComment(email));
  };

  return (
    <>
      <h1>{airportCode}</h1>
      <code dir="ltr">{JSON.stringify(props)}</code>
      <form ref={formRef} className={Styles.form}>
        <input ref={nameRef} type="text" placeholder="نام" />
        <input ref={emailRef} type="email" placeholder="ایمیل" />
        <textarea ref={textRef} placeholder="متن" />
        <Button type="submit" onClick={saveComment}>
          ارسال
        </Button>
        <Button type="submit" onClick={asycSaveComment}>
          ارسال ناهمگام
        </Button>
      </form>
      <ul>
        {commentList.map((comment: any) => (
          <li key={comment.email}>
            <strong>{comment.name}:</strong> ({comment.email})<br />
            {comment.text}
            <p onClick={() => delComment(comment.email)}>حذف</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AirPortInfoTemplate;
