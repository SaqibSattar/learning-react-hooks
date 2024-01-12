import React from "react";
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

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <>
      <UserContext.Provider value={"Saqi"}>
        <ChannelContext.Provider value={"Youtube"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      {/* <DataFetching />
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
