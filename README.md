<div align="center">
<img src="https://farm5.staticflickr.com/4711/40126461411_b1ed283d45_o.jpg">
<h1>spacex-server</h1>
<p>
  A GraphQL wrapper over the
  <a href="https://github.com/r-spacex/SpaceX-API">SpaceX REST API</a>
</p>
<a href="https://github.com/iNoles/spacex-server/actions">
    <img
      alt="GitHub Workflow Status"
      src="https://img.shields.io/github/workflow/status/iNoles/spacex-server/CI/main?style=for-the-badge"
    >
</a>
<a href="https://codecov.io/gh/iNoles/spacex-server">
   <img
        alt="Code Coverage"
        src="https://img.shields.io/codecov/c/github/iNoles/spacex-server.svg?style=for-the-badge"/>
</a>
</div>

## Usage

URL: [`http://graphql-spacex-server.herokuapp.com`](http://graphql-spacex-server.herokuapp.com)

Endpoint: `/graphql`

### Queries

Complete documentation about each query is available through the [SpaceX API Docs](https://docs.spacexdata.com).

| Query       | Parameters                                                                                                        |
| :---------- | :---------------------------------------------------------------------------------------------------------------- |
| Capsule     | `id: String`                                                                                                      |
| Capsules    | `limit: Int`, `offset: Int`, `order: String`, `sort: String`                                                      |
| Company     |                                                                                                                   |
| Core        | `id: String`                                                                                                      |
| Cores       | `limit: Int`, `offset: Int`, `order: String`, `sort: String`                                                      |
| Crew        | `id: String`                                                                                                      |
| Crews       | `limit: Int`, `offset: Int`, `order: String`, `sort: String`                                                      |
| Dragon      | `id: String`                                                                                                      |
| Dragons     | `limit: Int`, `offset: Int`                                                                                       |
| History     | `id: String`                                                                                                      |
| Histories   | `limit: Int`, `offset: Int`, `order: String`, `sort: String`                                                      |
| Landingpad  | `id: String`                                                                                                      |
| Landingpads | `limit: Int`, `offset: Int`                                                                                       |
| Launch      | `id: String`                                                                                                      |
| Launches    | `range: latest/next/past/upcoming`, `limit: Int`, `offset: Int`, `order: String`, `sort: String`, `ids: [String]` |
| Launchpad   | `id: String`                                                                                                      |
| Launchpads  | `limit: Int`, `offset: Int`                                                                                       |
| Payload     | `id: String`                                                                                                      |
| Payloads    | `limit: Int`, `offset: Int`, `order: String`, `sort: String`                                                      |
| Roadster    |                                                                                                                   |
| Rocket      | `id: String`                                                                                                      |
| Rockets     | `limit: Int`, `offset: Int`                                                                                       |
| Ship        | `id: String`                                                                                                      |
| Ships       | `limit: Int`, `offset: Int`, `order: String`, `sort: String`                                                      |
| Starlink    | `id: String`                                                                                                      |
| Starlinks   | `limit: Int`, `offset: Int`, `order: String`, `sort: String`                                                      |

#### Parameters

| Parameter      | Description                                                      |
| :------------- | :--------------------------------------------------------------- |
| id             | ID of item being requested                                       |
| ids            | Array of IDs                                                     |
| limit          | limit on the number of results returned                          |
| offset         | Offset or skip results from the beginning of the query           |
| order          | Set order of results (`asc` or `desc`)                           |
| sort           | Sort results by any value in the response                        |
