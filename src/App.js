import logo from "./logo.svg";
import "./App.css";
import React from "react";

class ProfileClass extends React.Component {
  render(props) {
    const days = new Date(this.props.registredAt).getDate();
    const mesyacs = new Date().getMonth() + 1;
    const years = new Date(this.props.registredAt).getFullYear();

    return (
      <div>
        <p>
          Привет, <b>{this.props.name}!</b>{" "}
        </p>

        <p>
          Дата регистрации: {days} {montoToStr(mesyacs)} {years}
        </p>
      </div>
    );
  }
}

function Profile(props) {
  const day = new Date(props.registredAt).getDate();
  const mesyac = new Date().getMonth() + 1;
  const year = new Date(props.registredAt).getFullYear();

  return (
    <div>
      <p>
        Привет, <b>{props.name}!</b>{" "}
      </p>
      <p>
        Дата регистрации:{day} {montoToStr(mesyac)} {year}
      </p>
    </div>
  );
}
function App() {
  return (
    <div>
      <ProfileClass name="Вася" registredAt={new Date()} />
      <Profile name="Вася" registredAt={new Date()} />
    </div>
  );
}
function montoToStr(num) {
  return num > 12 || num < 1
    ? null
    : "январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь".split(
        ","
      )[num - 1];
}

export default App;
