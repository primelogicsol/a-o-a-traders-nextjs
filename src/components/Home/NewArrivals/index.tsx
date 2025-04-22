import React from "react";
import SingleItem from "./SingleItem";
import Image from "next/image";
import Link from "next/link";
import shopData from "@/components/Shop/shopData";

const NewArrivals = () => {
  return (
    <section className="max-w-[1500px] w-full mx-auto px-4 sm:px-8 xl:px-0 overflow-hidden my-[50px]">
      {/* <!-- section title --> */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <span className="flex items-center gap-2.5 font-medium text-app_text mb-1.5">
            <Image
              src="/images/icons/icon-07.svg"
              alt="icon"
              width={17}
              height={17}
            />
            This Month
          </span>
          <h2 className="font-medium text-xl xl:text-heading-5 text-app_text">
            Best Sellers
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
        {/* <!-- Best Sellers item --> */}
        {shopData.slice(1, 7).map((item, key) => (
          <SingleItem item={item} key={key} />
        ))}
      </div>

      <div className="text-center mt-12.5">
        <Link
          href="/shop-without-sidebar"
          className="inline-flex font-medium text-custom-sm py-3 px-7 sm:px-12.5 rounded-md border-gray-3 border bg-app_blue text-white ease-out duration-200 hover:border-transparent"
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default NewArrivals;
