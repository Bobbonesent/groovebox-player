!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Oscilloscope=e()}(this,function(){"use strict";var t=function(t,e){if(void 0===e&&(e={}),!(t instanceof window.AudioNode))throw new Error("Oscilloscope source must be an AudioNode");t instanceof window.AnalyserNode?this.analyser=t:(this.analyser=t.context.createAnalyser(),t.connect(this.analyser)),e.fftSize&&(this.analyser.fftSize=e.fftSize),this.timeDomain=new Uint8Array(this.analyser.frequencyBinCount),this.drawRequest=0};return t.prototype.animate=function(t,e,i,n,a){var o=this;if(this.drawRequest)throw new Error("Oscilloscope animation is already running");this.ctx=t;var s=function(){t.clearRect(0,0,t.canvas.width,t.canvas.height),o.draw(t,e,i,n,a),o.drawRequest=window.requestAnimationFrame(s)};s()},t.prototype.stop=function(){this.drawRequest&&(window.cancelAnimationFrame(this.drawRequest),this.drawRequest=0,this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height))},t.prototype.draw=function(t,e,i,n,a){void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=t.canvas.width-e),void 0===a&&(a=t.canvas.height-i),this.analyser.getByteTimeDomainData(this.timeDomain);var o=n/this.timeDomain.length;t.beginPath();for(var s=0;s<this.timeDomain.length;s+=2){var r=e+s*o,c=i+a*(this.timeDomain[s]/256);t.lineTo(r,c)}t.stroke()},t});
//# sourceMappingURL=oscilloscope.min.js.map
