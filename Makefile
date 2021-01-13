install:
	npm install

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
    npm install
	npx eslint .
