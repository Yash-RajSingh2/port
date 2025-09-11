import React, { useState } from "react";
import type { WorkProps } from "./Work.interfaces";
import {
  AnimatedSeeMoreButton,
} from "./WorkComponents";
import { Container, AnimatedContentWrapper } from "@components/Common/CommonComponents";
import { AboutTitle } from "@components/About/AboutComponents";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ExperienceCardItem } from "./ExperienceCardItem";

const Work: React.FC<WorkProps> = ({ experiences }) => {
  const [showAll, setShowAll] = useState(false);
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  const { elementRef: buttonRef, isIntersecting: buttonVisible } = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px',
  });

  // Show first 3 experiences initially, all when showAll is true
  const displayedExperiences = showAll ? experiences : experiences?.slice(0, 3);

  return (
    <Container minHeight="100vh" ref={elementRef}>
      <AnimatedContentWrapper alignItems="flex-start" gap="6rem" flexDirection="column" isVisible={isIntersecting}>
        <AboutTitle>Experience</AboutTitle>
        {displayedExperiences?.map((exp, idx) => (
          <ExperienceCardItem 
            key={idx} 
            experience={exp}
            index={idx}
          />
        ))}

        {experiences && experiences.length > 3 && (
          <AnimatedSeeMoreButton 
            ref={buttonRef}
            onClick={() => setShowAll(!showAll)}
            isVisible={buttonVisible}
            delay={0.2}
          >
            {showAll ? "See Less" : "See More"}
          </AnimatedSeeMoreButton>
        )}
      </AnimatedContentWrapper>
    </Container>
  );
};

export default Work;
