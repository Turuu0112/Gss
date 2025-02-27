"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FiCalendar } from "react-icons/fi";
import { Skeleton } from "@/components/ui/skeleton";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export const MainHeroComponent = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const Images = [
    {
      image: "/x-01_(1).webp",
      name: "Event 1",
      eventDate: ["Feb 28, 2025"],
      artist: ["Artist 1"],
    },
    {
      image: "/2.webp",
      name: "Event 2",
      eventDate: ["Mar 15, 2025"],
      artist: ["Artist 2"],
    },
    {
      image: "/LOgo-gss.png",
      name: "Event 3",
      eventDate: ["Apr 20, 2025"],
      artist: ["Artist 3"],
    },
  
  ];

  const slideRight = useCallback(() => {
    setIsTransitioning(true);
    setCurrent((prev) => (prev === Images.length - 1 ? 0 : prev + 1));
  }, [Images.length]);

  const slideLeft = useCallback(() => {
    setIsTransitioning(true);
    setCurrent((prev) => (prev === 0 ? Images.length - 1 : prev - 1));
  }, [Images.length]);

  useEffect(() => {
    if (autoplay) {
      const timeout = setTimeout(slideRight, 1000);
      return () => clearTimeout(timeout);
    }
  }, [autoplay, current, slideRight]);

  return (
    <div
      className="relative w-full overflow-hidden border-transparent h-[500px] rounded mt-20 max-md:w-full"
      data-testid="main-hero"
    >
      <div
        data-testid="carousel-track"
        style={{
          transform: `translateX(-${(current * 100) / Images.length}%)`,
          width: `${100 * Images.length}%`,
        }}
        className={`carousel-track absolute bg-gray-700 flex h-full ${
          isTransitioning ? "duration-2000 ease-in-out" : ""
        }`}
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        {Images.map((item, index) => (
          <div
            data-testid={`getCancel-${index}`}
            key={index}
            className="relative h-[550px] w-full z-10"
          >
            <Image
              src={item.image || "/placeholder.jpg"}
              fill
              alt={`Event Image ${index + 1}`}
              className="object-cover"
              quality={100}
              priority
            />
            <div className="h-[550px] bg-black bg-opacity-50 z-50 space-y-4 absolute text-white flex justify-center items-center w-full">
              <div className="rounded text-center px-4 py-2">
                <div className="text-xl mt-4 max-sm:text-sm border-[#FAFAFA33] rounded-full  flex gap-2 border w-fit px-3 py-1.5 m-auto">
                  {item.artist.map((artist, artistIndex) => (
                    <div
                      key={artistIndex}
                      className={`${artistIndex !== 0 ? "hidden" : ""}`}
                    >
                      {artist}
                    </div>
                  ))}
                </div>
                <h1 className="text-6xl font-semibold max-sm:text-2xl max-sm:max-w-[160px]">
                  {item.name}
                </h1>
                <div className="text-xl mt-4 flex gap-2 items-center justify-center">
                  {item.eventDate.map((date, dateIndex) => (
                    <div
                      className="flex gap-1 justify-center items-center max-sm:text-sm"
                      key={dateIndex}
                    >
                      <FiCalendar className="w-4 h-4 max-sm:hidden" />
                      <p
                        className={`${dateIndex !== 0 ? "max-sm:hidden" : ""}`}
                      >
                        {date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full z-20">
        <button
          data-testid={`left`}
          className="z-50 absolute top-1/2 left-4 bg-transparent rounded-[10px] flex items-center justify-center max-sm:h-7 h-9 w-9 cursor-pointer border border-gray-400 text-[#FAFAFA] text-3xl"
          onClick={slideLeft}
        >
          <GoChevronLeft className="h-4 w-4" />
        </button>
        <button
          data-testid={`right`}
          className="z-50 absolute top-1/2 right-4 bg-transparent rounded-[10px] flex items-center justify-center max-sm:h-7 h-9 w-9 cursor-pointer border border-gray-400 text-[#FAFAFA] text-3xl"
          onClick={slideRight}
        >
          <GoChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
