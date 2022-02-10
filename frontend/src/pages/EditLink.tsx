import { useLocation } from "react-router-dom";
import { EditLinkForm } from "../components/EditLinkForm";
import { LinkMetadata } from "../types";

export const EditLink = (): JSX.Element => {
  const data = useLocation().state as LinkMetadata;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <EditLinkForm data={data} />
    </div>
  );
};
