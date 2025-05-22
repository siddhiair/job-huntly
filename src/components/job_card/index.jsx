import React from "react";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { getDaysAgo } from "../../helpers";

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
    <div className="px-4 mt-6">
      <div className="border rounded-sm relative p-4 bg-white hover:border-primary transition">
        {remote && (
          <div className="mb-3">
            <span className="py-1 px-2 bg-black text-white text-sm">
              Remote
            </span>
          </div>
        )}
        <h2 className="text-2xl font-semibold mb-1">{title}</h2>
        <div className="flex gap-x-4 mb-3">
          <div className="flex items-center gap-x-1">
            <FaRegBuilding />
            <span>{company_name}</span>
          </div>
          <div className="flex items-center gap-x-1">
            <MdOutlineLocationOn />
            <span>{location}</span>
          </div>
        </div>
        <p className="mb-3">{description}</p>
        <div className="italic text-right text-xs text-gray-500">
          Posted {getDaysAgo(date)}
        </div>

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
