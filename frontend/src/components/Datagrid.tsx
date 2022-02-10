import { SyntheticEvent, useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { AxiosError } from "axios";
import Button from "@mui/material/Button";
import { Snackbar } from "@mui/material";

import { axiosInstance } from "../lib/http";
import { LinkMetadata } from "../types";
import { Alert } from "./Alert";

export default function DataGridComponent() {
  const [rows, setRows] = useState<LinkMetadata[]>(() => []);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string>();

  useEffect(() => {
    axiosInstance
      .get("/v1/links")
      .then(({ data }) => {
        setRows(data?.links);
      })
      .catch((error) => {
        setAlertMessage(
          (error as AxiosError)?.response?.data?.message ??
            (error as Error)?.message
        );
        setOpen(true);
      });
  }, []);

  const columns: GridColDef[] = [
    {
      field: "url",
      headerName: "URL",
      width: 340,
      renderCell: ({ value }) => (
        <a href={value} style={{ overflow: "auto" }}>
          {value}
        </a>
      ),
    },
    {
      field: "title",
      headerName: "Title",
      width: 340,
    },
    {
      field: "author",
      headerName: "Author",
      width: 150,
    },
    {
      field: "uploadDate",
      headerName: "Upload Date",
      type: "date",
      width: 200,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: ({ id, api }) => {
        const currentRow = api.getRow(id) as LinkMetadata;
        const { type: linkType } = currentRow;

        const handleEditClick = () => {
          navigate("/edit", { state: currentRow });
        };
        const handleDeleteClick = (e: any) => {
          // don't select this row after clicking
          e.stopPropagation();

          // delete on the backend
          axiosInstance
            .delete(`/v1/link/${linkType}/${id}`)
            .then(() => {
              // delete row
              api.updateRows([{ id, _action: "delete" }]);
            })
            .catch((error) => {
              setAlertMessage(
                (error as AxiosError)?.response?.data?.message ??
                  (error as Error)?.message
              );
              setOpen(true);
            });
        };
        return (
          <div>
            <Button onClick={handleEditClick}>
              <ModeEditIcon />
            </Button>
            <Button onClick={handleDeleteClick}>
              <DeleteIcon />
            </Button>
          </div>
        );
      },
    },
  ];

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div style={{ height: 600, width: "100%" }}>
      <Stack
        sx={{ width: "100%", mb: 1 }}
        direction="row"
        alignItems="flex-start"
        columnGap={1}
      >
        <Button
          size="small"
          onClick={() => {
            navigate("/add");
          }}
        >
          Add link
        </Button>
      </Stack>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[15]}
        disableSelectionOnClick
        showCellRightBorder
      />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
