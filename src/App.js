import React from "react";
import Data from "./Data.json";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <table className="table">
        <thead>
          <td>userId</td>
          <td>Id</td>
          <td>Title</td>
          <td>Body</td>
        </thead>
        <tbody>
          {Data.map((d, i) => (
            <tr key={i}>
              <td>{d.userId}</td>
              <td>{d.id}</td>
              <td>{d.title}</td>
              <td>{d.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
