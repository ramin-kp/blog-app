import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS } from "../graphql/query";
import AuthorBox from "./AuthorBox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Loader from "./Loader";

const style = {
  p: 0,
  width: "100%",
  maxWidth: 360,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
  boxShadow: "rgba(0,0,0,0.2) 0 4px 12px",
  borderRadius: "10px",
};

function Author() {
  const { loading, data, error } = useQuery(GET_AUTHORS);
  if (loading) return <Loader />;
  if (error) return <h1>error...</h1>;
  const counter = data.writers.length;
  return (
    <List sx={style}>
      {data.writers.map((writer, index) => (
        <div key={writer.id}>
          <ListItem>
            <AuthorBox {...writer} />
          </ListItem>
          {index + 1 < counter && <Divider />}
        </div>
      ))}
    </List>
  );
}

export default Author;
