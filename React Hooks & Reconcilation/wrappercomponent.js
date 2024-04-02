// CardWrapper.js
// This is written in a separate js, which can be applied to so many areas.


/* import React from "react";

const CardWrapper = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        margin: "16px",
        borderRadius: "8px",
      }}
    >
      {children}
    </div>
  );
};

export default CardWrapper; */


//  In BlogPost.js

import React from 'react';
import CardWrapper from './CardWrapper';

const BlogPost = ({ title, content }) => {
  return (
    <CardWrapper>
      <h2>{title}</h2>
      <p>{content}</p>
    </CardWrapper>
  );
};

export default BlogPost;