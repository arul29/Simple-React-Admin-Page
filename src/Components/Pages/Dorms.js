import React, { Component } from "react";
import "../Css/Dorms.css";

class Dorms extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <button style={{ float: "right" }} className="button button1">
            Add Dorms
          </button>
          <h2>Dorms Table</h2>

          <div style={{ overflowX: "auto" }}>
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Desc</th>
                  <th>Icon</th>
                  <th>Action</th>
                </tr>
                <tr>
                  <td>Dorms Name</td>
                  <td>Dorms Desc</td>
                  <td>
                    <img
                      width="200px"
                      src="https://www.usnews.com/dims4/USNEWS/976151e/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2F52%2F70%2Fff1251b849e485ea5aef7975857b%2F150206-dorm-stock.jpg"
                    />
                  </td>
                  <td>
                    <button className="button button2">Edit</button>
                    <button className="button button3">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Dorms;
