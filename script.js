var parser, xmlDoc;
var text = 
"<data_file>"+
	"<device>"+
			"<device_name>MacbookPro</device_name>"+
			"<os>macOS Sierra</os>"+
			"<speed>1.3GHz</speed>"+
			"<ram>8GB</ram>"+
			"<screen_resolution>2304 X 1440</screen_resolution>"+
	"</device>"+

	"<device>"+
		"<device_name>Samsung Galaxy Tab E</device_name>"+
		"<os>Android APQ 8016</os>"+
		"<speed>1.3GHz</speed>"+
		"<ram>1.5GB</ram>"+
		"<screen_resolution>1280 X 800</screen_resolution>"+
	"</device>"+

	"<device>"+
		"<device_name>Sony Xpeira M</device_name>"+
		"<os>Android 4.1</os>"+
		"<speed>Dual-core 1.0Ghz</speed>"+
		"<ram>4GB</ram>"+
		"<screen_resolution>480 X 854</screen_resolution>"+
	"</device>"+

"</data_file>";

parser = new DOMParser();
xmlDoc = parser.parseFromString(text,"text/xml");

window.onload=function()
{
	//get the original node
	var root = xmlDoc.getElementsByTagName('device');
	//loop through each node and add to the html of each different div
	for(var i=0;i<root[0].childNodes.length;i++)
	{
		document.getElementById("div1").innerHTML +=
		xmlDoc.getElementsByTagName("device")[0].childNodes[i].childNodes[0].nodeValue +"<br>";
		document.getElementById("div2").innerHTML +=
		xmlDoc.getElementsByTagName("device")[1].childNodes[i].childNodes[0].nodeValue +"<br>";
		document.getElementById("div3").innerHTML +=
		xmlDoc.getElementsByTagName("device")[2].childNodes[i].childNodes[0].nodeValue +"<br>";
	}
}
