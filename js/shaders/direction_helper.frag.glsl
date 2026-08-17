#ifdef GL_ES
precision highp float;
#endif

varying float light;
varying float lift;

void main(void)
{
	// Literals are authored in sRGB; decode to the linear working space before shading.
	if (gl_FrontFacing) {
		gl_FragColor = vec4(sRGBTransferEOTF(vec4(0.20, 0.68, 0.32, 1.0)).rgb * light, 1.0);
	} else {
		gl_FragColor = vec4(sRGBTransferEOTF(vec4(0.76, 0.21, 0.20, 1.0)).rgb * light, 1.0);
	}

	if (lift > 0.1) {
		gl_FragColor.r = gl_FragColor.r * 1.16;
		gl_FragColor.g = gl_FragColor.g * 1.16;
		gl_FragColor.b = gl_FragColor.b * 1.16;
	}
	if (lift > 0.2) {
		if (gl_FrontFacing) {
			gl_FragColor.r = gl_FragColor.r * 0.8;
			gl_FragColor.g = gl_FragColor.g * 0.9;
			gl_FragColor.b = gl_FragColor.g * 1.5;
		} else {
			gl_FragColor.r = gl_FragColor.r * 0.9;
			gl_FragColor.g = gl_FragColor.g * 2.0;
			gl_FragColor.b = gl_FragColor.g * 3.0;
		}
	}

	#include <colorspace_fragment>
}