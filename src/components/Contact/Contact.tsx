import React from "react";
import {
  AnimatedContactContainer,
  AnimatedContactTitle,
  AnimatedContactDescription,
  AnimatedContactButton,
} from "./ContactComponents";
import { Circles } from "@components/Common/CommonComponents";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Contact: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  });

  const handleEmailClick = () => {
    window.location.href =
      "mailto:your-email@example.com?subject=Let's Collaborate!&body=Hi Yash,%0D%0A%0D%0AI'd love to discuss a potential collaboration opportunity with you.%0D%0A%0D%0ABest regards,";
  };

  return (
    <AnimatedContactContainer ref={elementRef} isVisible={isIntersecting}>
      <Circles height="60%" width="50%" left="-30%" />
      <AnimatedContactTitle isVisible={isIntersecting} delay={0.1}>
        Let's Collaborate
      </AnimatedContactTitle>
      <AnimatedContactDescription isVisible={isIntersecting} delay={0.3}>
        I'm always excited to work on innovative projects and collaborate with
        passionate individuals. Whether you have an idea that needs bringing to
        life, a challenging problem to solve, or just want to chat about
        technology, I'd love to hear from you!
      </AnimatedContactDescription>
      <AnimatedContactButton
        onClick={handleEmailClick}
        isVisible={isIntersecting}
        delay={0.5}
      >
        Get In Touch
      </AnimatedContactButton>
    </AnimatedContactContainer>
  );
};

export default Contact;
