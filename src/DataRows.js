import React from "react";

const DataRows = ({ dataRecords }) => (
  <tbody>
    {dataRecords.map((record, i) => {
      return (
        <tr key={i}>
          <td>{record.text}</td>
          <td>{record.type}</td>
        </tr>
      );
    })}
  </tbody>
);

export default DataRows;
