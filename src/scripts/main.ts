import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const header = document.querySelector<HTMLElement>("[data-header]");
let lenis: Lenis | undefined;

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 16);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

if (!prefersReducedMotion) {
  lenis = new Lenis({
    duration: 1.25,
    easing: (time: number) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
    smoothWheel: true,
  });

  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 86%",
        once: true,
      },
    });
  });

  gsap.utils.toArray<HTMLElement>("[data-parallax-card] img").forEach((image) => {
    gsap.fromTo(
      image,
      { scale: 1.06, yPercent: -3 },
      {
        scale: 1,
        yPercent: 3,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });
} else {
  document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
    element.style.opacity = "1";
    element.style.transform = "none";
  });
}

const lightbox = document.querySelector<HTMLDialogElement>("[data-lightbox]");
const lightboxImage = document.querySelector<HTMLImageElement>("[data-lightbox-image]");
const lightboxCaption = document.querySelector<HTMLElement>("[data-lightbox-caption]");
const closeButton = document.querySelector<HTMLButtonElement>("[data-lightbox-close]");

const closeLightbox = () => {
  lightbox?.close();
  document.body.classList.remove("lightbox-open");
};

document.querySelectorAll<HTMLButtonElement>("[data-gallery-image]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!lightbox || !lightboxImage || !lightboxCaption) {
      return;
    }

    lightboxImage.src = button.dataset.galleryImage ?? "";
    lightboxImage.alt = button.dataset.galleryAlt ?? "";
    lightboxCaption.textContent = button.dataset.galleryCaption ?? "";
    lightbox.showModal();
    document.body.classList.add("lightbox-open");
    closeButton?.focus();
  });
});

closeButton?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox?.open) {
    closeLightbox();
  }
});

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector<HTMLElement>(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    if (lenis && !prefersReducedMotion) {
      lenis.scrollTo(target, { offset: -80 });
    } else {
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    }

    history.pushState(null, "", targetId);
  });
});

document.querySelectorAll<HTMLElement>("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
