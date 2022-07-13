window.onload = function() {
    window.setInterval(
        function() {
            var d = new Date();
            document.getElementById("clock").innerHTML = d.toLocaleTimeString();
        }, 1000);
}


/* function Dates() { */
var d = new Date();

var day = new Array("Неділя", "Понеділок", "Вівторок",
    "Середа",
    "Четвер", "П'ятниця", "Субота");

var month = new Array("Січеня", "Лютого", "Березеня", "Квітеня", "Травеня", "Червеня",
    "Липня", "Серпня", "Вересня", "Жовтня", "Листопада", "Грудня");

document.write("<b> " + "Сьогодні: " + day[d.getDay()] + " " + d.getDate() + " " + month[d.getMonth()] +
    " " + d.getFullYear() + " г." + "</b> ");
/* the end function Dates() { */

function postal_services() {
    var names = String(Postal.name.value);
    var firstnames = String(Postal.firstname.value);
    var patronymics = String(Postal.patronymic.value);
    var genders = String(Postal.gender.value);
    var weights = String(Postal.weight.value);
    var delivery_services = String(Postal.delivery_service.value);
    var delivery_methods = String(Postal.delivery_method.value);
    var payment_method = String(Postal.Payment_method.value);
    var payment_methods = String(Postal.Payment_methods.value);
    var stickers = String(Postal.stickers.value);
    var Payment_method = document.getElementById('Payment_method');
    var Payment_methods = document.getElementById('Payment_methods');
    var Stickers = document.getElementById('stickers');
    var Response = document.getElementById('response').value;
    var suma1 = 0;
    var suma2 = 0;
    var suma3 = 0;
    var suma4 = 0;
    var suma5 = 0;
    if (weights === "до 1") {
        suma1 = 50;
    } else if (weights === "Від 1 до 5") {
        suma1 = 70;
    } else if (weights === "Від 5 до 10") {
        suma1 = 100;
    } else if (weights === "Вище 10-ти") {
        suma1 = 200;
    }
    if (delivery_services === "Нова Пошта" || delivery_services === "Укрпошта") {
        suma2 = 140;
    } else if (delivery_services === "Інтайм" || delivery_services === "Делівері" || delivery_services === "Міст Експрес") {
        suma2 = 60;
    }
    if (delivery_methods === "Кур'єром") {
        suma3 = 70;
    } else if (delivery_methods === "У відділення") {
        suma3 = 0;
    }


    document.write("<table  border='2' width='500' height='200'>");
    document.write("<tr><td>" + '<b>' + '<i>' + "Ваше ім'я: " + "</td>" + '</b>' + '</i>');
    document.write("<td>" + '<b>' + '<i>' + names + "</td></tr>" + '</b>' + '</i>');
    document.write("<tr><td>" + '<b>' + '<i>' + "Ваше прізвище:" + "</td>" + '</b>' + '</i>');
    document.write("<td>" + '<b>' + '<i>' + firstnames + "</td></tr>" + '</b>' + '</i>');
    document.write("<tr><td>" + '<b>' + '<i>' + "Побатькові " + "</td>" + '</b>' + '</i>');
    document.write("<td>" + '<b>' + '<i>' + patronymics + "</td></tr>" + '</b>' + '</i>');
    document.write("<tr><td>" + '<b>' + '<i>' + "Стать: " + "</td>" + '</b>' + '</i>');
    document.write("<td>" + '<b>' + '<i>' + genders + "</td></tr>" + '</b>' + '</i>');
    document.write("<tr><td>" + '<b>' + '<i>' + "Вага(кг): " + "</td>" + '</b>' + '</i>');
    document.write("<td>" + '<b>' + '<i>' + weights + "</td></tr>" + '</b>' + '</i>');
    document.write("<tr><td>" + '<b>' + '<i>' + "Служба доставки в Україні: " + "</td>" + '</b>' + '</i>');
    document.write("<td>" + '<b>' + '<i>' + delivery_services + "</td></tr>" + '</b>' + '</i>');
    document.write("<tr><td>" + '<b>' + '<i>' + "Спосіб доставки: " + "</td>" + '</b>' + '</i>');
    document.write("<td>" + '<b>' + '<i>' + delivery_methods + "</td></tr>" + '</b>' + '</i>');
    if (Payment_method.checked) {
        document.write("<tr><td>" + '<b>' + '<i>' + "Спосіб оплати: " + "</td>" + '</b>' + '</i>');
        document.write("<td>" + '<b>' + '<i>' + payment_method + "</td></tr>" + '</b>' + '</i>');
        suma4 += 10;
    }
    if (Payment_methods.checked) {
        document.write("<tr><td>" + '<b>' + '<i>' + "Спосіб оплати: " + "</td>" + '</b>' + '</i>');
        document.write("<td>" + '<b>' + '<i>' + payment_methods + "</td></tr>" + '</b>' + '</i>');
        suma4 += 7;
    }
    if (Stickers.checked) {
        document.write("<tr><td>" + '<b>' + '<i>' + "Наліпки: " + "</td>" + '</b>' + '</i>');
        document.write("<td>" + '<b>' + '<i>' + stickers + "</td></tr>" + '</b>' + '</i>');
        suma5 = 5;
    } else {
        document.write("<tr><td>" + '<b>' + '<i>' + "Наліпки: " + "</td>" + '</b>' + '</i>');
        document.write("<td>" + '<b>' + '<i>' + "не потрібно " + "</td></tr>" + '</b>' + '</i>');
        suma5 = 0;
    }
    document.write("<tr><td>" + '<b>' + '<i>' + "Ваш відгук: " + "</td>" + '</b>' + '</i>');
    document.write("<td>" + '<b>' + '<i>' + Response + "</td></tr>" + '</b>' + '</i>');
    document.write("</table>");
    var suma = suma1 + suma2 + suma3 + suma4 + suma5;
    document.write("Сума до сплату: " + suma + " грн");
}