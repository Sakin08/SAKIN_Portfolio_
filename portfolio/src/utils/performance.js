// Performance monitoring utilities

export const measurePerformance = () => {
  if (typeof window !== "undefined" && "performance" in window) {
    // Measure page load time
    window.addEventListener("load", () => {
      const loadTime =
        performance.timing.loadEventEnd - performance.timing.navigationStart;
      console.log(`Page load time: ${loadTime}ms`);

      // Send to analytics if available
      if (typeof gtag !== "undefined") {
        gtag("event", "page_load_time", {
          event_category: "Performance",
          event_label: "Load Time",
          value: Math.round(loadTime),
        });
      }
    });

    // Measure Core Web Vitals (optional - only if web-vitals is installed)
    try {
      import("web-vitals")
        .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => console.log("CLS:", metric));
          getFID((metric) => console.log("FID:", metric));
          getFCP((metric) => console.log("FCP:", metric));
          getLCP((metric) => console.log("LCP:", metric));
          getTTFB((metric) => console.log("TTFB:", metric));
        })
        .catch(() => {
          // web-vitals not installed, skip Core Web Vitals measurement
          console.log(
            "web-vitals package not found - skipping Core Web Vitals measurement",
          );
        });
    } catch (error) {
      // Dynamic import not supported or other error
      console.log("Core Web Vitals measurement not available");
    }
  }
};

// Lazy loading utility
export const lazyLoadImages = () => {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalImages = ["/profile.jpg", "/sustconnect.png", "/medicare.png"];

  criticalImages.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });
};
