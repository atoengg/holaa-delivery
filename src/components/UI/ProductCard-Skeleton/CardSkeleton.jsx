import React from "react";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, index) => (
      <div className="border border-solid shadow-md rounded-lg" key={index}>
        <div className="flex flex-col justify-between text-center h-full min-h-[19rem] p-7">
          <div className="flex justify-center">
            <Skeleton circle width={80} height={80} />
          </div>

          <h5 className="">
            <Skeleton height={20} />
          </h5>

          <div className="grid grid-rows-1 grid-cols-2 gap-4">
            <Skeleton height={20} />
            <Skeleton height={20} />
          </div>
        </div>
      </div>
    ));
};

export default CardSkeleton;
