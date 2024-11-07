import "../scss/style.scss";
import "./utils/prism.js";
import { iosVhFix } from "./utils/ios-vh-fix.js";
import { burgerActive } from "./modules/header/init-page-menu.js";

window.addEventListener("DOMContentLoaded", () => {
  iosVhFix();

  window.addEventListener("load", () => {
    //задание по бургеру
    burgerActive();
    //задание с данными
		if (window.location.pathname === "/data.html") {
			import("./modules/filter/init-filter.js")
				.then((m) => {
					m.activeFilter();
				})
		}
		
  });
});
