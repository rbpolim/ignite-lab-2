import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oh5zvn06s301xs4iv900ay/master',
  cache: new InMemoryCache()
}) 