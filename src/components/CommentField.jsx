import { useMutation } from "@apollo/client";
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CREATE_COMMENT } from "../graphql/Mutation";

function CommentField({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [createComment, { loading, data }] = useMutation(CREATE_COMMENT, {
    variables: {
      name,
      email,
      text,
      slug,
    },
  });
  const commentHandler = () => {
    if (text && email && name) {
      createComment();
    } else {
      toast.warning("لطفا فیلد های مورد نظر را پر کنید", {
        position: "top-center",
      });
    }
  };
  {
    data &&
      toast.success(
        "کامنت شما با موفقیت ارسال شد و منتظر تایید مدیران سایت است",
        {
          position: "top-center",
          theme: "colored",
        }
      );
  }

  return (
    <section>
      <Box component="div">
        <TextField
          variant="outlined"
          label="نام کاربری"
          sx={{ width: "100%", my: 2 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="ایمیل "
          sx={{ width: "100%", my: 2 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="نام کاربری"
          sx={{ width: "100%", my: 2 }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          rows={4}
        />
        {loading ? (
          <Button variant="contained" disabled>
            در حال ارسال
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{
              bgcolor: "#fb8c00",
              fontWeight: "700",
              "&:hover": { bgcolor: "#f57c00" },
            }}
            onClick={commentHandler}
          >
            ارسال کامنت
          </Button>
        )}
      </Box>
      <ToastContainer />
    </section>
  );
}

export default CommentField;
