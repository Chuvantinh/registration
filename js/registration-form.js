!function () {
	"use strict";
	document.addEventListener("DOMContentLoaded", (function () {
		var a = this;
		$("#showadminpass").click((function (t) {
			t.preventDefault();
			var a = $("#password");
			"password" === a.attr("type") ? a.attr("type", "text") : a.attr("type", "password")
		})), $("form").submit((function () {
			$(a).find(":submit").attr("disabled", "disabled"), $(a).find(":submit")[0].value = t("registration", "Loading …")
		}))
	}))
}();
//# sourceMappingURL=registration-form.js.map?v=2f99bd8b8e2f96df0fe1
