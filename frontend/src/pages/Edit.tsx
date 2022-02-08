import { useLocation } from "react-router-dom";

export default (): JSX.Element => {
  const { state } = useLocation();
  console.log(state);

  return <div>Edit</div>;
};
