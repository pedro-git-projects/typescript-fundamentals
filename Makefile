help:
	@echo 'Usage:'
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/ /'
# runs ts file using deno 
run:
	deno run $(FILE)
# pass the file name using FILE=<filename>
watch:
	tsc -w $(FILE)
# compile file
build:
	tsc $(FILE)
