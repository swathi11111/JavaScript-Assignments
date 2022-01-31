function CanDrive(hasDrivingLiscence, isTired, isSober) {
    if (!hasDrivingLiscence){
        return "You cannot drive";

    }else{
        if (!isSober || isTired){
            return "You shouldn't drive";

        }
    }
    return ("You can drive"); 
}

module.exports = CanDrive;
