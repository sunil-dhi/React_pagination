import React, { useState } from "react";
import Data from "./Data.json";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
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
          {records.map((d, i) => (
            <tr key={i}>
              <td>{d.userId}</td>
              <td>{d.id}</td>
              <td>{d.title}</td>
              <td>{d.body}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prevPage}>
              prev
            </a>
          </li>

          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? "active" : ""}`}
              key={i}
            >
              <a href="#" className="page-link" onClick={()=>changepage(n)}>
                {n}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextpage}>
              next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
  function changepage(id){
     setCurrentPage(id)
  }
  function prevPage(){
     if(currentPage!=1)
     {
      setCurrentPage(currentPage-1)
     }
  }
  function nextpage(){
    if(currentPage!=npage)
    {
     setCurrentPage(currentPage+1)
    }
  }
}

export default App;
