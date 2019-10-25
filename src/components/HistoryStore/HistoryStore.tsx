import * as React from "react";

export interface HistoryStoreProps {
  dataSource?: any;
  locationKey?: string;
}

class HistoryStore extends React.Component<HistoryStoreProps, any> {
  componentDidMount() {
    const { locationKey } = this.props;
    const historyStoreData = sessionStorage.getItem(`history-store`);
    if (!historyStoreData) return;
    const datas = JSON.parse(historyStoreData as string)[`key-${locationKey}`];
    if (datas && datas.scrollTop) {
      window.scrollTo(0, datas.scrollTop);
    }
  }
  componentWillUnmount() {
    const { locationKey, dataSource } = this.props;
    const historyStoreData = sessionStorage.getItem(`history-store`);
    let datas = historyStoreData ? JSON.parse(historyStoreData) : {};
    datas[`key-${locationKey}`] = dataSource;
    sessionStorage.setItem(`history-store`, JSON.stringify(datas));
  }
  public render() {
    return this.props.children;
  }
}

export default HistoryStore;
