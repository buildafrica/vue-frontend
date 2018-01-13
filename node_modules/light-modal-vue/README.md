# LightModal for VUE 2
Light modal component for Vue, based on the Modal Component Example and added some features like:
- close on outside click
- slot support
- some animations
- support Bootstrap, but it works without Bootstrap too!

## ✔ Getting started

Get the package:
```bash
npm install light-modal-vue
```

Register LightModal in your app entrypoint:
```js
import Vue from 'vue'
import LightModal from 'light-modal-vue';

Vue.component('modal', LightModal);
```

In your HTML call it like

```html
<modal
	v-show = "show_modal"
	title  = "Title"
	intro  = "intro_class"
	outro  = "outro_class"
	@close = "close_method">
	<!-- HEADER -->
	<div slot = "modal-header">
		the header slot is optional
	</div>
	<!-- BODY -->
	<div slot = "modal-body">
		this is the body
	</div>
	<!-- FOOTER -->
	<div slot = "modal-footer">
		this is the footer
	</div>
</modal>
```
in this case the variable "show_modal" is controlling when the modal appears,
intro it's the class associated when the modal show, and outro when the modal hide,
close_method it's the callback for the close event.


## Integrate Animate.css
Get Animate.css:
```bash
npm install animate.css
```
Import animate.css in your app
```js
import 'animate.css/animate.min.css';
```
use it with LightModal
```html
<modal
	v-show = "show"
	title  = "Title"
	intro  = "bounceIn"
	outro  = "bounceOut"
	@close = "close">
</modal>
```


## License
MIT



#### Status
This project is in an early stage of development. Any contribution is welcome :D
