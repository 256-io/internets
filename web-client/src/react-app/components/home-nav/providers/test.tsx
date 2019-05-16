import React from 'react';
import {
  render, RenderResult, fireEvent, cleanup,
} from 'react-testing-library';
import { act } from 'react-dom/test-utils';
import ProvidersNav, { ServicesNav } from '.';
import data from '../../../../db/static-db/data';
import { FilterProvider, Filter } from '../../../../db/filter';

const filter = new Filter();
describe('ProvidersNav', () => {
  let renderResult: RenderResult;
  beforeAll(() => {
    act(() => {
      renderResult = render(<FilterProvider value={filter}><ProvidersNav /></FilterProvider>);
    });
  });
  afterAll(() => {
    cleanup();
  });
  it('should render without crashing', () => {
    expect(renderResult.container.innerHTML).not.toBeNull();
  });
  it('should render a listitem for each provider', () => {
    data.serviceProviders.forEach(({ id, name }) => {
      const li = renderResult.getByTestId(`provider-${id}`);
      expect(li.textContent).toBe(name);
    });
  });
  it('should render a service for each provider  and set the filter when they are clicked', () => {
    data.serviceProviders.forEach(({ id }) => {
      const li = renderResult.getByTestId(`provider-${id}`);
      fireEvent.click(li);
      renderResult.getByTestId(`services-for-${id}`);
      expect(filter.provider).toBe(id);
      expect(filter.service).toBe('');
    });
  });
});

describe('ServicesNav', () => {
  let renderResult: RenderResult;
  const provider = data.serviceProviders[1];
  const services = data.services.filter(s => s.providerId === provider.id);
  beforeAll(() => {
    act(() => {
      renderResult = render(
        <FilterProvider value={filter}>
          <ServicesNav providerId={provider.id} />
        </FilterProvider>,
      );
    });
  });
  afterAll(() => {
    cleanup();
  });
  it('should render without crashing', () => {
    expect(renderResult.container.innerHTML).not.toBeNull();
  });
  it('should render a listitem for each provider service', () => {
    services.forEach(({ id, name }) => {
      const li = renderResult.getByTestId(`service-${id}`);
      expect(li.textContent).toBe(name);
    });
  });
  it('should set the service filter when clicked', () => {
    services.forEach(({ id }) => {
      filter.setProvider('');
      filter.setService('');
      const li = renderResult.getByTestId(`service-${id}`);
      fireEvent.click(li);
      expect(filter.provider).toBe(provider.id);
      expect(filter.service).toBe(id);
    });
  });
});
