
it('should calculate the monthly rate correctly', function () {
    let values = { "amount": 17500, "years": 3, "rate": 0.2999 }
    expect(calculateMonthlyPayment(values)).toEqual(742.81)

    values = { "amount": 800000, "years": 30, "rate": 0.03 }
    expect(calculateMonthlyPayment(values)).toEqual(3372.83)
});


it("should return a result with 2 decimal places", function () {
    let values = { "amount": 10000, "years": 5, "rate": 0.2999 }
    expect(calculateMonthlyPayment(values)).toEqual(323.47)
    expect(calculateMonthlyPayment(values)).toBeCloseTo(323.47, 2)
    expect(calculateMonthlyPayment(values)).not.toEqual(323.473)
    expect(calculateMonthlyPayment(values)).not.toEqual(323.5)
});


it("shouldn't be able to calculate strings as inputs", function () {
    let values = { "amount": "sdfg", "years": 35, "rate": 0.75 }
    expect(calculateMonthlyPayment(values)).toEqual(NaN)
})


it("shouldn't be able to calculate strings as inputs", function () {
    let values = { "amount": "sdfg", "years": 35, "rate": 0.75 }
    expect(() => checkInputs(values)).toThrowError("Invalid Input")
})


