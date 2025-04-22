import Image from "next/image";

function LampSmall() {
  return (
    <section className="xl-max-w-[1500px] w-full overflow-hidden px-[20px]">
      <div className="relative z-1 overflow-hidden rounded-lg bg-app_blue py-12.5 lg:py-17.5 xl:py-22.5 px-4 sm:px-7.5 lg:px-14 xl:px-19 mb-7.5">
        <div className="max-w-[550px] w-full text-white">
          <span className="font-medium text-[20px]">
            New Arrivals Amp Lamp Small Smoke/Black
          </span>

          <h2 className="text-[40px] font-bold my-[25px]">
            UP TO <span className="text-orange">70%</span> OFF
          </h2>

          <p className="text-head-3 font-medium">
            Regardless of what they are doing at the gym, most guys just work out
            in running shoes.
          </p>

          <button className="text-white text-head-4 font-normal rounded-md bg-orange py-[14px] px-[35px] ease-out duration-200 hover:bg-white hover:text-app_text mt-[30px]">
            Discover Now
          </button>
        </div>

        <Image
          src="/images/promo/ecobee.png"
          alt="promo img"
          className="absolute bottom-0 right-[-80px] -z-1"
          width={600}
          height={400}
        />
      </div>
    </section>
  );
}

export default LampSmall;
