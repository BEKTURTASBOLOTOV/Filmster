import React from "react";

const ReviewsItem = ({ author, content, created_at }) => {
  return (
    <li className="reviewsItem">
      <h3>{author}</h3>
      <p>{content}</p>
      <h4>Created at: {created_at}</h4>
    </li>
  );
};

export default ReviewsItem;
