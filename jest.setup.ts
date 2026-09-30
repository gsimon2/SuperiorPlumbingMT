import "@testing-library/jest-dom";

// jsdom gaps that Mantine relies on: https://mantine.dev/guides/jest/
const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);
window.HTMLElement.prototype.scrollIntoView = () => {};

Object.defineProperty(window, "matchMedia", {
   writable: true,
   value: jest.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
   })),
});

class ResizeObserver {
   observe() {}
   unobserve() {}
   disconnect() {}
}
window.ResizeObserver = ResizeObserver;

class IntersectionObserver {
   readonly root = null;
   readonly rootMargin = "";
   readonly thresholds = [];
   observe() {}
   unobserve() {}
   disconnect() {}
   takeRecords() {
      return [];
   }
}
window.IntersectionObserver = IntersectionObserver;
