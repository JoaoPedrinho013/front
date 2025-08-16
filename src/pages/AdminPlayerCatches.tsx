import { useMemo, StrictMode, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';


type Catch = {
  name: string;
  encounters: number;
  date: string;
  catch_method: string;
  status: string;
};

const data: Catch[] = [
  {
    name: 'Lucario',
    encounters: 5140,
    date: '2025-08-01',
    catch_method: 'Safari',
    status: 'Owned',
  },
  {
    name: 'Charmander',
    encounters: 8209,
    date: '2025-07-21',
    catch_method: 'Single Encounter',
    status: 'Owned',
  },
  {
    name: 'Larvitar',
    encounters: 34909,
    date: '2025-06-10',
    catch_method: 'Horde5x',
    status: 'Owned',
  },
  {
    name: 'Umbreon',
    encounters: 21080,
    date: '2025-08-02',
    catch_method: 'Egg',
    status: 'Owned',
  },
];

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#2c2c2c',
  border: '2px solid #000',
  color: 'white',
  boxShadow: 24,
  p: 4,
};

export default function AdminPlayerCatches() {
  // Modal Excluir
  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  // Modal Form (Add/Edit)
  const [openForm, setOpenForm] = useState(false);
  const [editingCatch, setEditingCatch] = useState<Catch | null>(null);

  const handleOpenAdd = () => {
    setEditingCatch(null);
    setOpenForm(true);
  };

  const handleOpenEdit = (row: Catch) => {
    setEditingCatch(row);
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setEditingCatch(null);
  };

  // Estados do formulário
  const [isRare, setIsRare] = useState(false);
  const [captureDate, setCaptureDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [encounters, setEncounters] = useState(0);

  const columns = useMemo<MRT_ColumnDef<Catch>[]>(
    () => [
      { accessorKey: 'name', header: 'NAME' },
      { accessorKey: 'encounters', header: 'ENCOUNTERS' },
      { accessorKey: 'date', header: 'CATCH DATE' },
      { accessorKey: 'catch_method', header: 'CATCH METHOD' },
      { accessorKey: 'status', header: 'SHINY STATUS' },
      {
        id: 'actions',
        header: 'ACTIONS',
        Cell: ({ row }) => (
          <StrictMode>
            <Tooltip title="Editar Pokemon" placement="bottom" arrow>
              <IconButton onClick={() => handleOpenEdit(row.original)} color="inherit">
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Excluir Pokemon" placement="bottom" arrow>
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
    renderTopToolbarCustomActions: () => (
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', px: 2, alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="h4">Azien</Typography>
          <Tooltip title="Adicionar Pokemon" arrow>
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
      <Modal open={openDelete} onClose={handleCloseDelete}>
        <Box sx={style}>
          <Typography variant="h6">
            Tem certeza que deseja excluir esse Pokemon?
          </Typography>
          <Typography sx={{ mt: 2 }}>
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

      {/* Modal Add/Edit */}
      <Modal open={openForm} onClose={handleCloseForm}>
        <Box sx={style}>
          <Typography variant="h5" textAlign="center" sx={{ color: "white" }}>
            {editingCatch ? "Editar Pokemon" : "Adicionar Pokemon"}
          </Typography>

          <Box
            component="form"
            sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}
            onSubmit={(e) => {
              e.preventDefault();
              const payload = {
                isRare,
                captureDate,
                encounters,
              };

              if (editingCatch) {
                console.log("Atualizando:", { ...editingCatch, ...payload });
              } else {
                console.log("Adicionando:", payload);
              }

              handleCloseForm();
            }}
          >
            <TextField
              select
              label="Pokemon"
              defaultValue={editingCatch?.name || ""}
              required
              fullWidth
            >
              <MenuItem value="Charmander">Charmander</MenuItem>
              <MenuItem value="Bulbassaur">Bulbassaur</MenuItem>
              <MenuItem value="Squirtle">Squirtle</MenuItem>
            </TextField>

            {/* Encontros */}
            <TextField
              label="Encontros"
              type="number"
              defaultValue={editingCatch?.encounters || 0}
              onChange={(e) => setEncounters(Number(e.target.value))}
              fullWidth
            />

            {/* Data de Captura */}
            <TextField
              label="Data de Captura"
              type="date"
              defaultValue={editingCatch?.date || new Date().toISOString().split("T")[0]}
              onChange={(e) => setCaptureDate(e.target.value)}
              fullWidth
            />

            <TextField
              select
              label="Catch Method"
              defaultValue={editingCatch?.catch_method || ""}
              required
              fullWidth
            >
              <MenuItem value="Single">Single</MenuItem>
              <MenuItem value="5xHorde">5xHorde</MenuItem>
              <MenuItem value="Safari">Safari</MenuItem>
            </TextField>

            <TextField
              select
              label="Shiny Status"
              defaultValue={editingCatch?.status || ""}
              required
              fullWidth
            >
              <MenuItem value="Owned">Owned</MenuItem>
              <MenuItem value="Sell">Sell</MenuItem>
              <MenuItem value="Fled">Fled</MenuItem>
            </TextField>

            {/* Is Rare */}
            <TextField
              select
              label="Is Rare"
              value={isRare ? "Sim" : "Não"}
              onChange={(e) => setIsRare(e.target.value === "Sim")}
              fullWidth
            >
              <MenuItem value="Sim">Sim</MenuItem>
              <MenuItem value="Não">Não</MenuItem>
            </TextField>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
              <Button
                variant="contained"
                color="success"
                type="submit"
                sx={{ color: "white" }}
              >
                {editingCatch ? "Salvar Alterações" : "Adicionar"}
              </Button>
              <Button variant="contained" color="error" onClick={handleCloseForm}>
                Cancelar
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </StrictMode>
  );
}
