import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Toate",
        },
        {
          key: "chairs",
          name: "Vinul Syrach",
        },
        {
          key: "the ned",
          name: "Vinurile The Ned",
        },
        {
          key: "hawke s bay",
          name: "Vinul Hawke s bay",
        },
        {
          key: "pinot gris marlborough",
          name: "Pinot Gris Marlborough",
        },
        {
          key: "riesling-ul din centrul otago",
          name: "Riesling-ul din centrul Otago",
        },
        {
          key: "albarino gisborne ",
          name: "Albarino Gisborne ",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
