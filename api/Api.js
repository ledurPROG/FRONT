const BASE_URL = 'http://localhost:5174/api';
const BOOKS_API_URL = `${BASE_URL}/Livros`;
const USERS_API_URL = `${BASE_URL}/Usuario`;

export const getBooks = async () => {
  const response = await fetch(BOOKS_API_URL);

  if (!response.ok) {
    throw new Error('Erro ao buscar dados dos livros.');
  }

  return await response.json();
};

export const postBook = async (book) => {
  const response = await fetch(BOOKS_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });

  if (!response.ok) {
    throw new Error('Erro ao adicionar livro.');
  }

  return await response.json();
};

export const putBook = async (livroId, usuarioId) => {
  const response = await fetch(`${BOOKS_API_URL}/${livroId}/emprestar/${usuarioId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Erro ao emprestar livro.');
  }
};

export const returnBook = async (livroId, usuarioId) => {
  const response = await fetch(`${BOOKS_API_URL}/${livroId}/devolver/${usuarioId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Erro ao devolver livro.');
  }
};

export const getUsers = async () => {
  const response = await fetch(USERS_API_URL);

  if (!response.ok) {
    throw new Error('Erro ao buscar dados dos usuários.');
  }

  return await response.json();
};

export const postUser = async (user) => {
  const response = await fetch(USERS_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error('Erro ao adicionar usuário.');
  }

  return await response.json();
};

export const deleteUser = async (id) => {
  const response = await fetch(`${USERS_API_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Erro ao remover usuário.');
  }
};
