import Button from "../components/common/Button";
import InputText from "../components/common/InputText";
import Title from "../components/common/Title";

function Home() {
  return (
    <>
      <Title size="medium">title</Title>
      <Button size="large" scheme="normal">button</Button>
      <InputText placeholder="여기에 입력하세요." />
      <div>book store</div>
    </>
  );
};

export default Home;