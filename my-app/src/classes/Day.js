class Day {

    constructor(dayAbv) {
        this.date = undefined
        this[`${dayAbv}Date_es_:date`] = undefined
        for (let index = 1; index < 5; index++) {
            let end = ""
            if (index !== 1){
                end = `_${index}`
            }
            this[`${dayAbv}Type Reg Vac Sick Pers Hol${end}`] = "Reg";
            this[`${dayAbv}In${end}`] = undefined;
            this[`${dayAbv}Out${end}`] = undefined;          
        }
        this.abv = dayAbv
        this.num1 = 2
        this.num2 = 3
        this.[`${dayAbv}HOURS WORKED`] = {function() {return (this.num1 + this.num2)}}

    }
    calcHours() {
        return (this.num1 + this.num2)
    }
}



export default Day