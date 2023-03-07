import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewsItem from "./ReviewsItem";

const Reviews = () => {
  const { id } = useParams();
  const [fetchReview, setFetchReview] = useState([]);

  useEffect(() => {
    try {
      const putReview = async () => {
        await axios
          .get(
            `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=826ff55be219075fe0c51d998b696b2f&language=en-US&page=1
        `
          )
          .then((res) => {
            setFetchReview(res.data.results);
            console.log(res);
          });
      };
      putReview();
    } catch (error) {
      alert(error);
    }
  }, [id]);

  const reviewsElem = fetchReview.map((item) => {
    return <ReviewsItem key={id} {...item} />;
  });
  return (
    <div>
      {fetchReview && (
        <ul className="reviewsList">
          {fetchReview.length > 1 ? (
            reviewsElem
          ) : (
            <h2 className="NoReviews">No reviews...</h2>
          )}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
