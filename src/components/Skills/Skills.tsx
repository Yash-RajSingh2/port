import React, { useMemo } from "react";
import {
  ContentWrapper,
  Container,
} from "@/components/Common/CommonComponents";
import { SectionTitle } from "@/components/Common/SectionComponents";
import {
  SkillCard,
  SkillsCloudContainer,
} from "@/routes/pages/about/AboutComponents";
import { skills } from "@/data/skills";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Skills: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  });

  // Generate random positions for skills (memoized to prevent re-positioning on re-renders)
  const skillPositions = useMemo(() => {
    return skills.map((_, index) => {
      // Create a more natural cloud-like distribution
      const angle = (index * 137.5) % 360; // Golden angle for natural distribution
      const radius = 20 + (index % 3) * 15; // Varying distances from center
      const centerX = 50;
      const centerY = 50;

      // Convert polar to cartesian coordinates
      const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
      const y = centerY + radius * Math.sin((angle * Math.PI) / 180);

      // Ensure positions stay within bounds
      const boundedX = Math.max(5, Math.min(85, x));
      const boundedY = Math.max(10, Math.min(80, y));

      return {
        top: `${boundedY}%`,
        left: `${boundedX}%`,
        animationDelay: `${index * 0.1}s`,
      };
    });
  }, []);

  return (
    <Container
      minHeight="80vh"
      maxHeight="85vh"
      padding="4rem 2rem"
      isRelative
      hasOverflow
      ref={elementRef}
      topMargin="15rem"
    >
      <ContentWrapper flexDirection="column" alignItems="flex-start" gap="4rem">
        <SectionTitle isVisible={isIntersecting} alignment="left">
          My Skills<span>.</span>
        </SectionTitle>
        <SkillsCloudContainer>
          {skills.map((skill, index) => (
            <SkillCard
              key={skill}
              top={skillPositions[index].top}
              left={skillPositions[index].left}
              animationDelay={skillPositions[index].animationDelay}
              isVisible={isIntersecting}
            >
              {skill}
            </SkillCard>
          ))}
        </SkillsCloudContainer>
      </ContentWrapper>
    </Container>
  );
};

export default Skills;
