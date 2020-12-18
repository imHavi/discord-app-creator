const fetch = require("node-fetch");

(async function() {
	setInterval(async () => {
		await fetch("https://discord.com/api/v8/applications", {
		  "headers": {
			"accept": "*/*",
			"accept-language": "tr,en-US;q=0.9,en;q=0.8",
			"authorization": "Kullanıcı tokeni girin.",
			"content-type": "application/json",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-origin",
			},
		  "referrer": "https://discord.com/developers/applications",
		  "referrerPolicy": "no-referrer-when-downgrade",
		  "body": "{\"name\":\"Havi Bot\",\"team_id\":null}",
		  "method": "POST",
		  "mode": "cors"
		});
    console.log("Application başarıyla oluşturuldu.")
	}, 2000);
})();
