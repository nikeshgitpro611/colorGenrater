import React from "react";
import { toast } from "react-toastify";

const SingleClor = ({ colorList, index }) => {
  const { hex, weight } = colorList;

  const handleClickBoard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color Copied to Clipedboard");
      } catch (error) {
        toast.error("Color not Copied to Clipedboard");
      }
    } else {
      toast.error("Some thin wrg");
    }
  };
  return (
    <section
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={handleClickBoard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </section>
  );
};

export default SingleClor;
