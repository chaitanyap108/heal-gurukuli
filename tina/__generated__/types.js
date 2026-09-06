export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const CliniciansPartsFragmentDoc = gql`
    fragment CliniciansParts on Clinicians {
  __typename
  slug
  name
  title
  image
  credentials
  shortBio
  bio
  specialties
}
    `;
export const TrusteesPartsFragmentDoc = gql`
    fragment TrusteesParts on Trustees {
  __typename
  slug
  name
  role
  shortBio
}
    `;
export const CliniciansDocument = gql`
    query clinicians($relativePath: String!) {
  clinicians(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...CliniciansParts
  }
}
    ${CliniciansPartsFragmentDoc}`;
export const CliniciansConnectionDocument = gql`
    query cliniciansConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: CliniciansFilter) {
  cliniciansConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...CliniciansParts
      }
    }
  }
}
    ${CliniciansPartsFragmentDoc}`;
export const TrusteesDocument = gql`
    query trustees($relativePath: String!) {
  trustees(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...TrusteesParts
  }
}
    ${TrusteesPartsFragmentDoc}`;
export const TrusteesConnectionDocument = gql`
    query trusteesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: TrusteesFilter) {
  trusteesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...TrusteesParts
      }
    }
  }
}
    ${TrusteesPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    clinicians(variables, options) {
      return requester(CliniciansDocument, variables, options);
    },
    cliniciansConnection(variables, options) {
      return requester(CliniciansConnectionDocument, variables, options);
    },
    trustees(variables, options) {
      return requester(TrusteesDocument, variables, options);
    },
    trusteesConnection(variables, options) {
      return requester(TrusteesConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
