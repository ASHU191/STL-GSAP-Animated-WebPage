import React from "react";
import Image from "next/image";
import TestimonialImg from "../public/images/testimonial-section.png";

export default function TestimonialSection() {
  return (
    <div id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="bg-black text-white py-20 px-6 lg:px-8 rounded-3xl max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center">
            
            {/* Right side - Image on top for mobile */}
            <div className="order-1 lg:order-2 relative rounded-xl overflow-hidden">
              <Image
                src={TestimonialImg || "/placeholder.svg"}
                alt="Person giving presentation"
                width={600}
                height={500} 
                className="w-full h-auto mb-8 lg:mb-0"
              />
              {/* Play button overlay */}
              <div className="absolute bottom-4 right-4 bg-white bg-opacity-20 rounded-full p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </div>

            {/* Left side - Logo and testimonial */}
            <div className="order-2 lg:order-1 flex flex-col justify-between h-full space-y-8">
              {/* Logo */}
              <div className="mb-4">
                <Image
                  src="/images/agency.png"
                  alt="SHADOWBEY DIGITAL AGENCY"
                  width={220}
                  height={65}
                  className="h-auto"
                />
              </div>

              {/* Testimonial */}
              <div>
                <blockquote className="text-3xl font-medium leading-tight mb-6">
                  "From the initial concept discussions to the final product, their team was attentive, innovative, and
                  professional throughout the entire process."
                </blockquote>

                <div>
                  <p className="text-xl font-bold">Romail Ahmed</p>
                  <p className="text-gray-400">CEO of Shadowbey</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
