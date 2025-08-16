import { useMemo, StrictMode } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { Box, Button, IconButton, Link, Modal, TextField, Tooltip, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link as RouterLink } from "react-router-dom";
import React from 'react';

type Player = {
  nickname: string;
  lastShiny: string;
  totalShiny: number;
}

const data: Player[] = [
  { nickname: 'Azien', lastShiny: 'Haunter', totalShiny: 18 },
  { nickname: 'Lightyear', lastShiny: 'Ratata', totalShiny: 1 },
  { nickname: 'Kadu', lastShiny: 'Marowack', totalShiny: 1 },
  { nickname: 'Gege', lastShiny: '', totalShiny: 0 },
];

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AdminPlayers() {

  // Modal Excluir
  const [openDelete, setOpenDelete] = React.useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  // Modal Adicionar
  const [openAdd, setOpenAdd] = React.useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const columns = useMemo<MRT_ColumnDef<Player>[]>(() => [
    {
      accessorKey: 'nickname',
      header: 'NICKNAME',
      size: 150,
    },
    {
      accessorKey: 'lastShiny',
      header: 'LAST SHINY',
      size: 150,
    },
    {
      accessorKey: 'totalShiny',
      header: 'TOTAL SHINY',
      size: 100,
    },
    {
      id: 'edit',
      header: 'EDIT',
      Cell: () => (
        <StrictMode>
          <Link component={RouterLink} to="/admin-player-catches" underline="none" color="inherit">
            <Tooltip title="Editar Player" placement="bottom" arrow>
              <IconButton color='inherit'><EditIcon /></IconButton>
            </Tooltip>
          </Link>

          <Tooltip title="Excluir Player" placement="bottom" arrow>
            <IconButton onClick={handleOpenDelete}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </StrictMode>
      ),
      muiTableHeadCellProps: { align: 'right' },
      muiTableBodyCellProps: { align: 'right' },
    },
  ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableFullScreenToggle: false,
    enableColumnActions: false,
    enableColumnFilters: false,
    enableDensityToggle: false,
    enableHiding: false,
    muiTableHeadCellProps: { align: 'center' },
    muiTableBodyCellProps: { align: 'center' },

    // Toolbar customizada
    renderTopToolbarCustomActions: () => (
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', px: 2, alignItems: 'center' }}>
        {/* Esquerda: Nome do time + botão Add */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="h4">Time Panelinha</Typography>
          <Tooltip title="Adicionar Player" arrow>
            <IconButton onClick={handleOpenAdd} color="success">
              <AddCircleIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    ),
  });

  return (
    <StrictMode>
      <Box sx={{ width: '80%', mx: 'auto', my: 3, p: 3 }}>
        <MaterialReactTable table={table} />
      </Box>

      {/* Modal Excluir */}
      <Modal
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Tem certeza que deseja excluir esse Player?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Depois de excluído não terá mais volta, apagará tudo e será preciso cadastrar outro.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, gap: 2 }}>
            <Button variant="contained" color="success" onClick={handleCloseDelete}>
              Confirmar
            </Button>
            <Button variant="contained" color="error" onClick={handleCloseDelete}>
              Excluir
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Modal Adicionar */}
      <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby="modal-add-title"
        aria-describedby="modal-add-description"
      >
        <Box sx={style}>

          <Typography variant="h5" textAlign="center">
            Adicionar Player
          </Typography>

          <Box
            component="form"
            sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}
            onSubmit={(e) => {
              e.preventDefault();
              // Aqui add a lógica de adicionar player
              handleCloseAdd();
            }}
          >
            <TextField
              label="Nickname"
              placeholder="Ex.: DeusBruno"
              required
              fullWidth
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
              <Button variant="contained" type="submit">
                Adicionar
              </Button>
              <Button variant="contained" onClick={handleCloseAdd}>
                Cancelar
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </StrictMode>
  );
}
