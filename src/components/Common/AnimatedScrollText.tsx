import React from "react";
import styled from "styled-components";
import {
  ScrollSection,
  ScrollText,
  BouncingLetter,
} from "@components/Landing/LandingComponents";

interface ResponsiveStyle {
  maxWidth?: number;
  minWidth?: number;
  topMargin?: string;
  alignment?: "left" | "center" | "right";
}

const ConfigurableScrollSection = styled(ScrollSection)<{
  $topMargin?: string;
  $responsiveStyles?: ResponsiveStyle[];
}>`
  margin-top: ${(props) => props.$topMargin || "0"};

  ${(props) =>
    props.$responsiveStyles &&
    props.$responsiveStyles
      .map((style) => {
        const mediaQuery =
          style.minWidth && style.maxWidth
            ? `@media (min-width: ${style.minWidth}px) and (max-width: ${style.maxWidth}px)`
            : style.maxWidth
              ? `@media (max-width: ${style.maxWidth}px)`
              : style.minWidth
                ? `@media (min-width: ${style.minWidth}px)`
                : "";

        return `
      ${mediaQuery} {
        ${style.topMargin ? `margin-top: ${style.topMargin} !important;` : ""}
        ${
          style.alignment
            ? `
          text-align: ${style.alignment};
          display: flex;
          justify-content: ${style.alignment === "center" ? "center" : style.alignment === "right" ? "flex-end" : "flex-start"};
          
          &::after {
            ${
              style.alignment === "center"
                ? `
              left: 50%;
              transform: translateX(-50%);
            `
                : `
              left: 25px;
            `
            }
          }
        `
            : ""
        }
      }
    `;
      })
      .join("")}
`;

interface AnimatedScrollTextProps {
  text: string;
  letterDelay?: number;
  topMargin?: string;
  responsiveStyles?: ResponsiveStyle[];
}

export const AnimatedScrollText: React.FC<AnimatedScrollTextProps> = ({
  text,
  letterDelay = 0.1,
  topMargin,
  responsiveStyles,
}) => {
  return (
    <ConfigurableScrollSection
      $topMargin={topMargin}
      $responsiveStyles={responsiveStyles}
    >
      <ScrollText>
        {text.split("").map((letter, index) => (
          <BouncingLetter key={index} delay={index * letterDelay}>
            {letter}
          </BouncingLetter>
        ))}
      </ScrollText>
    </ConfigurableScrollSection>
  );
};
