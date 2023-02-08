beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
});

describe("Servers test (with setup and tear-down)", function () {

    it('should add a new server to allServers on submitServerInfo()', function () {
        submitServerInfo();

        expect(Object.keys(allServers).length).toEqual(1);
        expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });



});

describe("Update Server test (with setup and clean up)", function () {

    it("should add a new server to serverTBody on updateServerTable()", function () {
        submitServerInfo();
        updateServerTable();
        let key = String(Object.keys(allServers).length)
        let tdSName = document.getElementById("server" + key)
        expect(tdSName.firstChild.textContent).toEqual("Alice")
        expect(tdSName.lastChild.textContent).toEqual("$0.00")
    })
})

afterEach(function () {
    serverForm.reset()
    serverNameInput.value = ""
    document.getElementById("server1").remove()
    allServers = {}
    serverId = 0
});