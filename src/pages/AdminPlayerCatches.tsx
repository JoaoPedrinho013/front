import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';


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

export default function AdminPlayerCatches() {
  const columns = useMemo<MRT_ColumnDef<Catch>[]>(
  () => [
    {
      accessorKey: 'name',
      header: 'NAME',
    },
    {
      accessorKey: 'encounters',
      header: 'ENCOUNTERS',
    },
    {
      accessorKey: 'date',
      header: 'CATCH DATE',
    },
    {
      accessorKey: 'catch_method',
      header: 'CATCH METHOD',
    },
    {
      accessorKey: 'status',
      header: 'SHINY STATUS',
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
}
