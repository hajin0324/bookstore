import { FaSpinner } from "react-icons/fa";
import styled from "styled-components";

function Loading() {
  return (
    <Loadingstyle>
      <FaSpinner />
    </Loadingstyle>
  );
};

const Loadingstyle = styled.div`
  padding: 40px 0;
  text-align: center;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  svg {
    width: 70px;
    height: 70px;
    fill: #ccc;
    animation: rotate 1s linear infinite;
  }
`;

export default Loading;