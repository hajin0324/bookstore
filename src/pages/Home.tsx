import MainReview from "@/components/main/MainReview";
import { useMain } from "@/hooks/useMain";
import styled from "styled-components";

function Home() {
  const { reviews } = useMain();

  return (
    <Homestyle>


      <MainReview reviews={reviews} />
    </Homestyle>
  );
};

const Homestyle = styled.div``;

export default Home;