import React from "react";

const Recommendation = ({ image, caption, type }) => (
  <figure className="recommendation-block">
    <div className="recommendation-image-container px-4">
      <img src={image} alt={caption} />
    </div>
    <figcaption
      className={`
      recommendation-caption py-4 pr-4 pl-8
      ${type === "do" ? "do-caption" : "dont-caption"}
    `}
    >
      {caption}
    </figcaption>
  </figure>
);

const Recommendations = ({ recommendations }) => (
  <div className="recommendations-container">
    {recommendations.map(recommendation => {
      return (
        <Recommendation
          key={recommendation.image}
          image={recommendation.image}
          caption={recommendation.caption}
          type={recommendation.type}
        />
      );
    })}
  </div>
);

export default Recommendations;
