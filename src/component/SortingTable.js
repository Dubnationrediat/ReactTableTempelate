import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";
import classes from './BasicTable.module.css';

function SortingTable() {
  const columns = useMemo(() => GROUPED_COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, footerGroups } = useTable({
    columns,
    data,
  }, useSortBy);

  return (
    <table {...getTableProps()} className={classes.table}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className={classes.tr}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())} className={classes.th}>
                {column.render('Header')}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className={classes.tr}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} className={classes.td}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
      <tfoot className={classes.tfoot}>
        {footerGroups.map((footerGroup, i) => (
          <tr key={i} {...footerGroup.getFooterGroupProps()} className={classes.tr}>
            {footerGroup.headers.map((column) => (
              <td {...column.getFooterProps()} className={classes.td}>
                {column.render('Footer')}
              </td>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
}

export default SortingTable;
