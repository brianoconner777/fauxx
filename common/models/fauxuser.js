module.exports = function(Fauxuser) {

	  // Fauxuser.disableRemoteMethodByName("create", true);
	   // Fauxuser.disableRemoteMethodByName("find", false);
  Fauxuser.disableRemoteMethodByName("findById", true);
  Fauxuser.disableRemoteMethodByName("update", true);
  Fauxuser.disableRemoteMethodByName("updateById", true);
  Fauxuser.disableRemoteMethodByName("patchById", true);
  // Fauxuser.disableRemoteMethodByName("exists", true);
  Fauxuser.disableRemoteMethodByName("upsert", true);
  Fauxuser.disableRemoteMethodByName("count", true);
  Fauxuser.disableRemoteMethodByName("delete", true);
  Fauxuser.disableRemoteMethodByName("deleteById", true);
  Fauxuser.disableRemoteMethodByName("updateAll", true);
  Fauxuser.disableRemoteMethodByName("createChangeStream", true);
  Fauxuser.disableRemoteMethodByName("findOne", true);
  Fauxuser.disableRemoteMethodByName("updateAttributes", true);
  Fauxuser.disableRemoteMethodByName("updateAttribute", true);
  Fauxuser.disableRemoteMethodByName("confirm", true);
  Fauxuser.disableRemoteMethodByName("upsertWithWhere", true);
  Fauxuser.disableRemoteMethodByName("replaceById", true);
  Fauxuser.disableRemoteMethodByName("replaceOrCreate", true);
  Fauxuser.disableRemoteMethodByName("replaceAttributes", true);
  Fauxuser.disableRemoteMethodByName("replaceAttribute", true);
  Fauxuser.disableRemoteMethodByName("isNewRecord", true);
  Fauxuser.disableRemoteMethodByName("rectifyChange", true);
  Fauxuser.disableRemoteMethodByName("patchAttributes", true);
  Fauxuser.disableRemoteMethodByName("patchOrCreate", true);
  
};
