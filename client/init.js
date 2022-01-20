class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
    this.pageFlip = this.pageFlip.bind(this);
    this.pageRender = this.pageRender.bind(this);
  }
  pageFlip() {
    console.log(this.props);
  }
  pageRender() {
    switch (this.state.page) {
      case 0:
        return <KeyForm />;
      case 1:
        return <BasicInfoForm />;
      default:
        break;
    }
  }
  render() {
    return <div className="App">{this.pageRender()}</div>;
  }
}

var KeyForm = function () {
  return (
    <div>
      <form action="/validate" method="GET">
        <label for="key">Llave:</label>
        <br />
        <input type="text" id="key" name="key" />
        <br />
        <br />
        <input type="submit" value="Entra" />
      </form>
    </div>
  );
};
var BasicInfoForm = function () {
  return (
    <div>
      <form action="/basicInfo" method="POST">
        <label for="name">Nombre:</label>
        <br />
        <input type="text" id="name" name="name" />
        <br />
        <label for="email">Email:</label>
        <br />
        <input type="text" id="email" name="email" />
        <br />
        <label for="phone">Telefono:</label>
        <br />
        <input type="text" id="phone" name="phone" />
        <br />
        <br />
        <input type="submit" value="Entra" />
      </form>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
