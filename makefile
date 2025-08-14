SHELL := /bin/bash

name ?= Example
folder ?= componentes

target_dir = src/$(folder)/$(name)
capitalized_name = $(shell echo $(name) | awk 'BEGIN{FS="_"} {for(i=1;i<=NF;i++) $$i=toupper(substr($$i,1,1)) substr($$i,2)} 1' OFS="")

page:
	@echo "Criando componente '$(capitalized_name)' em $(target_dir)..."
	@mkdir -p $(target_dir)
	@printf "export default function $(capitalized_name)() {\n\treturn (\n\t\t<div>\n\t\t\t<h1>$(capitalized_name) Component</h1>\n\t\t</div>\n\t);\n}\n" > $(target_dir)/index.tsx
	@echo "Componente criado em: $(target_dir)/$(capitalized_name).tsx"
