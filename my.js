function convertMonney() {
    // code

    //lay  gia tri tu o input
    let amount = document.getElementById('amount').value;
    let from_currency = document.getElementById('from_currency').value;
    let to_currency = document.getElementById('to_currency').value;

    result = (amount * to_currency) / from_currency;

    document.getElementById('result').innerHTML = result


}