class Lease{

    constructor(){

        this.leaseRates = {
            "Monthly":{
                "operating":{
                "private":{
                    "Advance":[40.32, 28.17],
                    "Arrears":[40.62, 28.43]
                },
                "state":{
                    "Advance":[40.20, 27.91],
                    "Arrears":[40.49, 28.10]
                }      
                },
                "finance": {
                    "private":{
                        "Advance":[46.38, 32.06, 25.03, 20.71],
                        "Arrears":[46.48, 32.28, 25.21, 20.85]
                    },
                    "state":{
                        "Advance":[0, 31.83, 24.80, 20.47],
                        "Arrears":[0, 32.05, 24.97, 20.61]
                    }      
                }
            },
            "Termly":{
                "operating":{
                    "private":{
                        "Advance":[159.31, 111.31],
                        "Arrears":[164.11, 114.47]
                    }   
                },
                "finance": {
                    "private":{
                        "Advance":[183.31, 126.73, 98.92, 81.84],
                        "Arrears":[188.83, 130.33, 101.72, 84.09]
                    } 
                } 
            },
            "Quarterly":{
                "operating":{
                    "state":{
                        "Advance":[119.63, 83.11],
                        "Arrears":[122.26, 86.07]
                    }      
                },
                "finance": {
                    "state":{
                        "Advance":[0, 94.80, 73.84, 60.96],
                        "Arrears":[0, 97.86, 75.32, 62.14]
                    }      
                }
            },
            "Annual":{
                "operating":{
                    "state":{
                        "Advance":[462.33, 321.78],
                        "Arrears":[502.97, 353.52]
                    }      
                },
                "finance": {
                    "state":{
                        "Advance":[0, 367.41, 285.88, 236.07],
                        "Arrears":[0, 402.43, 308.78, 254.34]
                    }      
                }
            }
        }
        this.indicativeValue = 18.5;
        this.date = this.currentDate()
    }

    currentDate(){
        // Date object
        const date = new Date();

        let currentDay= String(date.getDate()).padStart(2, '0');

        let currentMonth = String(date.getMonth()+1).padStart(2,"0");

        let currentYear = date.getFullYear();

        // we will display the date as DD-MM-YYYY 

        return `${currentDay}-${currentMonth}-${currentYear}`;

    }
}