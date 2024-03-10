const loginButton = document.querySelector("#login");
const TCInput = document.querySelector("#TC");

const userInputMenu = document.querySelector("#userInputMenu");
const aiChat = document.querySelector("#ai");

const msg1 = document.getElementById("message1");
const msg2 = document.getElementById("message2");
const msg3 = document.getElementById("message3");
const msg4 = document.getElementById("message4");

var firstPartFinished = false;

const aiInput = document.getElementById("aiInput");

const nextButton = document.getElementById("next");

const hospitalMenu = document.getElementById("availableHospitals");

const backButton = document.getElementById("backButton");

const TCReg = new RegExp(/(?<!.)\d{11}(?!.)/g);

function openAiMenu() {
	if (TCReg.test(TCInput.value) == false) {
		document.getElementById("error").innerText = "Please use a valid TC";
	} else {
		backButton.style.display = "inline";
		userInputMenu.classList.replace("visible", "hidden");
		aiChat.classList.replace("hidden", "visible");
	}
}

function sendProblem() {
	if (aiInput.value != "" && firstPartFinished == false) {
		nextButton.className = "visible";
		msg1.innerText = aiInput.value;
		aiInput.value = "";
		msg1.classList.replace("notSent", "sent");
		setTimeout(() => {
			msg2.classList.replace("notSent", "sent");
		}, 1000);
		firstPartFinished = true;
	} else if (aiInput.value != "" && firstPartFinished == true) {
		msg3.innerText = aiInput.value;
		aiInput.value = "";
		msg3.classList.replace("notSent", "sent");
		setTimeout(() => {
			document.getElementById("chat").style.overflowY = "auto";
			msg4.classList.replace("notSent", "sent");
		}, 1000);
	}
}

function showData() {
	backButton.style.display = "inline";
	aiChat.classList.replace("visible", "hidden");
	hospitalMenu.classList.replace("hidden", "visible");
}

function openMainMenu() {
	// backButton.style.display = "none";
	// aiChat.classList.replace("visible", "hidden");
	// hospitalMenu.classList.replace("visible", "hidden");
	// userInputMenu.classList.replace("hidden", "visible");
	window.location = "/";
}
