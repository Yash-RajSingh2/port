import styled from 'styled-components';

export const LandingContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem 2rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
`;

export const TextSection = styled.div`
  font-family: Bitter;
  
  p {
    font-size: 5rem;
    color: var(--text);
    margin-bottom: 1rem;
    line-height: 1;
    font-family: inherit;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeSlideUp 0.8s ease-out forwards;
  }
  
  span {
    font-size: 2.4rem;
    color: var(--text);
    line-height: 1.65;
    font-family: inherit;
    margin-top: 30px;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeSlideUp 0.8s ease-out 0.4s forwards;
  }

  @keyframes fadeSlideUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.img`
  max-width: 90%;
  height: auto;
  opacity: 0;
  animation: bounceScale 1s ease-in 1s both;

  @keyframes bounceScale {
    0% {
      opacity: 0;
      transform: scale(1);
    }
    10% {
      opacity: 1;
    }
    50% {
      opacity: 1;
      transform: scale(1.1);
    }
    70% {
      opacity: 1;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`; 

export const DiagonalLines: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "50vw",
        height: "20rem",
        zIndex: -1,
        pointerEvents: "none", 
        marginLeft: "-10rem",
      }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="diagonal-stripes"
            patternUnits="userSpaceOnUse"
            width="10"
            height="10"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y="0"
              x2="0"
              y2="20"
              stroke="#b4e3ee"
              strokeWidth="4"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#diagonal-stripes)" />
      </svg>
    </div>
  );
};