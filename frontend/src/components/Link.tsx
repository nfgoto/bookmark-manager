import { Link as RouterLink } from "react-router-dom";
import MuiLink from "@mui/material/Link";

interface Props {
  text: string;
  path: string;
  styles: React.CSSProperties;
}

export const Link = ({ text, path, styles = {} }: Props): JSX.Element => {
  return (
    <MuiLink component={RouterLink} to={path} style={styles}>
      {text}
    </MuiLink>
  );
};
