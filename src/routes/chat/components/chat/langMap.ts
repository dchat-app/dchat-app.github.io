const monacoLanguageMap: { [key: string]: string | undefined } = {
	abap: 'ABAP',
	apex: 'Apex',
	azcli: 'Azure CLI',
	bat: 'Batch',
	c: 'C',
	clj: 'Clojure',
	coffeescript: 'CoffeeScript',
	cpp: 'C++',
	csharp: 'C#',
	css: 'CSS',
	dockerfile: 'Dockerfile',
	fsharp: 'F#',
	go: 'Go',
	graphql: 'GraphQL',
	handlebars: 'Handlebars',
	html: 'HTML',
	ini: 'INI',
	java: 'Java',
	javascript: 'JavaScript',
	json: 'JSON',
	julia: 'Julia',
	kotlin: 'Kotlin',
	latex: 'LaTeX',
	less: 'LESS',
	lua: 'Lua',
	markdown: 'Markdown',
	mips: 'MIPS Assembly',
	msdax: 'MSDAX',
	mysql: 'MySQL',
	objective: 'Objective-C',
	pascal: 'Pascal',
	perl: 'Perl',
	pgsql: 'PostgreSQL',
	php: 'PHP',
	plaintext: 'Plain Text',
	powershell: 'PowerShell',
	pug: 'Pug (Jade)',
	python: 'Python',
	r: 'R',
	razor: 'Razor',
	ruby: 'Ruby',
	rust: 'Rust',
	sb: 'Scala',
	sass: 'SASS',
	scss: 'SCSS',
	shell: 'Shell',
	sol: 'Solidity',
	sql: 'SQL',
	swift: 'Swift',
	toml: 'TOML',
	typescript: 'TypeScript',
	vb: 'Visual Basic',
	xml: 'XML',
	yaml: 'YAML',
};

export const getFullLanguageName = (shortCode: string) =>
	monacoLanguageMap[shortCode] || 'JavaScript';
