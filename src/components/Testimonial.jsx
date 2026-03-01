import React from "react";
import Title from "./Title"; // adjust path if needed
import { assets } from "../assets/assets";

const testimonialsData = [
  {
    id: 1,
    name: "Ahmad khan",
    location: "Karachi, Pakistan",
    role: "Home User",
    image: assets.testimonial_image_1, // add image later
    review:
      "Swat Glacier coolers provide excellent cooling performance. Perfect for our home use and very energy efficient.",
  },
  {
    id: 2,
    name: "Usman Kakar",
    location: "Karachi, Pakistan",
    role: "Hotel Owner",
    image: assets.testimonial_image_3, // add image later
    review:
      "Reliable and powerful cooling. Our customers always have chilled water, even during peak summer.",
  },
  {
    id: 3,
    name: "Ali Raza",
    role: "Office Manager",
    location: "Karachi, Pakistan",
    image: assets.testimonial_image_2, // add image later
    review:
      "Durable build and great service. Renting from Swat Glacier was the best decision for our office.",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-white  py-15 flex flex-col items-center px-0 sm:px-12 lg:px-12">
      {/* Title */}
      <Title
        title="What Our Customers Say"
        subTitle="Trusted by homes, offices, restaurants, and mosques for powerful and reliable cooling all year round."
        titleColor="text-blue-500"
        subColor="text-gray-600"
      />

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {testimonialsData.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-blue-100"
          >
            {/* User Info */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                {/* Add image later */}
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div>
                <h3 className="font-semibold text-[#1e7fb0]">
                  {item.name}{" "}
                  <span className="text-sm text-gray-500">({item.role})</span>
                </h3>
                <p className="text-sm text-gray-500">{item.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-3 pb-2 pt-1">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <img
                    key={index}
                    src={assets.star_icon}
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
            </div>

            {/* Review */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
