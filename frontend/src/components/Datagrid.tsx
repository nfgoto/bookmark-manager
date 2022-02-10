import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { axiosInstance } from "../lib/http";

export default function DataGridComponent() {
  const [rows, setRows] = useState(() => []);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get("/v1/links")
      .then(({ data }) => {
        setRows(data?.links);
      })
      .catch(console.error);
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
        const handleEditClick = () => {
          console.log("editing ", api.getRow(id));
          navigate("/edit", { state: {} });
        };
        const handleDeleteClick = (e: any) => {
          // don't select this row after clicking
          e.stopPropagation();

          // TODO: delete on the backend

          api.updateRows([{ id, _action: "delete" }]);
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
        pageSize={5}
        rowsPerPageOptions={[15]}
        disableSelectionOnClick
        showCellRightBorder
      />
    </div>
  );
}
