"use client";
import Image from "next/image";
import CookiesService from "../../service";
import { categories, features } from "../../data/data";
import { useRouter } from "next/navigation";
import Left from "../../public/left-side.png";
import Right from "../../public/right-side.png";

export default function Home() {
  const token = CookiesService.get("UserToken");
  const txt = token ? "Start Learning" : "Get Started";
  const route = useRouter();

  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#f0fdf9] via-[#f8fafc] to-[#e0f2fe] h-[700px] flex items-center justify-center px-6">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={Left}
            width={500}
            alt="Tech Logos"
            className="absolute left-0 top-0 h-full opacity-80 lg:opacity-100 object-cover hidden lg:block filter brightness-105 contrast-105"
          />
          <Image
            src={Right}
            width={500}
            alt="Tech Logos"
            className="absolute right-0 top-0 h-full opacity-80 lg:opacity-100 object-cover hidden lg:block filter brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/60" />
        </div>

        <div className="text-center max-w-2xl z-10 px-4">
          {!token && (
            <div className="mb-6 inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 bg-white/90 backdrop-blur-md shadow-sm hover:shadow-md transition-all">
              Start Your Tech Journey Today
            </div>
          )}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Turn Knowledge <span className="text-[#42D5AE]">into Action</span>
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#42D5AE] to-[#022639] mx-auto rounded-full mb-8" />
          <p className="mt-6 text-gray-700 text-xl leading-relaxed max-w-2xl mx-auto">
            Build real-world projects and apply your technical skills in our
            immersive, hands-on learning environment.
          </p>
          <div className="mt-12 flex justify-center gap-4">
            <button
              onClick={() => route.push(token ? "/Learn" : "/User")}
              className="bg-gradient-to-r from-[#42D5AE] to-[#38b28d] text-white font-medium px-8 py-3.5 rounded-lg shadow-lg transition-all"
            >
              {txt}
            </button>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="bg-[#f8fafc] py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore Categories
            </h2>
            <div className="w-44 h-1.5 bg-gradient-to-r from-[#42D5AE] to-[#022639] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {categories.map(({ Icon, title, style }, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center p-6 cursor-pointer"
                onClick={() => route.push(`/Learn/${title}`)}
              >
                <div className="p-4 rounded-full mb-4 group-hover:bg-[#42D5AE]/10 transition-colors">
                  <Icon className={`${style} text-xl`} />
                </div>
                <h3 className="text-base font-semibold text-gray-800">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 bg-gradient-to-b from-white to-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <div className="w-44 h-1.5 bg-gradient-to-r from-[#42D5AE] to-[#022639] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(({ Icon, title, description, style }, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="bg-[#42D5AE]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 mx-auto">
                  <Icon className={`${style} text-xl`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 text-center mb-3">
                  {title}
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
