const cols = [
  { key: "name", label: "Name" },
  { key: "sex", label: "Sex" },
  { key: "dateofbirth", label: "DateOfBirth" }
];

const data = [
  {
    id: 1,
    name: "Adam",
    sex: "M",
    dateOfBirth: "23051991"
  },
  {
    id: 2,
    name: "Krystian",
    sex: "M",
    dateOfBirth: "23051993"
  },
  {
    id: 3,
    name: "Bartek",
    sex: "M",
    dateOfBirth: "23051992"
  },
  {
    id: 4,
    name: "Ania",
    sex: "K",
    dateOfBirth: "23051994"
  },
  {
    id: 5,
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


  removeRow = (id) => {
    // debugger
    const {data} = this.state
    const filterRow = data.filter(item => item.id !== id)
    this.setState({ data: filterRow})
  }


  render() {
    return (
      <>
      <table>
        <DataTableHead cols={this.props.cols} />
        <DataTableBody removeHandler={this.removeRow} data={this.state.data} />
      </table>
      </>
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
    // state = {
    //   data: this.props.data
    // };
  // handleRemoveBtn = (e) => {
  //   console.log(e.target.parentNode.style.textDecoration = "line-through");
  //   console.log(e.target.parentNode.remove);
  //   this.setState( prevState => ({
  //     data: this.props.data.e.target.parentNode.delete
  //   })
  //   )
  // }
  render() {
    const myFunction = this.props.removeHandler;
    const { removeHandler, data } = this.props;
    return (
      <tbody>
        {data.map((data) => {
          return (
            <tr key={data.key}>
              <td>{data.name}</td>
              <td>{data.sex}</td>
              <td>{data.dateOfBirth}</td>
              <button onClick={() => myFunction(data.id)}>Delete</button>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

ReactDOM.render(<DataTable data={data} cols={cols} />, document.getElementById("root"));
