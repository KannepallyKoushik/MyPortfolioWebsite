import React from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skills extends React.Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div style={{ display: "flex" }}>
            {this.props.skill}
            <ProgressBar
              style={{ margin: "auto", width: "75%" }}
              progress={this.props.score}
            />
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
