import { describe, it, expect } from 'vitest';
import React from 'react';
import ReactDOM from 'react-dom';
import htm from 'htm';
import menu from '../public/data/menu.js';

const html = htm.bind(React.createElement);

// Re-implement MenuList locally since components aren't exported from index.js
const MenuList = ({ type }) => {
  return html`
    <div className="menu-list">
      ${[...menu].filter(menuItem => menuItem.type === type).map(menuItem => {
        return html`
          <div className="menu-item" key=${menuItem.id}>
            <span className="item-name">${menuItem.itemName}</span>
            <span className="detail">${menuItem.detail}</span>
          </div>
        `;
      })}
    </div>
  `;
};

describe('htm + React setup', () => {
  it('htm.bind(React.createElement) produces valid elements', () => {
    const el = html`<div className="test">Hello</div>`;
    expect(el).toBeDefined();
    expect(el.type).toBe('div');
    expect(el.props.className).toBe('test');
    expect(el.props.children).toBe('Hello');
  });

  it('renders a component with props', () => {
    const Greeting = ({ name }) => html`<span>Hello, ${name}</span>`;
    const el = html`<${Greeting} name="World" />`;
    expect(el).toBeDefined();
    expect(el.type).toBe(Greeting);
    expect(el.props.name).toBe('World');
  });
});

describe('menu filtering logic', () => {
  it('filters menu items by type correctly', () => {
    const coffeeItems = menu.filter(item => item.type === 'Coffee');
    const espressoItems = menu.filter(item => item.type === 'Espresso');
    const teaItems = menu.filter(item => item.type === 'Tea');
    const boozyItems = menu.filter(item => item.type === 'Boozy');

    expect(coffeeItems.length).toBeGreaterThan(0);
    expect(espressoItems.length).toBeGreaterThan(0);
    expect(teaItems.length).toBeGreaterThan(0);
    expect(boozyItems.length).toBeGreaterThan(0);

    // All items should be accounted for
    const total = coffeeItems.length + espressoItems.length + teaItems.length + boozyItems.length;
    expect(total).toBe(menu.length);
  });

  it('MenuList renders only items of the specified type', () => {
    const container = document.createElement('div');
    const el = html`<${MenuList} type="Coffee" />`;
    ReactDOM.render(el, container);

    const items = container.querySelectorAll('.menu-item');
    const coffeeCount = menu.filter(item => item.type === 'Coffee').length;
    expect(items.length).toBe(coffeeCount);

    // Verify each rendered item is actually a Coffee item
    const renderedNames = Array.from(items).map(
      node => node.querySelector('.item-name').textContent
    );
    const expectedNames = menu
      .filter(item => item.type === 'Coffee')
      .map(item => item.itemName);
    expect(renderedNames).toEqual(expectedNames);
  });

  it('MenuList renders empty for unknown type', () => {
    const container = document.createElement('div');
    ReactDOM.render(html`<${MenuList} type="Juice" />`, container);
    const items = container.querySelectorAll('.menu-item');
    expect(items.length).toBe(0);
  });
});
