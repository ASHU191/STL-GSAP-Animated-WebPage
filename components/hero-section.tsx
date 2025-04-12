import { GalleryVerticalEnd, ChevronsDown } from "lucide-react";


export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center pt-32 md:pt-10 lg:pt-0">
      {/* Tagline */}
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <GalleryVerticalEnd className="text-white" />
          <span className="text-white text-sm pl-2">Your Vision, Our Code</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold text-white mb-6">Saylani Tech Limited</h1>

        {/* Description */}
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
          Transforming businesses with custom software solutions and innovative
          technology expertise.
        </p>
      </div>

      {/* Scroll Down Indicator */}
<div className="absolute bottom-6 w-full flex justify-center z-10">
  <div className="flex items-center text-white text-sm animate-bounce">
    Scroll more, learn more
    <ChevronsDown className="text-white ml-2 w-4 h-4" />
  </div>
</div>


    </div>
  );
}
