import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button">
        <span className="button-content">Download </span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    position: relative;
    overflow: hidden;
    height: 3rem;
    padding: 0 2rem;
    border-radius: 1.5rem;
    background: transparent;
    background-size: 400%;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .button:hover::before {
    transform: scaleY(1);
  }

  .button-content {
    position: relative;
    z-index: 1;
  }

  .button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleY(0);
    transform-origin: bottom;
    width: 100%;
    height: inherit;
    border-radius: inherit;
    background: linear-gradient(
      82.3deg,
      rgba(150, 93, 233, 1) 10.8%,
      rgba(99, 88, 238, 1) 94.3%
    );
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .button:active {
    scale: 0.9;
  }`;

export default Button;
