import styled from "styled-components";
import { AboutTitle } from "@components/About/AboutComponents";

// Reusable animated section title
export const SectionTitle = styled(AboutTitle)<{
  isVisible?: boolean;
  delay?: number;
  alignment?: "left" | "center";
  customFontSize500?: string;
}>`
  text-align: ${(props) => props.alignment || "left"} !important;
  align-self: ${(props) =>
    props.alignment === "center" ? "center" : "flex-start"};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "30px")});
  transition:
    opacity 0.6s ease ${(props) => props.delay || 0}s,
    transform 0.6s ease ${(props) => props.delay || 0}s;

  span {
    color: var(--subtext);
  }
  &::after {
    bottom: calc(-10px - 2rem);
    left: ${(props) => (props.alignment === "center" ? "50%" : "0")} !important;
    transform: ${(props) =>
      props.alignment === "center"
        ? "translateX(-50%)"
        : "translateX(0)"} !important;
    @media (max-width: 1000px) {
      bottom: calc(-10px - 0.5rem);
    }
  }
  @media (max-width: 1224px) {
    font-size: 3rem;
  }
  @media (max-width: 1000px) {
    font-size: 2.625rem;
  }
  @media (max-width: 500px) {
    font-size: ${(props) => props.customFontSize500 || "1.8rem"};
  }
`;

// SectionContainer has been consolidated into the enhanced Container component in CommonComponents.tsx
// Use Container with appropriate props instead:
// <Container minHeight="80vh" padding="4rem 2rem" isRelative hasOverflow />

// Reusable grid/flex container for cards
export const CardsContainer = styled.div<{
  isVisible?: boolean;
  layout?: "grid" | "flex";
  minCardWidth?: string;
}>`
  display: ${(props) => props.layout || "flex"};
  ${(props) =>
    props.layout === "grid"
      ? `grid-template-columns: repeat(auto-fit, minmax(${props.minCardWidth || "250px"}, 1fr));`
      : `flex-wrap: wrap; justify-content: space-evenly;`}
  gap: 4rem;
  width: 100%;
  margin: 5rem 0 1rem;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "40px")});
  transition:
    opacity 0.8s ease 0.2s,
    transform 0.8s ease 0.2s;
  padding-bottom: 2rem;
  @media (max-width: 768px) {
    gap: 1.5rem;
    justify-content: center;
  }
  @media (max-width: 500px) {
    gap: 4rem;
  }
`;

// Reusable animated card base
export const AnimatedCard = styled.div<{
  isVisible?: boolean;
  delay?: number;
  width?: string;
}>`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "30px")});
  transition: all 0.6s ease ${(props) => props.delay || 0}s;
  width: ${(props) => props.width || "auto"};
  flex-shrink: 0;
`;
