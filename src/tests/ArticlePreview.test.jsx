/// <reference types="@testing-library/jest-dom" />
// @vitest-environment jsdom
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'; 
import ArticlePreview from '../components/ArticlePreview';

const queryClient = new QueryClient();

describe('ArticlePreview Component', () => {
  const mockArticle = {
    slug: 'test-article-slug',
    title: 'Hello QA World',
    description: 'This is a test description',
    createdAt: '2026-03-25T00:00:00.000Z',
    favoritesCount: 42,
    favorited: false,
    author: {
      username: 'Vlad_QA',
      image: 'https://test.com/avatar.jpg'
    },
    tagList: ['react', 'testing']
  };

  it('renders article title and author correctly', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ArticlePreview article={mockArticle} />
        </BrowserRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText('Hello QA World')).toBeInTheDocument();
    expect(screen.getByText('Vlad_QA')).toBeInTheDocument();
    expect(screen.getByText('react')).toBeInTheDocument();
  });
});