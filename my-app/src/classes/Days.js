class Days {

    constructor(dayAbvs) {
        for (let i = 0; i < dayAbvs.length; i++) {
                this[`${dayAbvs[i]}Date_es_:date`] = undefined;
                this[`${dayAbvs[i]}HOURS WORKED`] = undefined;
                for (let index = 1; index < 4; index++) {
                    let end = ""
                    if (index !== 1){
                        end = `_${index}`
                    }
                    this[`${dayAbvs[i]}Type Reg Vac Sick Pers Hol${end}`] = "Reg";
                    this[`${dayAbvs[i]}In${end}`] = undefined;
                    this[`${dayAbvs[i]}Out${end}`] = undefined;              
                }    
        }
    }
    calcHours() {
        return null;
    }
}



export default Days