import React from "react";
import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";

const rotate = keyframes`
    to {
      transform: rotate(.5turn);
    }
  `;

const CustomLoader = styled.div`
  width: 50px;
  height: 50px;
  --c: radial-gradient(farthest-side, #2186eb 92%, #0000);
  background: var(--c) 50% 0, var(--c) 50% 100%, var(--c) 100% 50%,
    var(--c) 0 50%;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  animation: ${rotate} 1s infinite;
  position: absolute;
`;
const Loader = () => {
  const primaryColor = useSelector((state) => state?.user?.settings?.fontColor);
  const secondaryColor = useSelector(
    (state) => state?.user?.settings?.fontColor2
  );

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-white/70 flex items-center justify-center z-10">
      <CustomLoader
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
    </div>
  );
};

export default Loader;
