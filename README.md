# **API Pass+**

API para gerenciamento de filas em clínicas e hospitais, permitindo o cadastro de pacientes, gerenciamento de filas por especialidade e agendamento de consultas.

---

## **Instalação**

1. Clone o repositório.
2. Instale as dependências.
3. Configure o banco de dados.
4. Inicie o servidor.

A API estará disponível em: `http://localhost:3000`

---

## **Rotas da API**

### **1. Rota de Pacientes**

As rotas de pacientes permitem realizar operações básicas de CRUD (criar, ler, atualizar, deletar) para o gerenciamento de pacientes.

#### **GET /pacientes**  
**Descrição**: Lista todos os pacientes cadastrados.  
**Exemplo de uso**:
- Envie uma requisição `GET` para `http://localhost:3000/pacientes`.
- **Resposta**: A API retornará uma lista de pacientes.

#### **POST /pacientes**  
**Descrição**: Cria um novo paciente.  
**Exemplo de uso**:
- Envie uma requisição `POST` para `http://localhost:3000/pacientes` com o corpo da requisição contendo o nome e idade do paciente.
- **Exemplo de dados**: 
  - Nome: João
  - Idade: 25
- **Resposta**: A API retornará os dados do paciente recém-criado com o ID gerado.

#### **GET /pacientes/:id**  
**Descrição**: Consulta um paciente específico pelo ID.  
**Exemplo de uso**:
- Envie uma requisição `GET` para `http://localhost:3000/pacientes/1` (substitua `1` pelo ID do paciente que deseja consultar).
- **Resposta**: A API retornará os dados do paciente com o ID fornecido.

#### **PUT /pacientes/:id**  
**Descrição**: Atualiza as informações de um paciente específico pelo ID.  
**Exemplo de uso**:
- Envie uma requisição `PUT` para `http://localhost:3000/pacientes/1` (substitua `1` pelo ID do paciente que deseja atualizar) com o corpo da requisição contendo os dados atualizados (nome e idade).
- **Exemplo de dados**: 
  - Nome: João Atualizado
  - Idade: 26
- **Resposta**: A API retornará os dados atualizados do paciente.

#### **DELETE /pacientes/:id**  
**Descrição**: Remove um paciente específico pelo ID.  
**Exemplo de uso**:
- Envie uma requisição `DELETE` para `http://localhost:3000/pacientes/1` (substitua `1` pelo ID do paciente que deseja remover).
- **Resposta**: A API retornará uma resposta vazia indicando que o paciente foi removido com sucesso.

---

### **2. Rota de Filas**

As rotas de filas permitem a criação e consulta de filas de especialidade, onde pacientes podem ser agrupados para o atendimento por especialidade.

#### **GET /filas**  
**Descrição**: Lista todas as filas disponíveis.  
**Exemplo de uso**:
- Envie uma requisição `GET` para `http://localhost:3000/filas`.
- **Resposta**: A API retornará uma lista de filas de especialidades.

#### **POST /filas**  
**Descrição**: Cria uma nova fila de atendimento para uma especialidade.  
**Exemplo de uso**:
- Envie uma requisição `POST` para `http://localhost:3000/filas` com o corpo da requisição contendo a especialidade.
- **Exemplo de dados**: 
  - Especialidade: Cardiologia
- **Resposta**: A API retornará a fila recém-criada com o ID gerado.

#### **GET /filas/:id**  
**Descrição**: Consulta uma fila específica pelo ID.  
**Exemplo de uso**:
- Envie uma requisição `GET` para `http://localhost:3000/filas/1` (substitua `1` pelo ID da fila que deseja consultar).
- **Resposta**: A API retornará os dados da fila com o ID fornecido.

---

### **3. Rota de Consultas**

As rotas de consultas permitem agendar e listar consultas para os pacientes de acordo com as especialidades e horários.

#### **GET /consultas**  
**Descrição**: Lista todas as consultas agendadas.  
**Exemplo de uso**:
- Envie uma requisição `GET` para `http://localhost:3000/consultas`.
- **Resposta**: A API retornará uma lista de todas as consultas agendadas.

#### **POST /consultas**  
**Descrição**: Agendar uma nova consulta para um paciente.  
**Exemplo de uso**:
- Envie uma requisição `POST` para `http://localhost:3000/consultas` com o corpo da requisição contendo o ID do paciente e a data da consulta.
- **Exemplo de dados**: 
  - PacienteId: 1
  - Data: 2024-01-01
- **Resposta**: A API retornará os dados da consulta recém-agendada com o ID gerado.

---


