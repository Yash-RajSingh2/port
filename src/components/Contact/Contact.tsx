import React from 'react';
import type { ContactProps } from './Contact.interfaces';
import {
  ContactContainer,
  ContactTitle,
  ContactDescription,
  ContactButton,
  Circles,
} from './ContactComponents';

const Contact: React.FC<ContactProps> = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:your-email@example.com?subject=Let\'s Collaborate!&body=Hi Yash,%0D%0A%0D%0AI\'d love to discuss a potential collaboration opportunity with you.%0D%0A%0D%0ABest regards,';
  };

  return (
    <ContactContainer>
      <Circles />
      <ContactTitle>Let's Collaborate</ContactTitle>
      <ContactDescription>
        I'm always excited to work on innovative projects and collaborate with 
        passionate individuals. Whether you have an idea that needs bringing to life, 
        a challenging problem to solve, or just want to chat about technology, 
        I'd love to hear from you!
      </ContactDescription>
      <ContactButton onClick={handleEmailClick}>
        Get In Touch
      </ContactButton>
    </ContactContainer>
  );
};

export default Contact; 