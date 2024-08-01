import React from "react";

const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <div>{params.id}</div>
      <div>ViewDetailBlog</div>
    </>
  );
};

export default ViewDetailBlog;
