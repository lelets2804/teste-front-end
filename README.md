# Teste Front-End Jr - Econverse
Página de e-commerce desenvolvida a partir do layout do Figma, com React e TypeScript.

## Tecnologias
- React 19 + TypeScript
- Vite
- Sass (SCSS)
- HTML semântico e meta tags de SEO
- Sem bibliotecas de UI

## Funcionalidades
- Vitrine de produtos em carrossel, consumindo o JSON do teste
- Modal com as informações do produto clicado (foto, nome, preço e descrição)
- Seletor de quantidade no modal
- O modal fecha pelo botão de fechar, clicando fora da caixa ou com a tecla Esc

## Pré-requisitos
- Node.js 20 ou superior
- npm

## Como rodar o projeto
1. Clone o repositório:

```bash
git clone https://github.com/lelets2804/teste-front-end.git
cd teste-front-end
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra no navegador o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

## Como compilar

```bash
npm run build
```

Os arquivos de produção são gerados na pasta `dist`. Para visualizar o resultado da compilação:

```bash
npm run preview
```

## Como testar
O projeto não possui testes automatizados. A verificação é feita pelos comandos abaixo:

```bash
npm run lint
npx tsc --noEmit -p tsconfig.app.json
```

O primeiro confere o padrão do código e o segundo confere os tipos do TypeScript. Também é possível comparar a página com o layout do Figma no navegador.

## Observação sobre a lista de produtos
Os produtos são buscados do JSON disponibilizado no teste:

`https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`

O servidor desse arquivo bloqueia requisições diretas do navegador (CORS). Por isso, em desenvolvimento, o `vite.config.ts` usa um proxy (`/api-econverse`) que busca o arquivo pelo servidor do Vite. Esse proxy funciona com `npm run dev`. Em um ambiente de produção, seria necessário que o servidor do JSON liberasse CORS ou que houvesse um proxy equivalente.

## Estrutura do projeto
```
src/
├── assets/          imagens e ícones
├── components/
│   ├── Header/
│   ├── Banner/
│   ├── Categories/
│   ├── ProductShowcase/
│   ├── ProductCard/
│   ├── ProductModal/
│   ├── Partners/
│   ├── Brands/
│   ├── Newsletter/
│   └── Footer/
├── services/        busca dos produtos (productService.ts)
├── types/           tipos TypeScript (Product.ts)
├── App.tsx
├── main.tsx
└── index.css        variáveis e estilos globais
```

Cada componente tem seu próprio arquivo `.tsx` e `.scss`.