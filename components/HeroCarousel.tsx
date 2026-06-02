"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const images = [
  {
    image: "/images/cozinha-1.webp",
    title: "Cozinha",
  },
  {
    image: "/images/cozinha-2.webp",
    title: "Cozinha",
  },
  {
    image: "/images/cozinha-3.webp",
    title: "Cozinha",
  },
  {
    image: "/images/cozinha-4.webp",
    title: "Cozinha",
  },
  {
    image: "/images/closet-1.webp",
    title: "Closet",
  },
  {
    image: "/images/closet-2.webp",
    title: "Closet",
  },
  {
    image: "/images/quarto-1.webp",
    title: "Quarto",
  },
  {
    image: "/images/quarto-2.webp",
    title: "Quarto",
  },
  {
    image: "/images/quarto-3.webp",
    title: "Quarto",
  },
  {
    image: "/images/quarto-4.webp",
    title: "Quarto",
  },
  {
    image: "/images/home-office-1.webp",
    title: "Home Office",
  },
];

export function HeroCarousel() {
  return (
    <aside className="hero-card" aria-label="Ambientes planejados">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop
      >
              {images.map((item) => (
                  <SwiperSlide key={item.image}>
                      <div className="hero-slide">
                          <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              priority
                          />

                          <div className="hero-overlay">
                              <span>{item.title}</span>
                          </div>
                      </div>
                  </SwiperSlide>
              ))}
      </Swiper>
    </aside>
  );
}