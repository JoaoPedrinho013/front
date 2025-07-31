import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';


type Player = {
  id: number;
  nickname: string;
  lastShiny: string;
  totalShiny: number;
}


const data: Player[] = [
  { id: 1, nickname: 'Azien', lastShiny: 'Haunter', totalShiny: 18 },
  { id: 2, nickname: 'Lightyear', lastShiny: 'Ratata', totalShiny: 1 },
  { id: 3, nickname: 'Kadu', lastShiny: 'Marowack', totalShiny: 1 },
  { id: 4, nickname: 'Gege', lastShiny: '', totalShiny: 0 },
];

export default function Admin() {

  const columns = useMemo<MRT_ColumnDef<Player>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 50,
      },
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
