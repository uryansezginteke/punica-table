import { TableA } from '@punica/table-example';
import { ITable } from '@punica/table-model';
import createReader from '..';

describe('Table reader tests', () => {
  let table: ITable<any>;

  beforeAll(async () => {
    const entity = new TableA();
    const reader = createReader();

    table = await reader.read(entity);
  });

  test('expect read entity schema title correctly', () => {
    expect(table.title).toEqual('Table');
  });

  test('expect read entity schema normal type columns correctly', () => {
    expect(table.columns).toEqual(
      expect.arrayContaining([expect.objectContaining({ type: 0 })])
    );
  });

  test('expect read entity schema custom type columns correctly', () => {
    expect(table.columns).toEqual(
      expect.arrayContaining([expect.objectContaining({ type: 3 })])
    );
  });

  test('expect read entity schema action type columns correctly', () => {
    expect(table.columns).toEqual(
      expect.arrayContaining([expect.objectContaining({ type: 1 })])
    );
  });

  test('expect read entity schema columns length correctly', () => {
    expect(table.columns.length).toEqual(4);
  });

  test('expect read entity schema pagination correctly', () => {
    expect(table.pagination).not.toBeNull();
  });

  test('expect read entity schema actions length correctly', () => {
    expect(table.tableAction.actions.length).toEqual(1);
  });

  test('expect read entity schema search correctly', () => {
    expect(table.search).not.toBeNull();
  });
});
