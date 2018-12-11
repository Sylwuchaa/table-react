const cols = [
  { key: "name", label: "Name" },
  { key: "sex", label: "Sex" },
  { key: "dateofbirth", label: "DateOfBirth" }
];

const data = [
  {
    name: "Adam",
    sex: "M",
    dateOfBirth: "23051991"
  },
  {
    name: "Krystian",
    sex: "M",
    dateOfBirth: "23051993"
  },
  {
    name: "Bartek",
    sex: "M",
    dateOfBirth: "23051992"
  },
  {
    name: "Ania",
    sex: "K",
    dateOfBirth: "23051994"
  },
  {
    name: "Basia",
    sex: "K",
    dateOfBirth: "23051999"
  }
];

class DataTable extends React.Component {
  state = {
    cols: this.props.cols,
    data: this.props.data
  };

  render() {
    return (
      <table>
        <DataTableHead cols={this.props.cols} />
        <DataTableBody data={this.props.data} />
      </table>
    );
  }
}

class DataTableHead extends React.Component {
  state = {
      cols: this.props.cols
    };

  render() {
    return (
      <thead>
        <tr>
          {this.state.cols.map((i, index) => {
            return <td key={i.key}>{i.label}</td>;
          })}
        </tr>
      </thead>
    );
  }
}

class DataTableBody extends React.Component {
    state = {
      data: this.props.data
    };

  render() {
    return (
      <tbody>
        {this.state.data.map((i, index) => {
          return (
            <tr key={i.key}>
              <td>{i.name}</td>
              <td>{i.sex}</td>
              <td>{i.dateOfBirth}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

ReactDOM.render(<DataTable data={data} cols={cols} />, document.getElementById("root"));
