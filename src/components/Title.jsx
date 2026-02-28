import React from "react";

const Title = ({ title, subTitle, align = "center", titleColor = "", subColor = "" }) => {
  return (
    <div className={`text-${align}`}>
      <h2 className={`text-3xl md:text-4xl font-semibold ${titleColor}`}>
        {title}
      </h2>
      <p className={`mt-2 text-sm md:text-base ${subColor}`}>
        {subTitle}
      </p>
    </div>
  );
};

export default Title;
