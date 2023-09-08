import SectionWrapper from "../SectionWrapper";

const Testimonials = () => {
  const testimonials = [
    {
      avatar: "https://order.reskinn.store/logo.svg",
      name: "Reskinn Store",
      title: "@re_skinn",
      quote: "",
      quote:
        "This tool has completely transformed the way we manage our orders. It has saved us so much time and effort. Highly recommended!",
    },
  ];

  return (
    <SectionWrapper className="pb-0">
      <div id="testimonials" className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl sm:text-center md:mx-auto">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            See what others saying about us
          </h2>
          <p className="mt-3 text-gray-600">
            Listen to what the experts around the world are saying about us.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li key={idx} className="bg-white border p-4 rounded-xl">
                <figure>
                  <div className="flex items-center gap-x-4">
                    <img
                      src={item.avatar}
                      className="w-14 h-14 object-cover rounded-full"
                      alt={item.name}
                    />
                    <div>
                      <span className="block text-gray-800 font-semibold">
                        {item.name}
                      </span>
                      <span className="block text-gray-600 text-sm mt-0.5">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <blockquote>
                    <p className="mt-6 text-gray-700">{item.quote}</p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
