import Hero from "../components/Home/HomePageElements/Hero";
import Table from "../components/Home/HomePageElements/Table";
import ImageUploader from "../components/ImageRecognition/ImageUploader";
// import NewApiComponent from "../components/Home/HomePageElements/NewApiComponent";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <ImageUploader></ImageUploader>
      <Table></Table>
    </>
  );
}
