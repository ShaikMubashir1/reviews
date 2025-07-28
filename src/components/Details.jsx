import FreeCancellation from "../assets/FreeCancellation.png";
import PaymentAtTheHotel from "../assets/PaymentAtTheHotel.png";
import UpTo75 from "../assets/UpTo75.png";
import WorldwideLeader from "../assets/WorldwideLeader.png";

function Details() {
  const data = [
    {
      icon: FreeCancellation,
      title: "Free cancellation",
      subtitle: "Until the last minute",
    },
    {
      icon: PaymentAtTheHotel,
      title: "Payment at the hotel",
      subtitle: "Reserve without prepayment",
    },
    {
      icon: UpTo75,
      title: "Up to 75% off",
      subtitle: "Compared to an overnight stay",
    },
    {
      icon: WorldwideLeader,
      title: "Worldwide leader",
      subtitle: "of daytime hotels",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-[862px] manrope flex md:flex-row flex-col bg-zinc-50 mt-11 md:mt-16 rounded-2xl py-10 px-8">
        {data.map((item, index) => (
          <div key={index} className=" items-start text-start md:text-center md:items-center flex flex-row md:flex-col md:space-y-4 md:m-0 mb-6">
            <img src={item.icon} alt="" className="w-14 h-14 "/>
            <div className="ml-4">
              <h1 className="text-xl font-semibold">{item.title}</h1>
              <p className="text-sm/6 tracking-[.01em]">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
