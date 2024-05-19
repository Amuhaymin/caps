export default function HeaderSection({
  h1Text= 'header1',
  h2Text= 'header2',
}){
  return(
    <div className="text-center mt-16 mb-8"> 
    <h1
      className="text-2xl"
    >
      {h1Text}
    </h1>
    <h2 className="text-black/100">
      {h2Text}
    </h2>
  </div>
  );
}