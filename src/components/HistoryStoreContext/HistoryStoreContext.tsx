import React, { Component, createContext } from "react";
import produce from "immer";

const Context = createContext({});

const { Provider, Consumer: HistoryStoreConsumer } = Context;

export interface HistoryStoreData {
  key?: string;
  dataSource: any;
  scrollTop: number;
}

export interface HistoryStoreProviderState {
  dataSources: HistoryStoreData[];
}

class HistoryStoreProvider extends Component<{}, HistoryStoreProviderState> {
  public state = {
    dataSources: []
  };
  public render() {
    const value = { dataSources: this.state.dataSources, ...this.actions };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
  private actions = {
    addData: (data: HistoryStoreData) => {
      const { dataSources } = this.state;
      const index = dataSources.findIndex((v: HistoryStoreData) => {
        return v.key === data.key;
      });
      if (index > -1) {
        this.setState(
          produce(draftState => {
            draftState.dataSources[index] = data;
          })
        );
      } else {
        this.setState(
          produce(draftState => {
            draftState.dataSources.push(data);
          })
        );
      }
    },
    getData: (key?: string) => {
      return this.state.dataSources.find((v: HistoryStoreData) => {
        return v.key === key;
      });
    }
  };
}

export default {
  Provider: HistoryStoreProvider,
  Consumer: HistoryStoreConsumer
};
