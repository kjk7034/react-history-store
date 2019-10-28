import * as React from "react";
import axios from "axios";
import HistoryStore, {
  withHistoryStore,
  HistoryStoreComponentProps
} from "components/HistoryStore";
import { UserList } from "components/User";
import { UserData } from "types/user";

interface ListProps extends HistoryStoreComponentProps {}

interface ListState {
  dataSource?: UserData[];
}

class List extends React.Component<ListProps, ListState> {
  constructor(props: ListProps) {
    super(props);
    this.state = {
      dataSource: props.dataSource
    };
  }
  public componentDidMount() {
    if (!this.state.dataSource) {
      this.getData();
    }
  }
  public render() {
    const { dataSource } = this.state;
    const { locationKey } = this.props;
    if (!dataSource) return null;
    return (
      <HistoryStore locationKey={locationKey} dataSource={dataSource}>
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

export default withHistoryStore(List);
