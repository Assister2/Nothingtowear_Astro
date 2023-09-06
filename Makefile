MAKEFLAGS += --silent
#SHELL = /bin/bash -o pipefail

include .env

help:
	sed -rn 's/^([a-zA-Z0-9_-]+):.*?##(.*).*?## (.*)/'$$(tput setaf 99)'make '$$(tput setaf 99)$$(tput bold)'\1|'$$(tput setaf 96)'\2'$$(tput sgr0)'|\3/p' < $(or ${makefile}, Makefile) | sort | column -t -s "|"

update-version-env: ## ## updates VERSION in env file before
	sed -i '/^VERSION=/d' .env
	echo "VERSION=$$(${MAKE} version)" | tee -a .env

version:
	if [ -f VERSION ]; then \
		cat VERSION;\
    else\
		git tag --sort=committerdate | tail -1 | tr -d v;\
    fi

new-version: ## version=x.y.z ## Shortcut to tag a new version on the repo
	test -z ${version} && git tag --sort=committerdate | tail -1 | awk -F. -v OFS=. 'NF==1{print ++$$NF}; NF>1{if(length($$NF+1)>length($$NF))$$(NF-1)++; $$NF=sprintf("%0*d", length($$NF), ($$NF+1)%(10^length($$NF))); print}' > .NEW_VERSION || echo ${version} > .NEW_VERSION
	echo "Current version: `git tag --sort=committerdate | tail -1`";
	@(read -p "Enter a version number [`cat .NEW_VERSION`]: " NEW_VERSION; if [ "$$NEW_VERSION" != "" ]; then echo $$NEW_VERSION > .NEW_VERSION; fi)
	echo "New version: `cat .NEW_VERSION`"

release: new-version ## ## Shortcut to create a new version, merge to master and push
	git checkout master;
	git merge dev;
	git tag `cat .NEW_VERSION`
	git push && git push --tags;
	git checkout dev;
	git merge master
	rm -f .NEW_VERSION

pr: new-version ## ## Shortcut to create a new version, merge to dev and push (for an online PR)
	git tag `cat .NEW_VERSION`
	git push && git push -`-tags;
	rm -f .NEW_VERSION

reload-varnish:
	docker-compose exec varnish sh -c "varnishadm vcl.load config_$$(date +%s) /etc/varnish/default.vcl && varnishadm vcl.use config_$$(date +%s)"

sql: ## ## accessing database shortcut
	docker-compose exec postgresql psql -U postgres

upgrade:
	git pull
