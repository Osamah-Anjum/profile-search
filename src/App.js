import './App.css';
import * as React from 'react';
import { fakedata } from './MOCK_DATA';
import { useTable } from 'react-table';
import Summary from './components/summaryButton';

const App = () => {
  const data = React.useMemo(() => fakedata, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Photo",
        accessor: (row) => <img width={60} height={60} style={{borderRadius: "50px"}} src={row.photo} alt='' />,
      },
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Brief",
        accessor: "brief",
      },
      {
        Header: "Adress",
        accessor: "adress",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Location",
        accessor: (row) => <><Summary /></>
      }
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div className='App'>
      <div className="container">
        <table {...getTableProps()}>
          <thead >
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
