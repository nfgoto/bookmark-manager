import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

const _rows = [
  {
    id: 1,
    url: "https://vimeo.com/216330850",
    title: "Why Scala is always better than Node.js",
    author: "Scala Node",
    added: new Date().toISOString(),
  },
  {
    id: 2,
    url: "https://vimeo.com/216330850",
    title: "Why Scala is always better than Node.js",
    author: "Scala Node",
    added: new Date().toISOString(),
  },
  {
    id: 3,
    url: "https://vimeo.com/216330850",
    title: "Why Scala is always better than Node.js",
    author: "Scala Node",
    added: new Date().toISOString(),
  },
  {
    id: 4,
    url: "https://vimeo.com/216330850",
    title: "Why Scala is always better than Node.js",
    author: "Scala Node",
    added: new Date().toISOString(),
  },
];

export default function DataGridComponent() {
  const [rows] = useState(() => _rows);
  const navigate = useNavigate();

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
      field: "added",
      headerName: "Added",
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

  const handleAddRow = () => {
    // TODO: redirect to create link page
  };

  return (
    <div style={{ height: 600, width: "100%" }}>
      <Stack
        sx={{ width: "100%", mb: 1 }}
        direction="row"
        alignItems="flex-start"
        columnGap={1}
      >
        <Button size="small" onClick={handleAddRow}>
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
