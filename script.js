var cities = document.getElementById("city");
var districts = document.getElementById("district");
var Parameter = {
    url: "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json",
    method: "GET",
    responseType: "json",
};

var promise = axios(Parameter);
promise.then(function (result) {
    renderCity(result.data);
});

function renderCity(data) {
    for (const x of data) {
        cities.options[cities.options.length] = new Option(x.Name, x.Id);
    }
    cities.onchange = function () {
        districts.length = 1;
        if (this.value != "") {
            const result = data.find(n => n.Id === this.value);
            if (result && result.Districts) {
                for (const k of result.Districts) {
                    districts.options[districts.options.length] = new Option(k.Name, k.Id);
                }
            }
        }
    };
}

function submitForm() {
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var selectedCity = document.getElementById("city");
    var city = selectedCity.options[selectedCity.selectedIndex].text;
    var selectedDistrict = document.getElementById("district");
    var district = selectedDistrict.options[selectedDistrict.selectedIndex].text;

    var output = "Số điện thoại: " + phone + "<br>";
    output += "Email: " + email + "<br>";
    output += "Tỉnh/thành phố: " + city + "<br>";
    output += "Quận/huyện: " + district + "<br>";

    document.getElementById("output").innerHTML = output;
}
