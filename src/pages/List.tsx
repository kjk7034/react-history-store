import * as React from "react";
import axios from "axios";
import {
  withHistoryStoreContext,
  HistoryStoreComponentProps,
  HistoryStore
} from "components/HistoryStoreContext";
import UserList from "components/UserList";
import { UserData } from "types/user";

interface ListProps extends HistoryStoreComponentProps {}

interface ListState {
  dataSource?: UserData[];
}

class List extends React.Component<ListProps, ListState> {
  public locationKey = this.props.history.location.key;
  constructor(props: ListProps) {
    super(props);
    this.state = {
      dataSource: this.props.historyStore.storeData.dataSource
    };
  }
  public componentDidMount() {
    if (!this.state.dataSource) {
      this.getData();
    }
  }
  public render() {
    const { dataSource } = this.state;
    const { historyStore } = this.props;
    if (!dataSource) return null;
    return (
      <HistoryStore historyStore={historyStore} dataSource={dataSource}>
        <UserList datas={dataSource} />
      </HistoryStore>
    );
  }
  private getData = async () => {
    const { data } = await axios.get(
      "https://5db0f7ce8087400014d3840e.mockapi.io/list"
    );
    this.setState({
      dataSource: data
    });
  };
}

export default withHistoryStoreContext(List);
