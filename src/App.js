import React, { useState } from "react";
import Data from "./Data.json";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [currentPage,setCurrentPage]=useState(1);
   const recordsPerPage=5;
  const lastIndex=currentPage*recordsPerPage;
  const firstIndex=lastIndex-recordsPerPage;
  const records=Data.slice(firstIndex,lastIndex);
  const npage=Math.ceil(Data.length/recordsPerPage);
  const numbers=[...Array(npage+1).keys()].slice(1)
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
