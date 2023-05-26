import { useEffect, useRef, useState } from "react";

const useSlider = () => {
  const [width, setWidth] = useState(0); // State til bredden af slideren
  const carousel = useRef<HTMLDivElement>(null); // Ref til carousel-containeren
  const [sliderPosition, setSliderPosition] = useState(0); // State til den aktuelle position for slideren
  const [dragStartX, setDragStartX] = useState(0); // State til startpositionen for X-aksen ved træk
  const [isDragging, setIsDragging] = useState(false); // State til at holde styr på om slideren trækkes

  useEffect(() => {
    if (carousel.current) {
      // Når komponenten indlæses, beregnes bredden af slideren
      console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    // Event handler når der trykkes på musen på slideren
    setDragStartX(event.clientX - sliderPosition); // Sæt startpositionen for X-aksen ved træk
    setIsDragging(true); // Sæt isDragging til true for at indikere, at der trækkes i slideren
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    // Event handler når der bevæges med musen på slideren
    if (!isDragging) return; // Hvis der ikke trækkes i øjeblikket, returner tidligt
    const newSliderPosition = event.clientX - dragStartX; // Beregn den nye position for slideren
    setSliderPosition(newSliderPosition); // Opdater state for sliderens position
  };

  const handleMouseUp = () => {
    // Event handler når der slippes musen på slideren
    setIsDragging(false); // Sæt isDragging til false for at indikere, at trækningen er afsluttet
  };

  const isSliderAtStart = sliderPosition >= 0; // Tjek om slideren er ved startpositionen
  const isSliderAtEnd = sliderPosition <= -width; // Tjek om slideren er ved slutpositionen

  return {
    width,
    carousel,
    sliderPosition,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    isSliderAtStart,
    isSliderAtEnd,
  };
};

export default useSlider;
