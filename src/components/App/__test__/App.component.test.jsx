import { render, cleanup, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../';
import React from 'react';
import { result } from '../../../mock/youtube-videos-mock';

// Importing and mocking axios
import axios from 'axios';
import { storage } from '../../../utils/fns';
jest.mock('axios');

// Mocking axios response
axios.get.mockResolvedValue(result);

afterEach(cleanup);
beforeEach(() => {
  const domNode = document.createElement('div');
  domNode.setAttribute('id', 'domNode');
  document.body.appendChild(domNode);
  render(<App />)
});

describe('header', () => {
  test('header renders', () => {
    const header = screen.getAllByRole('navigation');
    expect(header).toHaveLength(2);
  });

  test('header elements render', () => {
    const navButton = screen.getByRole('button');
    const searchBox = screen.getByRole('textbox');
    const toggle = screen.getAllByRole('checkbox');
    const avatar = screen.getAllByAltText('Avatar');

    expect(navButton).toBeInTheDocument();
    expect(searchBox).toBeInTheDocument();
    expect(toggle).toHaveLength(2);
    expect(avatar).toHaveLength(2);
  });
});

describe('layout', () => {
  test('layout renders', () => {
    const layout = screen.getByRole('main');
    expect(layout).toBeInTheDocument();
  });
});

describe('interaction with login', () => {
  test('modal renders when avatar is clicked', () => {
    const avatar = screen.getByTitle("header-avatar");
    expect(storage.get("account").modal).toBe(false);
    fireEvent.click(avatar);
    expect(storage.get("account").modal).toBe(true);
  });

  test('avatar src changes when logged in', async () => {
    const avatar = screen.getByTitle("header-avatar");
    expect(storage.get("account").modal).toBe(false);
    fireEvent.click(avatar);
    expect(storage.get("account").modal).toBe(true);

    const username = screen.getByPlaceholderText('username');
    const password = screen.getByPlaceholderText('password');
    const submit = screen.getByTitle("submit");

    fireEvent.change(username, { target: { value: 'wizeline' } });
    expect(username.value).toBe('wizeline');

    fireEvent.change(password, { target: { value: 'Rocks!' } });
    expect(password.value).toBe('Rocks!');

    expect(storage.get("account").authenticated).toBe(false);
    expect(avatar).toHaveAttribute('src', 'user_not-logged-in.png');
    fireEvent.click(submit);
    await waitFor(() => expect(storage.get("account").authenticated).toBe(true));
    expect(avatar).toHaveAttribute('src', 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png');
  });
});
