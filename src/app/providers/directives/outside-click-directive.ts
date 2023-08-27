import type {Directive} from "vue";

export default <Directive> {
	mounted: function (el, binding) {
		el.clickOutsideEvent = function (event) {
			if (!(el == event.target || el.contains(event.target))) {
				//TODO accept expressions, like someVar == true
				binding.value(event, el)
			}
		}
		document.addEventListener("click", el.clickOutsideEvent)
	},
	unmounted: function (el) {
		document.removeEventListener("click", el.clickOutsideEvent)
	},
};
