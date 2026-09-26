# API App Scholar — Alunos

API Node.js + Express + MySQL/MariaDB somente para o módulo de alunos.

## 1. Banco

O banco esperado é `bd_escola`.

Importe primeiro o arquivo `bd_escola.sql` no MySQL/MariaDB.

## 2. Configuração

Na pasta da API:

```bash
npm install
```

Copie `.env.example` para `.env` e configure o usuário/senha do banco.

Exemplo:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=bd_escola
PORT=3000
```

Se o root não tiver senha, deixe `DB_PASSWORD=` vazio.

## 3. Iniciar

```bash
npm start
```

Para desenvolvimento:

```bash
npm run dev
```

## 4. Endpoints

- `GET /api/health` — testa API e banco
- `GET /api/alunos` — lista alunos
- `GET /api/alunos/:id` — consulta um aluno
- `POST /api/alunos` — cadastra aluno
- `PUT /api/alunos/:id` — atualiza aluno
- `DELETE /api/alunos/:id` — exclui aluno

## 5. Exemplo de POST

URL:

```text
http://localhost:3000/api/alunos
```

JSON:

```json
{
  "Nome": "João da Silva",
  "Data_de_Nascimento": "2010-05-20",
  "idRuas": 1,
  "CPF": "12345678900",
  "Email": "joao@email.com",
  "Telefone": "12999999999"
}
```

## Observação

O campo `idRuas` precisa existir na tabela `ruas`. A API não cadastra endereço automaticamente; ela recebe o ID da rua existente.
