beforeAll(function () {
    //initialize allPayments
    billAmtInput.value = 150;
    tipAmtInput.value = 25;
    submitPaymentInfo();
    billAmtInput.value = 150;
    tipAmtInput.value = 30;
    submitPaymentInfo();
})

describe("Testing sumPaymentTotal", function () {
    it("sumPaymentTotal should total items currently", function () {
        expect(sumPaymentTotal("billAmt")).toEqual(300)
        expect(sumPaymentTotal("tipAmt")).toEqual(55)
    })
})

describe("Testing Calculate Tip Percent", function () {
    it("Should return a rounded number", function () {
        let billAmount = 100
        let tipAmount = 100
        expect(calculateTipPercent(billAmount, tipAmount)).toEqual(100)
    })
})

describe("Testing append", function () {
    it("Should add a td element to tr", function () {
        let bill = 100
        let testTr = document.createElement("tr")
        let paymentBody = document.querySelector("#paymentTable tbody")
        testTr.setAttribute("id", "testTr")
        appendTd(testTr, bill)
        paymentBody.append(testTr)
        expect(document.querySelector("#testTr").innerHTML).toEqual("<td>100</td>")
    })
})

afterAll(function () {
    let paymentRec = document.querySelectorAll("#paymentTable tbody tr")
    let paymentBody = document.querySelector("#paymentTable tbody")
    for (let i = 0; i < paymentRec.length; i++) {
        paymentRec[i].innerHTML = ''
    }

    let tds = document.querySelectorAll("#summaryTable tbody tr td")
    for (let i = 0; i < tds.length; i++) {
        tds[i].innerHTML = '';
    }
})