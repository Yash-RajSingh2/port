import React from "react";
import type { AwardsProps } from "./Awards.interfaces";
import Layout from "@components/Layout/Layout";
import AwardsLanding from "@components/AwardsLanding/AwardsLanding";
import { AwardsList } from "@components/Awards/AwardsList";
import { AnimatedMoreComingMessage } from "./AwardsComponents";
import { awards } from "@/data/awards";
import {
  Container,
  AnimatedContentWrapper,
} from "@/components/Common/CommonComponents";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Awards: React.FC<AwardsProps> = () => {
  const { elementRef: listRef, isIntersecting: listVisible } =
    useIntersectionObserver({
      threshold: 0.05,
      rootMargin: "0px 0px -200px 0px",
    });

  const { elementRef: messageRef, isIntersecting: messageVisible } =
    useIntersectionObserver({
      threshold: 0.3,
      rootMargin: "0px 0px -100px 0px",
    });

  return (
    <Layout>
      <AwardsLanding />
      <Container
        style={{ padding: "0 2rem 0" }}
        topMargin="25rem"
        ref={listRef}
      >
        <AnimatedContentWrapper
          flexDirection="column"
          alignItems="flex-start"
          gap="2rem"
          isVisible={listVisible}
        >
          <AwardsList awards={awards} isVisible={listVisible} />

          <AnimatedMoreComingMessage
            ref={messageRef}
            isVisible={messageVisible}
            delay={0.3}
          >
            More achievements brewing in the pipeline
          </AnimatedMoreComingMessage>
        </AnimatedContentWrapper>
      </Container>
    </Layout>
  );
};

export default Awards;
