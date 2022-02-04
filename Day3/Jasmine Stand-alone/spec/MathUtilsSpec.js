describe("Testing MathUtils Functions", function () {
    var calc;

    //This method will be called before running each spec
    beforeEach(function () {
        calc = new MathUtils();
        spyOn(calc,'sum')
    });

    describe("Testing Basic Mathametics Operation", function () {

        //test case or test spec for sum operation
        it("should be able to calculate sum of 5 and 8", function () {
           // expect(calc.sum(5, 8)).toEqual(13);
           calc.sum(3,5);

           expect(calc.sum).toHaveBeenCalled();
           expect(calc.sum).toHaveBeenCalledWith(3,5);
        });

        //test case for Multiply operation
        it("Should be able to multiply 10 and 40 ", function () {
            expect(calc.mul(10, 40)).toEqual(400);
        });

        //Test spec for factorial operation
        it("Should ba able to calculate the factorial of 9", function () {
            expect(calc.factorial(9)).toEqual(362880);
        });

        //Test spec for factorial operation with negative number
        it("Shoule be able to throw error in factorial when the number is negative", function () {
            expect(function () {
                calc.factorial(-7)
            }).toThrowError(Error)
        });

    });


    describe("Nested Describe Demo", function () {
        beforeEach(function () {
            console.log("Before Each Level 1");
        });

        describe("Testing Level2", function () {
            beforeEach(function () {
                console.log("Before Each Level 2");
            });
            describe("Testing Level3", function () {
                beforeEach(function () {
                    console.log("Before Each Level 3");
                });

                it("Simple test spec in level3", function () {
                    console.log("This is a Simple Spec in level3");
                    expect(true).toBe(true);
                });

                afterEach(function () {
                    console.log("AfterEach Level 3");
                });
            });

            afterEach(function () {
                console.log("AfterEach Level 2");
            });
        });

        afterEach(function () {
            console.log("AfterEach Level 1");
        });

    });

});