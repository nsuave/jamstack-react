import React, { Component } from "react";
import ReactDOM from "react-dom";
import Downshift from "downshift";
import axios from "axios";

import "./style.css";

class DownshiftJam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jams: []
    };

    this.fetchJam = this.fetchJam.bind(this);
    this.inputOnChange = this.inputOnChange.bind(this);
  }

  inputOnChange(event) {
    if (!event.target.value) {
      return;
    }
    this.fetchJam(event.target.value);
  }

  downshiftOnChange(selectedJam) {
    // When a user selects an entry from the dropdown
    alert(`You selected ${selectedJam.jam}.  It costs ${selectedJam.msrp} dollars`);
  }

  fetchJam(jam) {
    // Store response.data from the API call into the 'jams' state object
    const jamURL = `http://localhost:8008/jam`;
    axios.get(jamURL).then(response => {
      this.setState({ jams: response.data });
    });
  }

  render() {
    return (
      <Downshift
        onChange={this.downshiftOnChange}
        itemToString={item => (item ? item.title : "")}
      >
        {({
          selectedItem,
          getInputProps,
          getItemProps,
          highlightedIndex,
          isOpen,
          inputValue,
          getLabelProps
        }) => (
          <div>
            <label
              style={{ marginTop: "1rem", display: "block" }}
              {...getLabelProps()}
            >
              Select a flavor of jam
            </label>{" "}
            <br />
            <input
              {...getInputProps({
                placeholder: "Search flavors",
                onChange: this.inputOnChange
              })}
            />
            {isOpen ? (
              <div className="downshift-dropdown">
                {this.state.jams
                  .filter(
                    item =>
                      !inputValue ||
                      item.jam
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                  )
                  .slice(0, 10)
                  .map((item, index) => (
                    <div
                      className="dropdown-item"
                      {...getItemProps({ key: index, index, item })}
                      style={{
                        backgroundColor:
                          highlightedIndex === index ? "lightgray" : "white",
                        fontWeight: selectedItem === item ? "bold" : "normal"
                      }}
                    >
                      {item.jam}
                    </div>
                  ))}
              </div>
            ) : null}
          </div>
        )}
      </Downshift>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<DownshiftJam />, rootElement);