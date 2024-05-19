import DemoSection from "./components/DemoSection";
import HeaderSection from "./components/HeaderSection";
import UploadForm from "./components/UploadForm";
export default function Home() {

  return (
    <>
      <HeaderSection h1Text={"Add Captions to your videos effortlessly"}
      h2Text={"Just Upload The Video and We Will Do The Rest!"} />
      <div className="text-center">
        <UploadForm />
      </div>
     <DemoSection />
    </>
  );
}
