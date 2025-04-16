"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // التحكم في إظهار/إخفاء الزر بناءً على التمرير
  useEffect(() => {
    const toggleVisibility = () => {
      // يظهر الزر بعد التمرير 300 بكسل
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // الانتقال إلى أعلى الصفحة
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="cursor-pointer fixed bottom-8 right-8 bg-sky-900 text-white p-3 rounded-full shadow-lg hover:bg-sky-700 transition-all z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
