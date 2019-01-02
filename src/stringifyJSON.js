// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var str = "";
  if (Array.isArray(obj) === true) {
  	str = "[";
  	if (obj.length > 0) {
  		for (var i = 0; i < obj.length; i++) {
	  		if (Array.isArray(obj[i])) {
	  			str += stringifyJSON(obj[i]) + ",";
	  		} else {
	  			if (typeof obj[i] === "string") {
		  			str += "\"" + obj[i] + "\",";
		  		} else {
		  			str = str + obj[i] + ",";
		  		}
	  		}
	   	}

	   	str = str.substr(0, str.length - 1) + "]";
	} else {
	  	str += "]";
	}
	// in the case of an object
  } else if (obj instanceof Object) {
  	str = "{";
  	
  	for (var i in obj) {
  		if (i instanceof Object) {
  			str += stringifyJSON(i) + ":";
  		}
  		if (typeof obj[i] === "string") {
  			str = str + "\"" + i + "\":" + "\"" + obj[i] + "\"" + ",";
  		} else if (obj[i] instanceof Object) {
  			str += "\"" + i + "\":" + stringifyJSON(obj[i]) + ",";
  		} else {
  			str = str + "\"" + i + "\":" + obj[i] + ","
  		}
  	}
  	if (str.length > 1) {
  		str = str.substr(0, str.length - 1) + "}";
  	} else {
  		str += "}";
  	}
  	
  } else if (typeof obj === "string") {
  	str += "\"" + obj + "\"";
  } else {
  	str += obj;
  }

  return str;
};
