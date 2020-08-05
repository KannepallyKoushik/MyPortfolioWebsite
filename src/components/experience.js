import React from "react";
import { Grid, Cell } from "react-mdl";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    const elements = this.props.description.split("•");
    this.state = {
      letters: elements,
    };
  }
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
              {this.props.company} - {this.props.role}
            </p>
            <ul>
              {this.state.letters.map((letter) => (
                <li>{letter}</li>
              ))}
            </ul>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Experience;
