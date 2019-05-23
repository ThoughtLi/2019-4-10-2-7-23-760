module.exports = function main(inputs) {
    // write your code here...
	let total = 0;
	let per = 0.8;
	let waitprice = 0.25 * inputs['parkTime'];
	if(inputs['distance'] <= 2){ 
		total = 6+ waitprice;
		
	}
	if(inputs['distance'] > 2&&inputs['distance'] <= 8){
		total = 6 + per * (inputs['distance'] - 2) + waitprice;
	}
	if(inputs['distance'] > 8){
		total = 6 + per * 6 + per * 1.5 * (inputs['distance'] - 8) + waitprice;
	}
    return Math.round(total);
};
