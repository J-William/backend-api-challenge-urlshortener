# URL Shortener Microservice


A freecodecamp backend api challenge project

POST /api/shorturl
{ url: 'An original url'}

Returns JSON object with original_url and short_url properties



URL Shortener

- You can POST a URL to /api/shorturl and get a JSON response with original_url and short_url properties. Here's an example: { original_url : 'https://freeCodeCamp.org', short_url : 1}
- When you visit /api/shorturl/<short_url>, you will be redirected to the original URL.
- If you pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain { error: 'invalid url' }