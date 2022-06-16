import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    commentList: [
      {
        name: "اصغر",
        email: "test@gmail.com",
        text: "خیلی خوبه",
      },
    ],
  },
  reducers: {
    updateCommentList: (state: any, action: any) => {
      state.commentList = action.payload;
    },
    addComment: (state: any, action: any) => {
      const isEmailExists: boolean = state.commentList.some(
        (c: any) => c.email === action.payload.email
      );
      if (!isEmailExists) state.commentList.push(action.payload);
      else console.error("ایمیل قبلا ثبت شده.");
    },
    deleteComment: (state: any, action: any) => {
      state.commentList = state.commentList.filter(
        (c: any) => c.email !== action.payload
      );
    },
  },
});

const { actions, reducer } = commentSlice;

console.log({ actions, reducer });

export const { addComment, deleteComment } = actions;

const { updateCommentList } = actions;

export default reducer;

export const asyncAddComment: any =
  (comment: any) => (dispatch: any, getState: any) => {
    setTimeout(() => {
      const allStates = getState();
      const newList = [...allStates.comment.commentList, comment];
      dispatch(updateCommentList(newList));
      dispatch(deleteComment("test@gmail.com"));
    }, 3000);
  };
