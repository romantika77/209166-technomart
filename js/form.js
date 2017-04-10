var link = document.querySelector(".btn-feedback");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-content-close");
var login = popup.querySelector("[name=fullname]");
var mail = popup.querySelector("[name=email");
var form = popup.querySelector("form");
var storage = localStorage.getItem("fullname");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-feedback-show");
	
	if (storage) {
		login.value = storage;
		mail.focus();
	} else {
		login.focus();
	}
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-feedback-show");
});

form.addEventListener("submit", function(event) {
	if (!login.value || !mail.value) {
	event.preventDefault();
	console.log("Нужно ввести свои имя и адрес");
} else {
	localStorage.setItem("fullname", login.value);
}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-feedback-show")) {
		popup.classList.remove("modal-feedback-show");   
	}
 }
});

var buyItem = document.querySelectorAll(".buy");
var popupBasket = document.querySelector(".modal-basket");
var closeBasket = document.querySelector(".modal-content-close");

buyItem.addEventListener("click", function(event) {
	event.preventDefault();
	popupBasket.classList.add("modal-basket-show");
	});

closeBasket.addEventListener("click", function(event) {
	event.preventDefault();
	popupBasket.classList.remove("modal-basket-show");
	});
