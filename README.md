# graph-server
BE side with graphql

## Query example


```javascript
query GetUsers {
  users {
    id
    name
    lastName
    email
    articles {
      title
    }
  }
}



query GetUser($aId: ID!, $dId: ID!, $hasId: Boolean!) {
  author: user(id: $aId) {
      name
      email
    ...authorFields
  }
  director: user(id: $dId) {
      name
      email
    ... on Director {
      id @include(if: $hasId)
      money
      articles {
        title
      }
    }
  }
}

fragment authorFields on Author {
  id @include(if: $hasId)
}










mutation CreateUser {
  createUser(user: {
    email: "user2sss@email.com"
    name: "user2sss"
    lastName: "usersss"
    password: "123"
  }) {
    id
    name
    lastName
    email
  }
}

mutation CreateArticle {
  createArticle(article: {
    title: "pam param2"
    description: "hehehe"
    createdBy: "5d330a9a2eb9dc093089ec2e"
  }) {
    id
    title
    createdBy
  }
}

*args*

{
  "aId": "5d330792a99d852f28c6450a",
  "dId": "5d330a9a2eb9dc093089ec2e",
  "hasId": true
}
```