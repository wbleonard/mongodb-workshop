exports = function(changeEvent) {
  
  // Get the new document from the changeEvent...
  var fullDocument = changeEvent.fullDocument;
  
  // Connect to the Workshop database
  // (make sure these values match your environment)
  var linkedCluster = "WorkshopCluster";
  var databaseName = "sample_restaurants";
  var db = context.services.get(linkedCluster).db(databaseName);
  
  // Save the restaurant to the new collection
  collection = db.collection("NewRestaurants");
  var status = collection.insertOne(fullDocument);


};
