import React, { useState } from "react";
import Images from "../Data/Images";
import useSlider from "../Hooks/useSlider";

const SliderCard = () => {
  const {
    width,
    carousel,
    sliderPosition,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    isSliderAtStart,
    isSliderAtEnd,
  } = useSlider();

  const [isDragging, setIsDragging] = useState(false);

  const handleMouseClick = () => {
    setIsDragging(true);
  };

  const handleMouseRelease = () => {
    setIsDragging(false);
    carousel.current?.classList.add("grab");
  };

  return (
    <div
      className={`overflow-hidden`}
      ref={carousel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={handleMouseClick}
    >
      <div
        className="flex"
        style={{
          transform: `translateX(${isSliderAtEnd ? -width : isSliderAtStart ? 0 : sliderPosition}px)`,
        }}
      >
        {Images.map((image: string) => (
          <div className="min-h-[40rem] min-w-[30rem] p-[40px]" key={image}>
            <img
              className="w-[100%] h-[100%] rounded-[2rem] object-cover"
              src={image}
              alt=""
              draggable="false"
              onDragStart={(e) => e.preventDefault()}
              style={{ userSelect: "none" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderCard;
