
/*
 * Count.
 */
var cont = 0;
exports.count = function(req, res, next){
	cont++;
	console.log("Visitas: " + cont);
	next();
};