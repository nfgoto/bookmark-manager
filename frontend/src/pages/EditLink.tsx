import { useLocation } from "react-router-dom";

export const EditLink = (): JSX.Element => {
  const { state } = useLocation();
  console.log(state);

  return <div>Edit</div>;
};
