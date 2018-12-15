window.onload = initAutocomplete;
var activeLI = -1;

function initAutocomplete() {
    //var str = "Жанна, Світлана, Таня, Яна, Оксана";
    fetch('/js/models/girls.json')
        .then(function (response) {
            //alert(response.headers.get('Content-Type')); // application/json; charset=utf-8
            //alert(response.status); // 200

            return response.json();
        })
        .then(function (user) {
            console.log(user);
            //alert(user.name); // iliakan
        })
        .catch(alert);
    //var list = str.split(', ');
    var search = document.getElementById("userInput");

    var ul = document.createElement('ul');
    for (var i = 0; i < list.length; i++) {
        var li = document.createElement('li');
        var html = `
                    <img src="images/${list[i]}.jpg" class="img-circle" />
                    <a href="#">${list[i]}</a>
            `;
        li.innerHTML = html;
        ul.appendChild(li);
    }
    var parent = document.getElementById("droplistContent");
    parent.appendChild(ul);

    var lis=parent.getElementsByTagName('li');

    search.onkeyup = function (e) {
        var count=lis.length;
        if (e.keyCode == 40) {
            if (activeLI == count - 1)
                return;
            if (activeLI >= 0)
                lis[activeLI].classList.remove("li-active");
            activeLI++;
            lis[activeLI].classList.add("li-active");
        }
        else if (e.keyCode == 38) {
            if (activeLI == 0)
                return;
            if (activeLI <= count - 1)
                lis[activeLI].classList.remove("li-active");
            activeLI--;
            lis[activeLI].classList.add("li-active");
        }
    }
    console.log("Hello");
}