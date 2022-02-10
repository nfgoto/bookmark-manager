import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { Snackbar } from "@mui/material";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
} from "@mui/material";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../lib/http";
import { Alert } from "./Alert";

export const AddLinkForm = function TextFieldHiddenLabel() {
  const [link, setLink] = useState<string>();
  const [provider, setProvider] = useState<string>("flickr");
  const [errors, setErrors] = useState<{ link: string }>();
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string>();
  const navigate = useNavigate();

  const handleLinkChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setErrors({ link: "" });
    setLink(value.trim());
    const urlValidation = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm.test(
      value
    );
    !urlValidation && setErrors({ link: "invalid URL" });
  };

  const handleProviderChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setProvider(value);
  };

  const onSave = async () => {
    try {
      await axiosInstance.post("/v1/link", { provider, consumerUrl: link });
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
      <TextField
        value={link}
        error={!!errors?.link}
        onChange={handleLinkChange}
        label="Link"
        id="consumer-url"
        placeholder="enter a link"
        size="medium"
        required
        helperText={errors?.link}
      />
      <FormControl>
        <FormLabel id="oembed-provider-selection" style={{ textAlign: "left" }}>
          Provider:
        </FormLabel>
        <RadioGroup
          aria-labelledby="oembed-provider-selection"
          defaultValue="flickr"
          name="radio-buttons-group"
          value={provider}
          onChange={handleProviderChange}
        >
          <FormControlLabel value="flickr" control={<Radio />} label="Flickr" />
          <FormControlLabel value="vimeo" control={<Radio />} label="Vimeo" />
        </RadioGroup>
      </FormControl>
      <Button
        color="primary"
        variant="contained"
        onClick={onSave}
        disabled={!link || !!errors?.link}
      >
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
