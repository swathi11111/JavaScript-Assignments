// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    if (typeof mass==='number' && typeof height==='number'&& mass>0 && height>0){
    var BMI=mass/(height*height);
    return BMI;
    }
    else{
        return "INVALID INPUT";
    }

}
module.exports = BMICalculator;
