import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";

function Text() {
  gsap.registerPlugin(ScrollTrigger);
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  useEffect(() => {
    const splitTypes = document.querySelectorAll(".reveal-type");
    splitTypes.forEach((char, i) => {
      const bg = "#757372";
      const fg = "#FFFFFF";
      const text = new SplitType(char, { types: "chars" });

      gsap.fromTo(
        text.chars,
        {
          color: bg,
        },
        {
          color: fg,
          duration: 0.3,
          stagger: 0.02,
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 24%",
            scrub: true,
            markers: false,
            toggleActions: "play play reverse reverse",
          },
        }
      );
    });
  }, []);
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[750px] text-5xl font-semibold">
        <section>
          <p className="reveal-type" bgcolor="#cccccc" fgcolor="red">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nuncvulputate libero et velit interdum, ac aliquet odio mattis.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Text;
