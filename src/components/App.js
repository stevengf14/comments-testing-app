import React from "react";
import { Routes, Route } from "react-router-dom";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/post" element={<CommentBox />} />
        <Route path="/" exact element={<CommentList />} />
      </Routes>
    </div>
  );
}
export default App;
