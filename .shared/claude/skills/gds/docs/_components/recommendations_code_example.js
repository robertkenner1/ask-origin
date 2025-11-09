import React from "react";
import { LiveProvider, LivePreview } from "react-live";
import * as prettier from "prettier/standalone";
import * as babelParser from "prettier/parser-babel";

const Recommendation = ({ caption, type, code, scope }) => (
  <figure className="recommendation-block">
    <div className="p-8">
      <LiveProvider
        code={prettier.format(code, { parser: "babel", plugins: [babelParser] }).trim()}
        scope={scope}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <LivePreview style={{ width: "100%" }} />
        </div>
      </LiveProvider>
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

const RecommendationsWithCode = ({ recommendations, scope }) => (
  <div className="recommendations-container">
    {recommendations.map(recommendation => {
      return (
        <Recommendation
          key={recommendation.name}
          code={recommendation.code}
          scope={scope}
          caption={recommendation.caption}
          type={recommendation.type}
        />
      );
    })}
  </div>
);

export default RecommendationsWithCode;
