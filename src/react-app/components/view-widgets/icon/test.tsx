import React from 'react';
import {
  render, RenderResult, cleanup, fireEvent,
} from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Icon from '.';

const title = 'Icon Title';
const logo = 'https://example/logo.png';
const target = '/some/url';

const renderComponent = () => render(
  <MemoryRouter>
    <Icon title={title} imageURL={logo} target={target} />
  </MemoryRouter>,
);

describe('Icon', () => {
  let wrapper: RenderResult;
  let icon: HTMLElement;
  afterEach(() => {
    cleanup();
  });
  beforeEach(async () => {
    wrapper = renderComponent();
    icon = await wrapper.findByRole('button');
  });
  describe('img', () => {
    let img: HTMLImageElement;
    beforeEach(() => {
      const imgs = icon.getElementsByTagName('img');
      // eslint-disable-next-line prefer-destructuring
      img = imgs[0];
    });
    it('should have the imageURL prop as its src', () => {
      expect(img.src).toBe(logo);
    });
    it('should have title as its alt text', () => {
      expect(img.alt).toBe(title);
    });
  });
  it('should have the title as a label', () => {
    expect(icon.textContent).toBe(title);
  });
  it('should be a link to the target', () => {
    const link = icon as HTMLAnchorElement;
    expect(link.tagName).toBe('A');
    expect(link.href).toContain(target);
  });
});
