import { Component, type CSSProperties } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  margin: auto;
  max-width: 600px;
  background-color: blue !important;
`;

const TodoBlock = styled.header`
  padding: 30px;
  margin-top: 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow: -9px 17px 13px rgb(0 0 0 / 16%);
`;

export default class App extends Component {
  todoData = [
    {
      id: "1",
      title: "공부하기",
      completed: true,
    },
    {
      id: "2",
      title: "청소하기",
      completed: false,
    },
  ];

  btnStyle: CSSProperties = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  getStyle = (): CSSProperties => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none",
    };
  };

  render() {
    return (
      // <div className='container'>
      <Container>
        {/* <div className='todoBlock'> */}
        <TodoBlock>
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          <div style={this.getStyle()}>
            <input type="checkbox" defaultChecked={false} />
            공부하기
            <button style={this.btnStyle}>X</button>
          </div>
          <div style={this.getStyle()}>
            <input type="checkbox" defaultChecked={false} />
            청소하기
            <button style={this.btnStyle}>X</button>
          </div>
        </TodoBlock>
        {/* </div> */}
      </Container>
      // </div>
    );
  }
}
