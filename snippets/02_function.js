exports = async function(arg){
  
    const db = "sample_restaurants";
    const coll = "restaurants";

    var collection = context.services
        .get("mongodb-atlas").db(db).collection(coll);
    var doc = await collection.findOne({name: arg});
    if (doc === null) {
        msg = `No restaurants named ${arg} were found. Check the spelling of your database '${db}' and collection '${coll}'.` 
        return msg;
    }
    return doc;
}
