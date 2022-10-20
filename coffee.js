var milk = [60, 80, 100]
var cream = [75, 90, 125]
var latte = [100, 125, 150]
var coffee=["Espresso","Cappuccino","Latte"]

var bill={
    coffee:"",
    addons:[],
    total:""
}

function StarBucks() {
    
    var amount = 0;
    while (true) {
        var help = prompt("sir may i help you yes,no")

        if (help === "yes") {
            var input = prompt("Sir which coffee you would like to drink type number \n 0=Espresso, \n 1=Cappuccino, \n 2=Latte")

            amount += milk[input] + latte[input] + cream[input]

            if ((input == 0 || input == 1 || input == 2)) {
                var askingforaddons = prompt("would you like to addOns \n yes,\n no")

                if (askingforaddons == "yes") {

                    while (true) {
                        const addOns = prompt("here some addOns \n Milk, \n Cream, \n Latte \n if you not like to add so type 'no'")

                        if (addOns=="no") {
                            break;
                        }

                        bill.addons.push(addOns);

                        if(addOns=="milk"){
                            amount+=milk[input]
                        }
                        else if(addOns=="cream"){
                            amount+=cream[input]
                        }
                        else if(addOns=="latte"){
                            amount+=latte[input]
                        }
                    }
                }

                var howmuchcup = prompt("how much cup of coffee you would like to have")

                if (howmuchcup) {
                    amount*=howmuchcup
                    bill.coffee=coffee[input]
                    bill.total=amount
                    console.info(`your bill for ${howmuchcup} coffee is here`);
                    console.log(bill);

                }

                var variety = prompt("you want to order more variety coffee \n yes,\n no");
                if (variety == "yes") {
                    StarBucks();
                }
                else {
                    break;
                }
            }


        }

        if (help == "no") {
            console.log("thanks for comming");
            break;
        }

        else {
            console.log("thanks for comming");
            break;
        }

    }
}

StarBucks();