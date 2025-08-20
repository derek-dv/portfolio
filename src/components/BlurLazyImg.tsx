import { useState } from "react";

const BlurLazyImg = ({ src, placeholder, alt }: { src: string; placeholder: string; alt: string }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-lg">
      {/* Low-res blurred placeholder */}
      <img
        src={placeholder}
        alt={alt}
        className={`relative z-10 w-full h-auto blur-lg scale-105 transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      
      {/* Full image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className="w-full h-auto transition-opacity duration-500"
      />
    </div>
  );
}

export default BlurLazyImg;