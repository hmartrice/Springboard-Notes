beforeAll(function () {
    billAmtInput.value = 100
    tipAmtInput.value = 50
})

describe("Testing submitPaymentInfo", function () {
    let event = ''
    submitPaymentInfo(event);
    it("bill and tip input should be changed back to zero", function () {
        expect(billAmtInput.value).toEqual("")
        expect(tipAmtInput.value).toEqual("")
    })
})      