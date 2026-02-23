import { describe, it, expect } from 'vitest';
import menu from '../public/data/menu.js';

describe('menu data', () => {
  it('exports a non-empty array', () => {
    expect(Array.isArray(menu)).toBe(true);
    expect(menu.length).toBeGreaterThan(0);
  });

  it('every item has id, itemName, type, and detail fields', () => {
    for (const item of menu) {
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('itemName');
      expect(item).toHaveProperty('type');
      expect(item).toHaveProperty('detail');
    }
  });

  it('all IDs are unique', () => {
    const ids = menu.map(item => item.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('all types are from the known set', () => {
    const validTypes = new Set(['Coffee', 'Espresso', 'Tea', 'Boozy']);
    for (const item of menu) {
      expect(validTypes.has(item.type)).toBe(true);
    }
  });

  it('no empty strings in required fields', () => {
    for (const item of menu) {
      expect(item.itemName).toBeTruthy();
      expect(item.type).toBeTruthy();
      expect(item.detail).toBeTruthy();
      expect(typeof item.itemName).toBe('string');
      expect(typeof item.type).toBe('string');
      expect(typeof item.detail).toBe('string');
    }
  });
});
