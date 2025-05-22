import React from "react";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

const Card = ({
  title,
  company_name,
  location,
  remote,
  tags,
  url,
  description,
  date,
}) => {
  return (
    <div className="px-4">
      <div className="border rounded-sm relative">
        {remote && (
          <span className="py-1 px-2 bg-black text-white text-sm">Remote</span>
        )}
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="flex gap-x-4">
          <div className="flex items-center gap-x-1">
            <FaRegBuilding />
            <span>{company_name}</span>
          </div>
          <div className="flex items-center gap-x-1">
            <MdOutlineLocationOn />
            <span>{location}</span>
          </div>
        </div>
        <p>{description}</p>
        <div>{date}</div>

        <a
          href={url}
          target="_blank"
          aria-label="View Job Details"
          className="absolute top-0 left-0 right-0 bottom-0 z-10"
        ></a>
      </div>
    </div>
  );
};

export default Card;
