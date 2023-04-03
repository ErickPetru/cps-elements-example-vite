# CPS Elements - Exemplo - Vite

Um modelo de configuração mínima demonstrando como importar componentes [CPS Elements](https://github.com/cpsrepositorio/cps-elements) com [Vite](https://vitejs.dev) como empacotador do projeto.

> **CPS Elements** é parte do projeto de UI/UX institucional, que também sustenta o [CPS Design System](https://cpsrepositorio.github.io/cps-design-system/), projetados originalmente pelo professor [Erick Petrucelli](https://github.com/ErickPetru). Independentemente de suas origens e motivações iniciais, é um projeto totalmente _open-source_ disponível sob os termos da licença [MIT](https://github.com/cpsrepositorio/cps-elements/blob/main/LICENSE.md).

Curiosamente, este exemplo na verdade mostra como nenhuma configuração extra é necessária com Vite! Apenas a instalação da biblioteca de componentes e as importações básicas de estilos e componentes, fim.

Opcionalmente, recursos como ícones podem carregados pela instalação local com o _bundler_ ao invés de serem carregados por CDN. Para tal, a única configuração Vite necessária é copiar os ícones de `node_modules/@cps-elements/web/assets` para a pasta `assets` de seu próprio projeto, através do `vite-plugin-static-copy`.

Observe que Vite pode ser usado com _frameworks_ JavaScript, onde configurações extras podem ser necessárias. Mas para utilização com Web nativa, ou seja, HTML, CSS e JavaScript puros, tudo é _out-of-the-box_.

## Visualizando no StackBlitz

Este projeto pode ser executado, visualizado e até editado _online_. [Abrir no StackBlitz ⚡️](https://stackblitz.com/edit/cps-elements-example-vite)

## Executando manualmente este projeto

Para execução com _hot-reload_ em modo de desenvolvimento:

```sh
npm run dev
```

Para compilar para produção:

```sh
npm run build
```

Para iniciar um servidor local e testar a compilação de produção:

```sh
npm run preview
```

Então abra o navegador na URL exibida após os comandos.
