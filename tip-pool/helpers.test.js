describe('Utilities test with set up and tear down', function(){
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });
    
    it('should sum the toltal tip amount of all payments on sumPaymentTotal', function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(20);

        billAmtInput.value = 100;
        tipAmtInput.value = 50;
        
        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(70);
    });

    it('should sum total bill amount of all payments on sumPaymentTotal()', function(){
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 500;
        tipAmtInput.value = 20;

        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(600);
    });

    it('should sum the total tip percent on sumPaymentTotal()', function(){
        expect(sumPaymentTotal('tipPercent')).toEqual(20);

        billAmtInput.value = 100;
        tipAmtInput.value = 20;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });

    it('should sum tip percent of a single tip on calculateTipPercent()', function () {
        expect(calculateTipPercent(100, 50)).toEqual(50);
        expect(calculateTipPercent(500, 250)).toEqual(50);
    });

    it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
        let newTr = document.createElement('tr');

        appendTd(newTr, 'test');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    });

    it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
        let newTr = document.createElement('tr');

        appendDeleteBtn(newTr);

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    });

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
});