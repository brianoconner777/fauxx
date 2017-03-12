module.exports = function(Fauxorder) {

  Fauxorder.disableRemoteMethodByName("create", true);
	   // Fauxorder.disableRemoteMethodByName("find", false);
  Fauxorder.disableRemoteMethodByName("findById", true);
  Fauxorder.disableRemoteMethodByName("update", true);
  Fauxorder.disableRemoteMethodByName("updateById", true);
  Fauxorder.disableRemoteMethodByName("patchById", true);
  // Fauxorder.disableRemoteMethodByName("exists", true);
  Fauxorder.disableRemoteMethodByName("upsert", true);
  Fauxorder.disableRemoteMethodByName("count", true);
  Fauxorder.disableRemoteMethodByName("delete", true);
  Fauxorder.disableRemoteMethodByName("deleteById", true);
  Fauxorder.disableRemoteMethodByName("updateAll", true);
  Fauxorder.disableRemoteMethodByName("createChangeStream", true);
  Fauxorder.disableRemoteMethodByName("findOne", true);
  Fauxorder.disableRemoteMethodByName("updateAttributes", true);
  Fauxorder.disableRemoteMethodByName("updateAttribute", true);
  Fauxorder.disableRemoteMethodByName("confirm", true);
  Fauxorder.disableRemoteMethodByName("upsertWithWhere", true);
  Fauxorder.disableRemoteMethodByName("replaceById", true);
  Fauxorder.disableRemoteMethodByName("replaceOrCreate", true);
  Fauxorder.disableRemoteMethodByName("replaceAttributes", true);
  Fauxorder.disableRemoteMethodByName("replaceAttribute", true);
  Fauxorder.disableRemoteMethodByName("isNewRecord", true);
  Fauxorder.disableRemoteMethodByName("rectifyChange", true);
  Fauxorder.disableRemoteMethodByName("patchAttributes", true);
  Fauxorder.disableRemoteMethodByName("patchOrCreate", true);


};
