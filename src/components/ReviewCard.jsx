import { FaStar } from "react-icons/fa";

function ReviewCard() {
  const data = [
    {
      id: 1,
      star: 5,
      title: "Katherine Katherine",
      date: "July 2025",
      review:
        "Booking was quick and easy I liked how you labeled the hotels with pools included for the kids. Thank you.",
    },
    {
      id: 2,
      star: 5,
      title: "customer",
      date: "July 2025",
      review: "Always use Day use,so easy.",
    },
    {
      id: 3,
      star: 3,
      title: "David",
      date: "July 2025",
      review: "N/A good process",
    },
  ];
  return (
    <div className="md:max-w-[720px] mx-auto mt-14 md:mt-16 mb-14 manrope">
      <div className="flex flex-col gap-6">
        {data.map((item) => (
          <div
            className="shadow-100 w-full text-start p-5 rounded-[20px] flex flex-col-reverse md:flex-col "
            key={item.id}
          >
            <div className="flex justify-between w-full">
              <div className=" flex flex-col md:items-center md:flex-row flex-1">
                <div className="flex mt-16 md:mt-0 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < item.star ? "text-orange-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <h3 className="text-lg font-bold md:ml-3 mt-3 md:mt-0">
                  {item.title}
                </h3>
              </div>
              <p className="text-[12px] tracking-[.01em] text-gray-600 md:block hidden">
                {item.date}
              </p>
            </div>
            <p className=" md:mt-3 text-lg font-semibold">{item.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewCard;
