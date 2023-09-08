import React from "react";
import SectionWrapper from "../SectionWrapper";
import { HiCurrencyRupee } from "react-icons/hi";
import {
  RiInboxArchiveFill,
  RiPieChart2Fill,
  RiTruckFill,
  RiNotification2Fill,
  RiBarcodeBoxFill,
} from "react-icons/ri";

const ToolKit = () => {
  const features = [
    {
      icon: RiInboxArchiveFill,
      title: "Order Management",
      desc: "We store all your data securely so that you do not have to scroll through your chats to find an order and fiddle around with flags.",
    },
    {
      icon: RiTruckFill,
      title: "Shipment Management",
      desc: "Just click a button and we will create all the shipments with Delhivery automatically. You can also download a CSV file to upload on Delhivery Panel.",
    },
    {
      icon: RiBarcodeBoxFill,
      title: "Shipping Labels",
      desc: "Select the orders and hit Create Labels and you will have custom shipping labels for all your orders in no-time.",
    },
    {
      icon: HiCurrencyRupee,
      title: "Invoicing",
      desc: "Send invoices to your customers automatically when they place an order with a single click.",
    },
    {
      icon: RiPieChart2Fill,
      title: "Accounting",
      desc: "Want to know how much you have sold in a month? We have got you covered. We will show you all your sales data in a single place.",
    },
    {
      icon: RiNotification2Fill,
      title: "Notifications",
      desc: "Send automatic emails when the orders are accepted and when they are shipped with high deliverability and open rates.",
    },
  ];

  return (
    <SectionWrapper>
      <div
        id="toolkit"
        className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8"
      >
        <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            What do we offer?
          </h2>
          <p>
            These are the things that we handle for you so that you can focus on
            growing your business.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <li key={idx} className="flex gap-x-4">
                  <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                    <Icon className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-800 font-semibold">
                      {item.title}
                    </h4>
                    <p className="mt-3">{item.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ToolKit;
