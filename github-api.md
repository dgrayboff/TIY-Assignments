## Reading APIs - GitHub

How does the API handle authentication?
Do I need to authenticate?
  Not all requests require authentication. Requests that require authentication will return a 404 Not Found message, instead of 403 Forbidden, in some places. This is to prevent the accidental leakage of private repositories to unauthorized users.
What can I do with an unauthenticated request?
  "If your OAuth application needs to make unauthenticated calls with a higher rate limit, you can pass your app's client ID and secret as part of the query string."
How can I authenticate my request? (3 ways)
 Through Basic Authentication, OAuth2 Token (sent in a header), and OAuth2 Token (sent as a parameter).



How do I ask the API for...
The profile information for a specific user?
  Through https://api.github.com, and data is sent and received with JSON files.
The repository listing for a specific user?
  GET /user/repos
The recent, public activity for a specific user?
  GET /users/:username/repos

Is there a limit to the number of requests I can make?
  "For requests using Basic Authentication or OAuth, you can make up to 5,000 requests per hour. For unauthenticated requests, the rate limit allows you to make up to 60 requests per hour."
Is there a way of extending that limit?
  It looks like you can contact GitHub's API support team to request a call/request limit increase.
What happens when I hit the limit?
  You'll receive an error message-- status: 403 Forbidden.


What if there is a lot of data returned?
How can I ask for more (or less) data from a request?
How do I know that there is more data available?



What are the endpoints for fetching...
the profile data for a user?
the organizations a user belongs to?
  GET /orgs/:org
the repositories a user has created?
  GET /user/repos
a filtered list of repositories?
a sorted list of repositories?
  GET /users/:username/repos/sort
public events for a user?
  GET /events



When fetching public events for a user...
How many results are returned by default?
  30
What limitations exist on fetching more results?
  Events that are older than 90 days will not be included.
What is the basic structure of the results?
  It looks like a JSON file with data that resembles JS objects. There's a status, link, x-rate-limit and x-rate-limit remaining in the header of the result.
What fields are included in each result?
What are the data types for each field?
What are some of the different values for the type field?
  Event, User, Organization.
