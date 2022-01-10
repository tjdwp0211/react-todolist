import React, { Component } from 'react';
import '../../css/todolist/TodoList.css';
import styled from 'styled-components';

const NewDiv = styled.div.attrs(({state}) => ({
  check: state,
}))`
  background-color: ${(props) => (props.check ? "gray" : "teal")};
  text-decoration: ${(props) => (props.check ? "none" : "line-through")};
  margin-bottom: 10px;

  .btn {
    background-color: pink;
    boder: none; 
  }
`;

class TodoList extends Component {
  state = {
    innerValue: '',
    ID: 3,
    lastLists: [
      { id : 0, text: "a", state: true },
      { id : 1, text: "b", state: true },
      { id : 2, text: "c", state: true },
    ],
  };

  getInput = (e) => {
    this.setState({
      innerValue: e.target.value,
    });
  };

  add = () => {
    const { innerValue, lastLists, ID } = this.state;
    let newLists = [...lastLists];
    newLists.push({ id: ID, text: innerValue, state: true });
    this.setState({
      innerValue: '',
      ID: ID + 1,
      lastLists: newLists,
    });
  };

  remove = (e) => {
    const {lastLists} = this.state;
    let newList =[...lastLists];
    const ID = Number(e.target.parentNode.id);
    newList = newList.filter((item) => item.id !== ID);
    console.log('newList :>> ', newList);
    this.setState({
      ...this.state,
      lastLists: newList,
    })
  }

  check = (e) => {
    const { lastLists } = this.state;
    let newList = [...lastLists];
    const ID = e.target.parentNode.id
    newList[ID] = {
      ...newList[ID],
      state: !newList[ID].state,
    }
    this.setState({
      lastLists: newList,
    })
  }

  render() {
    const { lastLists, innerValue } = this.state;
    const { getInput, add, remove, check } = this;
    return (
      <>
        <div className="wholeWrapper">
          <div>{'TodoList'}</div>
          <input type="text" onChange={getInput} value={innerValue} />
          <button onClick={add}>{'ADD'}</button>
          <div className="table">
            {lastLists.map((list, index) => (
              <NewDiv id={list.id} state={list.state}>
                <div onClick={check}>{list.text}</div>
                <button className="btn" onClick={remove}>{"remove"}</button>
              </NewDiv>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default TodoList;