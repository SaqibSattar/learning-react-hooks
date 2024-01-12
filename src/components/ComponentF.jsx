import React from "react";
import { UserContext, ChannelContext } from "../App";
const ComponentF = () => {
  return (
    <UserContext.Consumer>
      {(user) => {
        return (
          <ChannelContext.Consumer>
            {(channel) => {
              return (
                <div>
                  User is {user} Channel is {channel}
                </div>
              );
            }}
          </ChannelContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  );
};

export default ComponentF;
