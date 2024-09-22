# Usar a imagem base do Node
FROM node:14

# Definir o diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos
COPY . .

# Expor a porta que a aplicação vai usar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
