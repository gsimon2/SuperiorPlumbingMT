import { render } from "@testing-library/react";
import JsonLd from "./JsonLd";

describe("JsonLd", () => {
   it("serializes the data into an ld+json script tag", () => {
      const { container } = render(<JsonLd data={{ "@type": "WebSite", name: "Site" }} />);

      const script = container.querySelector('script[type="application/ld+json"]');
      expect(JSON.parse(script!.innerHTML)).toEqual({ "@type": "WebSite", name: "Site" });
   });

   it("escapes < so embedded markup cannot close the script tag", () => {
      const { container } = render(<JsonLd data={{ name: "</script><b>x</b>" }} />);

      const script = container.querySelector("script")!;
      expect(script.innerHTML).not.toContain("</script>");
      expect(JSON.parse(script.innerHTML).name).toBe("</script><b>x</b>");
   });
});
