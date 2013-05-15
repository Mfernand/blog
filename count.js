
/*
 * Count.
 */
 module.exports = function(){
	var cont = 0;
	return function(req, res, next){
		cont++;
		console.log("Visitas: " + cont);
		res.locals.miVariable = cont;
		next();
	};
};