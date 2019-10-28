import * as React from "react";
import { UserData } from "types/user";

interface ViewProps {
  data: UserData;
}

class View extends React.Component<ViewProps> {
  public render() {
    const { id, avatar, name, createdAt } = this.props.data;
    return (
      <div>
        <h1>
          {name} : {id}
        </h1>
        <img src={avatar} alt={name} />
        <p>createdAt: {createdAt}</p>
      </div>
    );
  }
}

export default View;
