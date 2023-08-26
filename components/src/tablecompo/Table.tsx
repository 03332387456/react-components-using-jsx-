import React from "react";
import Table2 from "./Table2";

type TableProps = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function Table(props: TableProps) {
  const { userId, id, title, completed } = props;
  return (
    <div>
      <Table2 />
      <table border={1}>
        <tbody>
          <tr>
            <td>{userId}</td>
            <td>{id}</td>
            <td>{title}</td>
            <td>{completed.toString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
