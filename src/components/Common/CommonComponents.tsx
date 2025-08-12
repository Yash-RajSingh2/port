import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem 2rem;
  background: var(--background);
`;

export const ContentWrapper = styled.div<{ flexDirection?: 'row' | 'column', alignItems?: 'center' | 'flex-start' , gap?: string }>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  align-items: ${props => props.alignItems || 'center'};
  gap: ${props => props.gap || '4rem'};
  max-width: 1200px;
  width: 100%;
`;

export const Button = styled.p`
  color: var(--line);
  z-index: 2;
  padding: 15px 45px;
  letter-spacing: 0.1rem;
  border: 3px solid var(--line);
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-weight: 700;
  &:hover {
    background: var(--fill);
    color: var(--bg);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--fill);
  }
`; 