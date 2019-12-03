import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => (
  <tbody>
    <tr>
      <td>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
        Loading ...
      </td>
    </tr>
  </tbody>
);

export default Loading;
