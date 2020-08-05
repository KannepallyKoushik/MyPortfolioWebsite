import React from "react";
import { Grid, Cell } from "react-mdl";

class Education extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <p>
              ({this.props.startYear} - {this.props.endYear})
            </p>
          </Cell>
          <Cell col={8}>
            <p
              style={{
                marginTop: "0px",
                marginLeft: "23px",
                fontSize: "18px",
              }}
            >
              {this.props.clgName} - {this.props.place}
            </p>
            <ul>
              <li>
                {this.props.status} {this.props.degree} in {this.props.branch}{" "}
              </li>
              <li style={{ marginTop: "0px" }}>
                Main CourseWork : {this.props.courseWork}
              </li>
            </ul>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Education;
