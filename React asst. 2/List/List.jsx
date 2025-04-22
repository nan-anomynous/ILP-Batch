import React from "react";
import './List.css'

const List = (props) => {

  return (
    <div className="list">
      <h2>Student Result</h2>
      <table>
        
          <thead>
          
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Math</th>
              <th>English</th>
              <th>Science</th>
              <th>Total-Marks</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
          {props.data.map((item) => {
            return (
    
              <tr>

                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.gender}</td>
                <td>{item.marks.math}</td>
                <td>{item.marks.english}</td>
                <td>{item.marks.science}</td>
                <td>{item.marks.math+item.marks.english+item.marks.science}</td>
                <td>{((item.marks.math+item.marks.english+item.marks.science)*100/300).toFixed(2)}</td>
              </tr>
            );
          })}
          </tbody>
      </table>
    </div>
  );
};

export default List;
