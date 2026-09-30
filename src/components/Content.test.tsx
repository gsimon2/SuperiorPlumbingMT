import { render, screen } from "@/test-utils/render";
import Content from "./Content";
import MainContentWrapper from "./MainContentWrapper";
import ParallaxContainer from "./ParallaxContainer";

describe("Content", () => {
   it("renders its children", () => {
      render(<Content>Hello there</Content>);

      expect(screen.getByText("Hello there")).toBeInTheDocument();
   });

   it("forwards className and extra props to the container", () => {
      render(
         <Content className="custom" data-testid="content">
            Body
         </Content>
      );

      expect(screen.getByTestId("content")).toHaveClass("custom");
   });

   it("adds a gold border when bold", () => {
      render(
         <Content bold data-testid="content">
            Bold body
         </Content>
      );

      // jsdom drops shorthand values containing CSS variables, so inspect the raw attribute.
      expect(screen.getByTestId("content").getAttribute("style")).toContain(
         "border: 2px solid var(--mantine-color-gold-5)"
      );
   });

   it("uses a regular border when not bold", () => {
      render(<Content data-testid="content">Body</Content>);

      expect(screen.getByTestId("content")).toHaveAttribute("data-with-border", "true");
   });
});

describe("MainContentWrapper", () => {
   it("wraps children in the main landmark", () => {
      render(
         <MainContentWrapper>
            <p>Page body</p>
         </MainContentWrapper>
      );

      expect(screen.getByRole("main")).toContainElement(screen.getByText("Page body"));
   });
});

describe("ParallaxContainer", () => {
   it("uses the image path as a fixed background", () => {
      render(
         <ParallaxContainer imagePath="/assets/hero.jpg">
            <span>Overlay</span>
         </ParallaxContainer>
      );

      const container = screen.getByText("Overlay").parentElement;
      expect(container).toHaveStyle({
         backgroundImage: "url(/assets/hero.jpg)",
         backgroundAttachment: "fixed",
      });
   });
});
