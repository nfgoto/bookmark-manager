import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../lib/http";
import { LinkMetadata } from "../types";
import { Snackbar } from "@mui/material";
import { Alert } from "./Alert";
import { AxiosError } from "axios";

interface Props {
  data: LinkMetadata;
}

export const EditLinkForm = ({ data }: Props): JSX.Element => {
  const navigate = useNavigate();
  const [url] = useState<string>(data.url);
  const [title] = useState<string>(data.title);
  const [linkType] = useState<string>(data.type);
  const [author] = useState<string>(data.author);
  const [uploadDate] = useState<Date>(data.uploadDate);
  const [width] = useState<number>(data.width);
  const [height] = useState<number>(data.height);
  const [duration] = useState<number | undefined>(data.duration);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string>();

  const onSave = async () => {
    try {
      await axiosInstance.put("/v1/link", { tags: [] });
      navigate("/");
    } catch (error) {
      setAlertMessage(
        (error as AxiosError)?.response?.data?.message ??
          (error as Error)?.message
      );
      setOpen(true);
    }
  };

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack
      component="form"
      sx={{
        width: "50ch",
        paddingTop: "5vh",
      }}
      spacing={2}
      autoComplete="off"
    >
      <TextField value={url} label="URL" id="link-url" size="medium" disabled />
      <TextField
        value={title}
        label="Title"
        id="link=title"
        size="medium"
        disabled
      />
      <TextField
        value={linkType}
        label="Type"
        id="link-type"
        size="medium"
        disabled
      />
      <TextField
        value={author}
        label="Author"
        id="author"
        size="medium"
        disabled
      />
      <TextField
        value={uploadDate}
        label="Upload Date"
        id="upload-date"
        size="medium"
        disabled
      />
      <TextField
        value={width}
        label="Width"
        id="media-width"
        size="medium"
        disabled
      />
      <TextField
        value={height}
        label="Height"
        id="media-height"
        size="medium"
        disabled
      />
      {duration && (
        <TextField
          value={duration}
          label="Duration"
          id="media-duration"
          size="medium"
          disabled
        />
      )}
      <Button color="primary" variant="contained" onClick={onSave}>
        SAVE
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
};
