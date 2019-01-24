exports = function(arg){
  
  // Compose Bing Entity Search URL
  const requestUrl =encodeURI("https://api.cognitive.microsoft.com/bing/v7.0/entities?mkt=es-US&q="+arg);

  // Get a handle to the Stich HTTP Service
  const httpService = context.services.get("http");
  
  // Exucute the request
  return httpService
    .get({ url: requestUrl,
      headers: {
        "Ocp-Apim-Subscription-Key": [context.values.get("AzureSubscriptionKey")],
        "content-type": ["application/json"],
        "accept": ["application/json"],
      }
    })
    .then(response => {
      //The response body is encoded as raw BSON.Binary. Parse it to JSON.
      const ejson_body = EJSON.parse(response.body.text());
      return ejson_body;
    });
};

