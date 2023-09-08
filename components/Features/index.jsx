import SectionWrapper from "../SectionWrapper";
import {
  RiInboxArchiveFill,
  RiPieChart2Fill,
  RiTruckFill,
  RiNotification2Fill,
  RiRefreshFill,
} from "react-icons/ri";
import { HiCurrencyRupee } from "react-icons/hi";

const Features = () => {
  const features = [
    {
      icon: RiInboxArchiveFill,
      title: "Mananging Orders",
      desc: "Managing orders can be a hassle when you are getting a lot of orders. Scrolling through chats and remembering which order is pending and which is not.",
    },
    {
      icon: RiPieChart2Fill,
      title: "Non-existent Accounting",
      desc: "Maintaining a spreadsheet for all your sales and expenses is a hassle. You have to update it manually and it is prone to errors.",
    },
    {
      icon: RiTruckFill,
      title: "Challenging Shipments",
      desc: "Manually copy and pasting addresses to create shipments is a hassle. You have to do it for each order and it takes a lot of time.",
    },
    {
      icon: RiNotification2Fill,
      title: "Pinging Customers",
      desc: "You have to manually ping customers when their order is accepted and when it is shipped. It can be time-consuming and you have to do it for each order.",
    },
    {
      icon: HiCurrencyRupee,
      title: "Invoicing",
      desc: "Sending invoices to customers is a hassle. You have to manually create invoices and send them to customers.",
    },
    {
      icon: RiRefreshFill,
      title: "Handling Returning Customers",
      desc: "You have to manually check if the customer has ordered before and if they have, you have to check their previous orders to see what they ordered.",
    },
  ];

  return (
    <SectionWrapper>
      <div id="features" className="custom-screen text-gray-600">
        <div className="mt-6 md:mt-0 mb-12 md:mb-16">
          <h2 className="text-gray-800 text-3xl font-bold sm:text-4xl text-center">
            What is the problem?
          </h2>
        </div>
        <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <li key={idx} className="space-y-3">
                <div className="w-12 h-12 border text-blue-600 rounded-full flex items-center justify-center">
                  <Icon className="text-2xl" />
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default Features;
