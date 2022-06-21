import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oeyli922tl01z72hmvhjss/master',
    cache: new InMemoryCache() 
})