import { useMemo, StrictMode } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { IconButton, Link, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link as RouterLink } from "react-router-dom";


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

export default function AdminPlayers() {

  const columns = useMemo<MRT_ColumnDef<Player>[]>(
    () => [
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
      /*aqui comeca os botoes */
    {
      id: 'edit',
      header: 'EDIT',
      Cell: () => (
        <StrictMode>
          <Link component={RouterLink} to="/admin-player-catches" underline="none" color="inherit">
            <Tooltip title="Sign out" placement="bottom" arrow>
              <IconButton color='inherit'><EditIcon /></IconButton>
            </Tooltip>
          </Link>

          <IconButton>
            <DeleteIcon />
          </IconButton>
        </StrictMode>
      ),
    },
     /*aqui acaba os botoes */
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
  });

  return <MaterialReactTable table={table} />;
};
