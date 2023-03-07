import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CastItem from "./CastItem";

const Cast = () => {
  const { id } = useParams();
  const [compound, setCompound] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        await axios
          .get(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=826ff55be219075fe0c51d998b696b2f&language=en-US`
          )
          .then((res) => {
            setCompound(res.data.cast);
            // console.log(res);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [id]);

  const castElem = compound.map((item) => {
    return <CastItem key={item.id} {...item} />;
  });

  return (
    <div className="castDiv">
      {compound && <ul className="castList">{castElem}</ul>}
    </div>
  );
};

export default Cast;
