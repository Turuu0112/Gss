"use client";

import Image from "next/image";
import { FiCalendar } from "react-icons/fi";

export const MainEventGrid = () => {
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
    {
      image: "/x-01_(1).webp",
      name: "Event 4",
      eventDate: ["May 10, 2025"],
      artist: ["Artist 4"],
    },

    {
      image: "/2.webp",
      name: "Event 2",
      eventDate: ["Mar 15, 2025"],
      artist: ["Artist 2"],
    },
    {
      image: "/2.webp",
      name: "Event 2",
      eventDate: ["Mar 15, 2025"],
      artist: ["Artist 2"],
    },
  ];

  return (
    <div className="mt-16 mb-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Upcoming Events
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {Images.map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={item.image || "/placeholder.jpg"}
              alt={`Event Image ${index + 1}`}
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-4 space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h3>
              <div className="flex gap-2 items-center text-gray-500 text-sm">
                <FiCalendar className="w-4 h-4" />
                {item.eventDate.map((date, dateIndex) => (
                  <p key={dateIndex}>{date}</p>
                ))}
              </div>
              <div className="text-gray-600 text-sm">
                {item.artist.map((artist, artistIndex) => (
                  <p key={artistIndex}>{artist}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
