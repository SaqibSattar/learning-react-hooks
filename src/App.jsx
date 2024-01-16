import React, { useReducer } from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import ClassCounterTwo from "./components/ClassCounterTwo";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import ClassCounterOne from "./components/ClassCounterOne";
import HookCounterOne from "./components/HookCounterOne";
import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import ComponentC from "./components/ComponentC";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import ComponentAOne from "./components/ComponentAOne";
import ComponentBOne from "./components/ComponentBOne";
import ComponentCOne from "./components/ComponentCOne";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";
import ParentComponent from "./components/ParentComponent";
import Counter from "./components/Counter";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <Counter />
    {/* <ParentComponent />
    <DataFetchingTwo />
    <DataFetchingOne />
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch}}>
    Count --- {count}
    <ComponentAOne />
    <ComponentBOne />
    <ComponentCOne />
    </CountContext.Provider>
      <CounterThree />
      <CounterTwo />
      <CounterOne />
      <UserContext.Provider value={"Saqi"}>
        <ChannelContext.Provider value={"Youtube"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <DataFetching />
    <IntervalHookCounter />
    <IntervalClassCounter />
    <MouseContainer />
     <HookMouse />
      <ClassMouse />
    <HookCounterOne />
    <ClassCounterOne />
    <HookCounterFour />
    <HookCounterThree />
      <ClassCounterTwo /> 
      <HookCounterTwo />
      <HookCounter />
      <ClassCounter /> */}
    </>
  );
}

export default App;
