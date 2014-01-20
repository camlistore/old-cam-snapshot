/*
Copyright 2013 The Camlistore Authors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

goog.provide('cam.SpritedImage');

goog.require('goog.object');
goog.require('goog.string');

goog.require('cam.object');

cam.SpritedImage = React.createClass({
	render: function() {
		return (
			React.DOM.div({className: this.props.className, style: cam.object.extend(this.props.style, {overflow: 'hidden'})},
				React.DOM.img({src: this.props.src, style: this.getImgStyle_()})));
	},

	getImgStyle_: function() {
		var x = this.props.index % this.props.sheetWidth;
		var y = Math.floor(this.props.index / this.props.sheetWidth);
		if (y >= this.props.sheetHeight) {
			throw new Error(goog.string.subs('Index %s out of range', this.props.index));
		}
		var style = {};
		style[cam.reactUtil.getVendorProp('transform')] = goog.string.subs('translate3d(%spx, %spx, 0)', -x * this.props.spriteWidth, -y * this.props.spriteHeight);
		return style;
	}
});