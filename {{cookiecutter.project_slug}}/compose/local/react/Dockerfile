FROM node:22-alpine

WORKDIR /app/client

COPY ./client/package.json ./
COPY ./client/pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY ./client ./

EXPOSE 5173

CMD ["pnpm", "run", "dev", "--host"] 
