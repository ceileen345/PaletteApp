import React from 'react';
import { SketchPicker } from 'react-color';
import logo from './logo.svg';
import './App.css';

class ColorPicker extends React.Component {
  state = {
    background: '#888888',
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });

  };

  render() {
    return (
      <div>
        <h1>Palette Generator</h1>
        <div className = "colorBox">
          <SketchPicker
            color={ this.state.background }
            onChangeComplete={ this.handleChangeComplete }
          />
        </div>
        <div>
          <h2>Monochrome Tint and Shade</h2>
          <PrimaryBox
            backcolor={this.state.background}
          />
          <PrimaryLighterTint
            backcolor={this.state.background}
          />
          <PrimaryTint
            backcolor={this.state.background}
          />
          <PrimaryShade
            backcolor={this.state.background}
          />
        </div>
        <div>
          <h2>Complementary Tint</h2>
          <PrimaryBox
            backcolor={this.state.background}
          />
          <PrimaryTint
            backcolor={this.state.background}
          />
          <ComplementBox
            primcolor={this.state.background}
          />
          <ComplementTint
            primcolor={this.state.background}
          />
        </div>
        <div>
          <h2>Complementary Shade</h2>
          <PrimaryBox
            backcolor={this.state.background}
          />
          <PrimaryShade
            backcolor={this.state.background}
          />
          <ComplementBox
            primcolor={this.state.background}
          />
          <ComplementShade
            primcolor={this.state.background}
          />
        </div>
        <div>
          <h2>Primary Adjacent</h2>
          <PrimaryBox
            backcolor={this.state.background}
          />
          <LeftColorBox
            backcolor={this.state.background}
          />
          <RightColorBox
            backcolor={this.state.background}
          />
          <ComplementBox
            primcolor={this.state.background}
          />
        </div>
        <div>
          <h2>Complementary Adjacent</h2>
          <PrimaryBox
            backcolor={this.state.background}
          />
          <LeftCompBox
            backcolor={this.state.background}
          />
          <RightCompBox
            backcolor={this.state.background}
          />
          <ComplementBox
            primcolor={this.state.background}
          />
        </div>
      </div>
    );
  }
}

class PrimaryBox extends React.Component {
  render() {
    const {color} = this.props;
    const swatchStyle = {
      backgroundColor: this.props.backcolor,
    }
    return (
      <div class="colorBox">
        <div style={swatchStyle} class="swatchBox"></div>
        <div class="labelBox">{this.props.backcolor}</div>
      </div>
    )
  }
}

class LeftColorBox extends React.Component {
  render() {
    const {color} = this.props;
    const leftColor = changeHue(this.props.backcolor, 30);
    const swatchStyle = {
      backgroundColor: leftColor,
    }
    return (
      <div class="colorBox">
        <div style={swatchStyle} class="swatchBox"></div>
        <div class="labelBox">{leftColor}</div>
      </div>
    )
  }
}

class RightColorBox extends React.Component {
  render() {
    const {color} = this.props;
    const rightColor = changeHue(this.props.backcolor, -30);
    const swatchStyle = {
      backgroundColor: rightColor,
    }
    return (
      <div class="colorBox">
        <div style={swatchStyle} class="swatchBox"></div>
        <div class="labelBox">{rightColor}</div>
      </div>
    )
  }
}

class PrimaryTint extends React.Component {
  render() {
    const {color} = this.props;
    const originalColor = this.props.backcolor;
    const tintColor = ColorLuminance(originalColor, 0.6);
    const tintStyle = {
      backgroundColor: tintColor,
    }
    return(
      <div class="colorBox">
        <div style={tintStyle} class="swatchBox"></div>
        <div class="labelBox">{tintColor}</div>
      </div>
    )
  }
}

class PrimaryLighterTint extends React.Component {
  render() {
    const {color} = this.props;
    const originalColor = this.props.backcolor;
    const tintColor = ColorLuminance(originalColor, 2);
    const tintStyle = {
      backgroundColor: tintColor,
    }
    return(
      <div class="colorBox">
        <div style={tintStyle} class="swatchBox"></div>
        <div class="labelBox">{tintColor}</div>
      </div>
    )
  }
}

class PrimaryShade extends React.Component {
  render() {
    const {color} = this.props;
    const originalColor = this.props.backcolor;
    const shadeColor = ColorLuminance(originalColor, -0.4);
    const shadeStyle = {
      backgroundColor: shadeColor,
    }
    return(
      <div class="colorBox">
        <div style={shadeStyle} class="swatchBox"></div>
        <div class="labelBox">{shadeColor}</div>
      </div>
    )
  }
}

class ComplementBox extends React.Component {
  render() {
    const {color} = this.props;
    const originalColor = this.props.primcolor;
    const comColor = invertColor(originalColor);
    const comStyle = {
      backgroundColor: comColor,
    }
    return (
      <div class="colorBox">
        <div style={comStyle} class="swatchBox"></div>
        <div class="labelBox">{comColor}</div>
      </div>
    )
  }
}

class LeftCompBox extends React.Component {
  render() {
    const {color} = this.props;
    const leftColor = changeHue(this.props.backcolor, 150);
    const swatchStyle = {
      backgroundColor: leftColor,
    }
    return (
      <div class="colorBox">
        <div style={swatchStyle} class="swatchBox"></div>
        <div class="labelBox">{leftColor}</div>
      </div>
    )
  }
}

class RightCompBox extends React.Component {
  render() {
    const {color} = this.props;
    const rightColor = changeHue(this.props.backcolor, -150);
    const swatchStyle = {
      backgroundColor: rightColor,
    }
    return (
      <div class="colorBox">
        <div style={swatchStyle} class="swatchBox"></div>
        <div class="labelBox">{rightColor}</div>
      </div>
    )
  }
}

class ComplementTint extends React.Component {
  render() {
    const {color} = this.props;
    const originalColor = this.props.primcolor;
    const comColor = invertColor(originalColor);
    const tintColor = ColorLuminance(comColor, 0.6);
    const tintStyle = {
      backgroundColor: tintColor,
    }
    return(
      <div class="colorBox">
        <div style={tintStyle} class="swatchBox"></div>
        <div class="labelBox">{tintColor}</div>
      </div>
    )
  }
}

class ComplementShade extends React.Component {
  render() {
    const {color} = this.props;
    const originalColor = this.props.primcolor;
    const comColor = invertColor(originalColor);
    const shadeColor = ColorLuminance(comColor, -0.4);
    const shadeStyle = {
      backgroundColor: shadeColor,
    }
    return(
      <div class="colorBox">
        <div style={shadeStyle} class="swatchBox"></div>
        <div class="labelBox">{shadeColor}</div>
      </div>
    )
  }
}

function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}

function ColorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}


function changeHue(rgb, degree) {
    var hsl = rgbToHSL(rgb);
    hsl.h += degree;
    if (hsl.h > 360) {
        hsl.h -= 360;
    }
    else if (hsl.h < 0) {
        hsl.h += 360;
    }
    return hslToRGB(hsl);
}

// exepcts a string and returns an object
function rgbToHSL(rgb) {
    // strip the leading # if it's there
    rgb = rgb.replace(/^\s*#|\s*$/g, '');

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if(rgb.length == 3){
        rgb = rgb.replace(/(.)/g, '$1$1');
    }

    var r = parseInt(rgb.substr(0, 2), 16) / 255,
        g = parseInt(rgb.substr(2, 2), 16) / 255,
        b = parseInt(rgb.substr(4, 2), 16) / 255,
        cMax = Math.max(r, g, b),
        cMin = Math.min(r, g, b),
        delta = cMax - cMin,
        l = (cMax + cMin) / 2,
        h = 0,
        s = 0;

    if (delta == 0) {
        h = 0;
    }
    else if (cMax == r) {
        h = 60 * (((g - b) / delta) % 6);
    }
    else if (cMax == g) {
        h = 60 * (((b - r) / delta) + 2);
    }
    else {
        h = 60 * (((r - g) / delta) + 4);
    }

    if (delta == 0) {
        s = 0;
    }
    else {
        s = (delta/(1-Math.abs(2*l - 1)))
    }

    return {
        h: h,
        s: s,
        l: l
    }
}

// expects an object and returns a string
function hslToRGB(hsl) {
    var h = hsl.h,
        s = hsl.s,
        l = hsl.l,
        c = (1 - Math.abs(2*l - 1)) * s,
        x = c * ( 1 - Math.abs((h / 60 ) % 2 - 1 )),
        m = l - c/ 2,
        r, g, b;

    if (h < 60) {
        r = c;
        g = x;
        b = 0;
    }
    else if (h < 120) {
        r = x;
        g = c;
        b = 0;
    }
    else if (h < 180) {
        r = 0;
        g = c;
        b = x;
    }
    else if (h < 240) {
        r = 0;
        g = x;
        b = c;
    }
    else if (h < 300) {
        r = x;
        g = 0;
        b = c;
    }
    else {
        r = c;
        g = 0;
        b = x;
    }

    r = normalize_rgb_value(r, m);
    g = normalize_rgb_value(g, m);
    b = normalize_rgb_value(b, m);

    return rgbToHex(r,g,b);
}

function normalize_rgb_value(color, m) {
    color = Math.floor((color + m) * 255);
    if (color < 0) {
        color = 0;
    }
    return color;
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}



function App() {
  return (
    <div>
    <ColorPicker />
    </div>
  );
}

export default App;
