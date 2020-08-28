import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Kannepally Koushik</h2>
            <img
              alt="contact pic"
              src={require("../img/contact.jpg")}
              style={{ height: "250px", borderRadius: "5px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              "Software Developer | Solution Builder | Team Player"
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontFamily: "Anton", fontSize: "15px" }}
                  >
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    kannepallykoushikkumar@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontFamily: "Anton", fontSize: "20px" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    +91 7731887711
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontFamily: "Anton", fontSize: "20px" }}
                  >
                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                    +91 9346617100
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontFamily: "Anton", fontSize: "20px" }}
                  >
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    kannapalli_koushik
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
