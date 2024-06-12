/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";

const CVPreview = ({ image }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [image]);

  if (error) {
    return <p>Error loading image: {error.message}</p>;
  }

  if (loading) {
    return <p>Loading image...</p>;
  }

  return (
    <div className="cv-preview">
      <img
        src={image ? `${image}` : "../assets/images/resource/news-2.jpg"}
        alt="CV Image"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
};

export default CVPreview;
