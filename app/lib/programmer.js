class Programmer{

	constructor(name, language="Ruby"){
		this.name = name;
		this.language = language;
	}

	evangelize(){
		return (`${this.name}: ${this.language.toUpperCase()} IS THE BEST LANGUAGE EVER`);
	}
}

export function addJavaScript(array) {
		return array + "JavaScript";
	}


export var bestLanguages = ["Ruby", "Elixir"];
export default Programmer;