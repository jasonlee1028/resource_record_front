import React  from 'react';

import {compose, graphql, withApollo} from 'react-apollo';

import { getStore, setStore } from '../../api/util';
import { originalResource } from '../../api/graphql/WebResource.graphql';
import {Spin} from "antd";


class OriginalArticle extends React.Component {
  constructor(props) {
      super(props);
  };

  render() {
      if (this.props.data.error) return null;
      if (this.props.data.loading) return <Spin/>;

      let theOriginalResource = this.props.data.originalResource;

      return (
          <div style={{textAlign: 'center'}}>
              <h2>{theOriginalResource.title}</h2>
              <h3>{theOriginalResource.createTime}</h3>
              <div>
                  {
                      theOriginalResource.content
                  }
              </div>
          </div>
      );
  }

};


export default compose(
    withApollo,
    graphql(originalResource, {
        options: {
            variables: {
                originalResourceId: getStore('originalResourceId')
            }
        }
    })
)(OriginalArticle);
