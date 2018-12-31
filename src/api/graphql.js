// import { getApiUrl } from './util';
// const BASE_PATH = getApiUrl();

const graphqlEndpoint = "http://106.75.9.152:8000/" + "graphql/";
// const graphqlEndpoint = "http://127.0.0.1:8000/" + "graphql/";

export default {
  graphqlEndpoint: window.appGraphqlEndpoint
    ? window.appGraphqlEndpoint
    : graphqlEndpoint
};
