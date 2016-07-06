How do I make API requests?
  * Through a standard HTTP call - Etsy API uses a RESTful calling style. Begins with https://openapi.etsy.com/v2 and ends with the URL for the specific command you want.
What is the base URL for all requests?
  * https://openapi.etsy.com/v2/
Are there any headers or query parameters required?

What kind of response should I expect?
  * Response is formatted in JSON, and the user name that's passed is converted into a user ID as part of the params in the JSON file.

How does the API handle authentication?
   * It uses OAuth 1.0 and request/access tokens.
Do I need to authenticate? with user credentials?
  * Authentication is needed, but temporary credentials are provided. To get these, you send Etsy a request with your consumer key, signed with your "shared secret". The return of temp credentials includes an OAuth token and token secret, so the app can authenticate against an Etsy member's account without requesting a username or password.
What can I do with an unauthenticated request?
  * The level of access is not that high and not that different from apps using basic, API-key-based authentication.
How can I authenticate my request? (what methods)
  * You can use the OAuth token credentials to make calls for that authenticated user. setToken() call is used to set final tokens and make the call to the Etsy API.

What Resource in the API represents...
an individual product?
  * Listing.
a group or collection of products?
  * Category.
images associated with a product?
  * ListingImage.
sizes and colors for a product?
  * ListingImage.
What actions and endpoints exist for each of these Resources?
  * ListingImage uses /listings/:listing_id/images as the endpoint.
  * Listing uses /featured_treasuries/listings
What parameters do each endpoint require or accept?
  * listing_id is required for all ListingImage endpoints, but can also accept listing_image_id, image, rank, overwrite and is_watermarked.
What fields are returned for each Resource, specifically:
an individual product?
  * There are many - listing_id, state, user_id, category_id, title, description, price, tags, quantity, url, views, when_made, style and more.
a group or collection of products?
  * Category_id, name, meta_title, page_title, page_description, short_name, long_name and more.
What additional fields can be requested for each?
