cleanbranches:
	@git stash
	@git checkout develop
	@git branch | grep -v "main\|develop" | xargs git branch -D
	@git pull

abortmerge:
	@git merge --abort

install:
	@rm -rf node_modules
	@npm install
	
run:
	@npm run web 