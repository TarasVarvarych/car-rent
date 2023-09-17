import { ColorRing } from "react-loader-spinner";
export function Loader() {
  return (
    <ColorRing
      visible={true}
      height="100"
      width="100"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "999",
      }}
      wrapperClass="blocks-wrapper"
      colors={["#3470FF", "#0B44CD", "#0B44CD", "#0B44CD", "#3470FF"]}
    />
  );
}
