class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}

function getQuery(query, object) {

    let methods = {
        'contains': (string, substring) => string.includes(substring),
        'starts': (string, substring) => string.startsWith(substring),
        'ends': (string, substring) => string.endsWith(substring),
        '>': (number, numberInQuery) => (+number > +numberInQuery),
        '<': (number, numberInQuery) => (+number < +numberInQuery),
        '<=': (number, numberInQuery) => (+number <= +numberInQuery),
        '>=': (number, numberInQuery) => (+number >= +numberInQuery),
        '=': (number, numberInQuery) => (+number === +numberInQuery),
    }

    let possibleActionsString = ['contains', 'starts', 'ends'];
    let possibleActionsNumber = ['<', '=', '>', '<=', '>='];

    let stringResult = true;
    let numberResult = true;
    let result = false;

    let actionsArray = query.split('&');

    function stringCheck(action, object) {
        let actionSplit = action.split('-');
        return methods[actionSplit[1]](
            object[actionSplit[0]],
            actionSplit[2],
        )
    }

    function numberCheck(action, object) {
        let actionSplit = action.split('-');
        return ( methods[ (actionSplit[1]).match(/\D+/) ] )(
            object[actionSplit[0]],
            (actionSplit[1]).match(/\d+/),
        )
    }

    for (let action of actionsArray) {
        result = false;
        for (let possibleAct of possibleActionsString) {

            if (action.includes(possibleAct)) {
                stringResult = stringCheck(action, object)
            }

        }

        for (let possibleAct of possibleActionsNumber) {

            if (action.includes(possibleAct)) {
                numberResult = numberCheck(action, object)
            }


        }
        if (!stringResult || !numberResult) break;
        result = true;
    }

    return result
}




let query1 = "name-starts-fd&quantity-=5"
let query2 = "name-contains-fd&price-=2&quantity->5&description-ends-abc"


let resultArray = []


// массив с объектами (для query2)
products = [
    new Product('Somefding', 2, 7, 'Wow! abc'),
    new Product('Soming', 2, 7, 'Wow! abc'),
    new Product('Somefding', 3, 7, 'Wow! abc'),
    new Product('Somefding', 2, 7, 'Wow!'),
    new Product('fding', 2, 7, 'abc'),
]




for (let product of products) {
    if (getQuery(query2, product)) {
        resultArray.push(product)
    }
}

console.log(resultArray)