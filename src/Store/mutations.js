export const STORAGE_KEY = 'CleverPack-state';

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear();
}

const Unit = [
  {
    id: 1,
    name: 'Line item #1',
    price: 12,
    executionTime: 2,
    qty: 0,
    totalPrice: 0,
    totalExecutionTime: 0,
  },
  {
    id: 2,
    name: 'Line item #2',
    price: 23,
    executionTime: 0.2,
    qty: 0,
    totalPrice: 0,
    totalExecutionTime: 0,
  },
  {
    id: 3,
    name: 'Line item #3',
    price: 14,
    executionTime: 0.5,
    qty: 0,
    totalPrice: 0,
    totalExecutionTime: 0,
  },
  {
    id: 4,
    name: 'Line item #4',
    price: 2,
    executionTime: 5,
    qty: 0,
    totalPrice: 0,
    totalExecutionTime: 0,
  },
  {
    id: 5,
    name: 'Line item #5',
    price: 5,
    executionTime: 30,
    qty: 0,
    totalPrice: 0,
    totalExecutionTime: 0,
  },
];

export const state = {
  // unit: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]'),
  // unit: Unit,
  quote: {
    description: '',
    unit: {
      components: Unit,
      totalCost: 0,
      totalExecutionTime: 0,
    },
  },
};

export const mutations = {
  ADD_LINE_ITEM(state, { text }) {
    state.todos.push({
      text,
      done: false,
    });
  },

  EDIT_LINE_ITEM_QTY(state, { lineItem, qty }) {
    lineItem.qty = qty;
    lineItem.totalPrice = qty * lineItem.price;
    lineItem.totalExecutionTime = qty * lineItem.executionTime;
  },

  DELETE_LINE_ITEM(state, lineItem) {
    state.quote.unit.components.splice(lineItem, 1);
  },

  UPDATE_QUOTE_DESCRIPTION(state, { text }) {
    state.quote.description = text;
  },

  UPDATE_UNIT_TOTAL_VALUES(state) {
    state.quote.unit.totalCost = state.quote.unit.components
      .map(x => x.totalPrice)
      .reduce((acc, x) => acc + x, 0);
    state.quote.unit.totalExecutionTime = state.quote.unit.components
      .map(x => x.totalExecutionTime)
      .reduce((acc, x) => acc + x, 0);
  },

  deleteTodo(state, { todo }) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },

  editTodo(state, { todo, value }) {
    todo.text = value;
  },

  toggleAll(state, { done }) {
    state.todos.forEach((todo) => {
      todo.done = done;
    });
  },

  clearCompleted(state) {
    state.todos = state.todos.filter(todo => !todo.done);
  },
};
