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
export const SharedPartsFragmentDoc = gql`
    fragment SharedParts on Shared {
  __typename
  title
  subtitle
  eyebrow
  heading
  note
  pillars {
    __typename
    number
    title
    body
    ctaText
    ctaHref
  }
  quotes {
    __typename
    quote
    attribution
    detail
  }
}
    `;
export const HomePartsFragmentDoc = gql`
    fragment HomeParts on Home {
  __typename
  title
  hero {
    __typename
    title
    subtitle
    logo
    logoAlt
    primaryCta {
      __typename
      text
      href
    }
    secondaryCta {
      __typename
      text
      href
    }
  }
  missionTeaser {
    __typename
    eyebrow
    heading
    body
    ctaText
    ctaHref
  }
}
    `;
export const MissionPartsFragmentDoc = gql`
    fragment MissionParts on Mission {
  __typename
  title
  hero {
    __typename
    eyebrow
    heading
    subtitle
  }
  whyWeExist {
    __typename
    eyebrow
    heading
    paragraphs
  }
}
    `;
export const TherapyPartsFragmentDoc = gql`
    fragment TherapyParts on Therapy {
  __typename
  title
  hero {
    __typename
    eyebrow
    heading
    subtitle
  }
  stepsSection {
    __typename
    eyebrow
    heading
    steps {
      __typename
      stepNumber
      title
      description
    }
  }
  intakeTeaser {
    __typename
    eyebrow
    heading
    subtitle
    disclaimer
  }
  oneToOneTherapy {
    __typename
    eyebrow
    heading
    bodyParagraphs
  }
  consultationInfo {
    __typename
    eyebrow
    heading
    body
    ctaLabel
    ctaHref
  }
  modalitiesSection {
    __typename
    eyebrow
    heading
    subtitle
    modalities {
      __typename
      title
      description
      linkText
      linkHref
    }
  }
  meetTheTeam {
    __typename
    eyebrow
    heading
    body
    ctaLabel
    ctaHref
  }
  complaints {
    __typename
    eyebrow
    heading
    body
    pdfLabel
    pdfHref
  }
  crisisTeaser {
    __typename
    eyebrow
    heading
    subtitle
    groups {
      __typename
      region
      lines {
        __typename
        name
        detail
        contact
      }
    }
    viewAllLabel
    viewAllHref
  }
  privacyTeaser {
    __typename
    text
    ctaLabel
    ctaHref
  }
}
    `;
export const ContributePartsFragmentDoc = gql`
    fragment ContributeParts on Contribute {
  __typename
  title
  hero {
    __typename
    eyebrow
    heading
    subtitle
  }
  fundraisingGoal {
    __typename
    targetAmount
    raisedAmount
    bannerText
  }
  tiersSection {
    __typename
    eyebrow
    heading
    subtitle
    tiers {
      __typename
      name
      amount
      badge
      features
      ctaLabel
      ctaHref
    }
  }
  transparencyNote {
    __typename
    heading
    text
  }
}
    `;
export const ImpactPartsFragmentDoc = gql`
    fragment ImpactParts on Impact {
  __typename
  title
  hero {
    __typename
    eyebrow
    heading
    subtitle
  }
  metricsSection {
    __typename
    eyebrow
    heading
    stats {
      __typename
      value
      label
      subtext
      source
    }
  }
  outcomesSection {
    __typename
    eyebrow
    heading
    description
  }
  documentary {
    __typename
    eyebrow
    heading
    description
    statusBadge
  }
}
    `;
export const ResourcesPartsFragmentDoc = gql`
    fragment ResourcesParts on Resources {
  __typename
  title
  hero {
    __typename
    eyebrow
    heading
    subtitle
  }
  categories {
    __typename
    id
    number
    title
    description
    guides {
      __typename
      tag
      title
      description
      readTimeOrType
      href
    }
  }
}
    `;
export const VolunteerPartsFragmentDoc = gql`
    fragment VolunteerParts on Volunteer {
  __typename
  title
  hero {
    __typename
    eyebrow
    heading
    subtitle
  }
  rolesSection {
    __typename
    eyebrow
    heading
    description
    roles {
      __typename
      title
      description
      requirementText
    }
  }
  safeguarding {
    __typename
    heading
    description
  }
  otherWaysSection {
    __typename
    eyebrow
    heading
    ways {
      __typename
      title
      description
      badgeText
    }
  }
  cpdPlacement {
    __typename
    eyebrow
    heading
    paragraphs
    highlights {
      __typename
      title
      description
    }
    ctaText
    ctaHref
  }
}
    `;
export const PrivacyPartsFragmentDoc = gql`
    fragment PrivacyParts on Privacy {
  __typename
  title
  hero {
    __typename
    eyebrow
    heading
    subtitle
  }
  sections {
    __typename
    heading
    body
    linkLabel
    linkHref
  }
  footerNote
}
    `;
export const MediaPartsFragmentDoc = gql`
    fragment MediaParts on Media {
  __typename
  title
  hero {
    __typename
    eyebrow
    heading
    subtitle
  }
  pressOffice {
    __typename
    heading
    body
    note
    emailLabel
    email
    responseNote
  }
  guidelines {
    __typename
    heading
    intro
    items {
      __typename
      title
      body
    }
  }
  pressKit {
    __typename
    heading
    description
    ctaLabel
  }
  backLink {
    __typename
    label
    href
  }
}
    `;
export const CrisisSupportPartsFragmentDoc = gql`
    fragment CrisisSupportParts on CrisisSupport {
  __typename
  title
  hero {
    __typename
    badge
    heading
    subtitle
  }
  registry {
    __typename
    country
    lines {
      __typename
      name
      number
      availability
      notes
    }
  }
  international {
    __typename
    heading
    body
    ctaLabel
    ctaHref
  }
  backLink {
    __typename
    label
    href
  }
}
    `;
export const ForumPartsFragmentDoc = gql`
    fragment ForumParts on Forum {
  __typename
  title
  hero {
    __typename
    eyebrow
    heading
    subtitle
  }
  safetyNotice {
    __typename
    heading
    body
    bullets
  }
  crisisTeaser {
    __typename
    heading
    body
    ctaLabel
    ctaHref
  }
  threads {
    __typename
    id
    title
    category
    replies
    views
    lastActive
    isPinned
    author
  }
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
export const SharedDocument = gql`
    query shared($relativePath: String!) {
  shared(relativePath: $relativePath) {
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
    ...SharedParts
  }
}
    ${SharedPartsFragmentDoc}`;
export const SharedConnectionDocument = gql`
    query sharedConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SharedFilter) {
  sharedConnection(
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
        ...SharedParts
      }
    }
  }
}
    ${SharedPartsFragmentDoc}`;
export const HomeDocument = gql`
    query home($relativePath: String!) {
  home(relativePath: $relativePath) {
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
    ...HomeParts
  }
}
    ${HomePartsFragmentDoc}`;
export const HomeConnectionDocument = gql`
    query homeConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeFilter) {
  homeConnection(
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
        ...HomeParts
      }
    }
  }
}
    ${HomePartsFragmentDoc}`;
export const MissionDocument = gql`
    query mission($relativePath: String!) {
  mission(relativePath: $relativePath) {
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
    ...MissionParts
  }
}
    ${MissionPartsFragmentDoc}`;
export const MissionConnectionDocument = gql`
    query missionConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: MissionFilter) {
  missionConnection(
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
        ...MissionParts
      }
    }
  }
}
    ${MissionPartsFragmentDoc}`;
export const TherapyDocument = gql`
    query therapy($relativePath: String!) {
  therapy(relativePath: $relativePath) {
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
    ...TherapyParts
  }
}
    ${TherapyPartsFragmentDoc}`;
export const TherapyConnectionDocument = gql`
    query therapyConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: TherapyFilter) {
  therapyConnection(
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
        ...TherapyParts
      }
    }
  }
}
    ${TherapyPartsFragmentDoc}`;
export const ContributeDocument = gql`
    query contribute($relativePath: String!) {
  contribute(relativePath: $relativePath) {
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
    ...ContributeParts
  }
}
    ${ContributePartsFragmentDoc}`;
export const ContributeConnectionDocument = gql`
    query contributeConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ContributeFilter) {
  contributeConnection(
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
        ...ContributeParts
      }
    }
  }
}
    ${ContributePartsFragmentDoc}`;
export const ImpactDocument = gql`
    query impact($relativePath: String!) {
  impact(relativePath: $relativePath) {
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
    ...ImpactParts
  }
}
    ${ImpactPartsFragmentDoc}`;
export const ImpactConnectionDocument = gql`
    query impactConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ImpactFilter) {
  impactConnection(
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
        ...ImpactParts
      }
    }
  }
}
    ${ImpactPartsFragmentDoc}`;
export const ResourcesDocument = gql`
    query resources($relativePath: String!) {
  resources(relativePath: $relativePath) {
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
    ...ResourcesParts
  }
}
    ${ResourcesPartsFragmentDoc}`;
export const ResourcesConnectionDocument = gql`
    query resourcesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ResourcesFilter) {
  resourcesConnection(
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
        ...ResourcesParts
      }
    }
  }
}
    ${ResourcesPartsFragmentDoc}`;
export const VolunteerDocument = gql`
    query volunteer($relativePath: String!) {
  volunteer(relativePath: $relativePath) {
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
    ...VolunteerParts
  }
}
    ${VolunteerPartsFragmentDoc}`;
export const VolunteerConnectionDocument = gql`
    query volunteerConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: VolunteerFilter) {
  volunteerConnection(
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
        ...VolunteerParts
      }
    }
  }
}
    ${VolunteerPartsFragmentDoc}`;
export const PrivacyDocument = gql`
    query privacy($relativePath: String!) {
  privacy(relativePath: $relativePath) {
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
    ...PrivacyParts
  }
}
    ${PrivacyPartsFragmentDoc}`;
export const PrivacyConnectionDocument = gql`
    query privacyConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PrivacyFilter) {
  privacyConnection(
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
        ...PrivacyParts
      }
    }
  }
}
    ${PrivacyPartsFragmentDoc}`;
export const MediaDocument = gql`
    query media($relativePath: String!) {
  media(relativePath: $relativePath) {
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
    ...MediaParts
  }
}
    ${MediaPartsFragmentDoc}`;
export const MediaConnectionDocument = gql`
    query mediaConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: MediaFilter) {
  mediaConnection(
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
        ...MediaParts
      }
    }
  }
}
    ${MediaPartsFragmentDoc}`;
export const CrisisSupportDocument = gql`
    query crisisSupport($relativePath: String!) {
  crisisSupport(relativePath: $relativePath) {
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
    ...CrisisSupportParts
  }
}
    ${CrisisSupportPartsFragmentDoc}`;
export const CrisisSupportConnectionDocument = gql`
    query crisisSupportConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: CrisisSupportFilter) {
  crisisSupportConnection(
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
        ...CrisisSupportParts
      }
    }
  }
}
    ${CrisisSupportPartsFragmentDoc}`;
export const ForumDocument = gql`
    query forum($relativePath: String!) {
  forum(relativePath: $relativePath) {
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
    ...ForumParts
  }
}
    ${ForumPartsFragmentDoc}`;
export const ForumConnectionDocument = gql`
    query forumConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ForumFilter) {
  forumConnection(
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
        ...ForumParts
      }
    }
  }
}
    ${ForumPartsFragmentDoc}`;
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
    },
    shared(variables, options) {
      return requester(SharedDocument, variables, options);
    },
    sharedConnection(variables, options) {
      return requester(SharedConnectionDocument, variables, options);
    },
    home(variables, options) {
      return requester(HomeDocument, variables, options);
    },
    homeConnection(variables, options) {
      return requester(HomeConnectionDocument, variables, options);
    },
    mission(variables, options) {
      return requester(MissionDocument, variables, options);
    },
    missionConnection(variables, options) {
      return requester(MissionConnectionDocument, variables, options);
    },
    therapy(variables, options) {
      return requester(TherapyDocument, variables, options);
    },
    therapyConnection(variables, options) {
      return requester(TherapyConnectionDocument, variables, options);
    },
    contribute(variables, options) {
      return requester(ContributeDocument, variables, options);
    },
    contributeConnection(variables, options) {
      return requester(ContributeConnectionDocument, variables, options);
    },
    impact(variables, options) {
      return requester(ImpactDocument, variables, options);
    },
    impactConnection(variables, options) {
      return requester(ImpactConnectionDocument, variables, options);
    },
    resources(variables, options) {
      return requester(ResourcesDocument, variables, options);
    },
    resourcesConnection(variables, options) {
      return requester(ResourcesConnectionDocument, variables, options);
    },
    volunteer(variables, options) {
      return requester(VolunteerDocument, variables, options);
    },
    volunteerConnection(variables, options) {
      return requester(VolunteerConnectionDocument, variables, options);
    },
    privacy(variables, options) {
      return requester(PrivacyDocument, variables, options);
    },
    privacyConnection(variables, options) {
      return requester(PrivacyConnectionDocument, variables, options);
    },
    media(variables, options) {
      return requester(MediaDocument, variables, options);
    },
    mediaConnection(variables, options) {
      return requester(MediaConnectionDocument, variables, options);
    },
    crisisSupport(variables, options) {
      return requester(CrisisSupportDocument, variables, options);
    },
    crisisSupportConnection(variables, options) {
      return requester(CrisisSupportConnectionDocument, variables, options);
    },
    forum(variables, options) {
      return requester(ForumDocument, variables, options);
    },
    forumConnection(variables, options) {
      return requester(ForumConnectionDocument, variables, options);
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
