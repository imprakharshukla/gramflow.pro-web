import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "../Button";

const Pricing = () => {
  const plans = [
    {
      name: "Basic plan",
      desc: "For new sellers building their list. Less than 500 orders/month",
      price: 2500,
      isMostPop: false,
      features: [
        "300 emails/day",
        "Customizable Email Templates",
        "Drag & Drop Editor",
        "Transactional Emails",
        "SMS & WhatsApp Campaigns",
        "Phone support",
      ],
    },
    {
      name: "Business",
      desc: "Ideal for growing businesses. More than 500 orders/month",
      price: 5000,
      isMostPop: true,
      features: [
        "From 20k emails/month",
        "Marketing Automation",
        "A/B testing",
        "Advanced statistics",
        "Multi-user access",
        "Send time optimization",
      ],
    },
  ];

  return (
    <SectionWrapper id="pricing" className="custom-screen mt-12">
      <div className="custom-screen text-gray-600">
        <div className="relative max-w-2xl mx-auto sm:text-center">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Pricing
          </h2>
          <div className="mt-3">
            <p>Get started with our affordable plans and scale as you grow.</p>
          </div>
        </div>
        <LayoutEffect
          className="duration-1000 delay-300"
          isInviewState={{
            trueState: "opacity-1",
            falseState: "opacity-0",
          }}
        >
          <div>
            <div className="mt-12 space-y-6 justify-center gap-6 sm:flex sm:space-y-0">
              {plans.map((item, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl border shadow-lg ${
                    item.isMostPop ? "bg-gray-800 text-gray-300" : "bg-white"
                  }`}
                >
                  <div className="h-full p-8 gap-y-4 flex flex-col items-stretch">
                    <span
                      className={`font-medium ${
                        item.isMostPop ? "text-sky-400" : "text-sky-500"
                      }`}
                    >
                      {item.name}
                    </span>
                    <div
                      className={`text-3xl font-semibold ${
                        item.isMostPop ? "text-white" : "text-gray-800"
                      }`}
                    >
                      ₹{item.price}{" "}
                      <span className="text-xl font-normal">/mo</span>
                    </div>
                    <p className="max-w-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="https://github.com/imprakharshukla/gramflow.pro-origin">
              <div
                id="self_host"
                className={`mt-12 rounded-xl border shadow-lg bg-white hover:shadow-xl`}
              >
                <div className="h-full p-8 gap-y-4 flex flex-col items-stretch">
                  <span className={`font-medium text-sky-500`}>Self Host</span>
                  <div className={`text-3xl font-semibold text-gray-800`}>
                    Free <span className="text-xl font-normal "></span>
                  </div>
                  <p className="max-w-sm">
                    GramFlow is completely open-source and hence you can deploy
                    your own instance in
                  </p>
                </div>
              </div>
            </a>
          </div>
        </LayoutEffect>
      </div>
    </SectionWrapper>
  );
};

export default Pricing;
