import ReviewCard from "./ReviewCard";

function ReviewSection() {
  return (
    <div className="flex flex-col justify-center items-center pt-12">
      <div className="flex flex-col justify-center items-center max-w-[862px]">
        <h2 className="md:p-4 mt-3 md:mt-0 mb-4 md:mb-0 text-3xl md:text-6xl font-bold md:leading-[4rem] text-center lato">
          More than a million satisfied customers
        </h2>
        <p className=" text-sm/[22px] font-medium manrope tracking-[.01em] text-gray-700 md:px-5 mt-14 md:mt-20 body3 text-center">
          Book a getaway you will never forget in a hotel that's only a stone's
          throw away from home. Over 2500 users have already left their reviews
          on Trustpilot. Will you be the next one?
        </p>
        <ReviewCard />

        <button className="flex justify-center select-none items-center rounded-full bg-gradient-to-bl from-[#FFAF36] to-yellow-500 cursor-pointer whitespace-nowrap active:bg-yellow-500 active:bg-none hover:bg-[#FFAF36] hover:bg-none disabled:bg-slate-800 disabled:bg-none disabled:text-white disabled:cursor-default text-[15px]/[15px] font-medium manrope tracking-[.01em] h-[52px] px-7 mx-auto mb-12">
          View more
        </button>
      </div>
    </div>
  );
}

export default ReviewSection;
