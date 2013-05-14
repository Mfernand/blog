
/*
 * Count.
 */
 module.exports = function(){
	 var cont = 0;
	 function count(req, res, next){
		cont++;
		console.log("Visitas: " + cont);
		next();
	}
}