import React from "react";
import Link from "next/link";
import ProductItem from "@/components/Common/ProductItem";
import shopData from "@/components/Shop/shopData";

const AllInOne = () => {
  return (
    <section className="xl-max-w-[1500px] w-full overflow-hidden px-[20px] my-[50px]">
      {/* <!-- section title --> */}
      <div className="flex items-center justify-between mb-[25px] border-b-[2px] border-app_border pb-[15px]">
        <h2 className="text-head-2 text-app_text font-medium border-b-[2px] border-orange pb-[15px]">
          All In One
        </h2>

        <div className="flex items-center gap-[15px]">
          <h3 className="text-head-4 text-app_text font-medium">Clearner</h3>
          <h3 className="text-head-4 text-app_text font-medium">
            Air Conditioner
          </h3>
          <h3 className="text-head-4 text-app_text font-medium">
            Computer Accessories
          </h3>
        </div>
      </div>

      <div className="flex items-cemter overflow-x-auto no-scrollbar gap-[10px]">
        {/* <!-- New Arrivals item --> */}
        {shopData.map((item, key) => (
          <ProductItem item={item} key={key} />
        ))}
      </div>
    </section>
  );
};

export default AllInOne;
