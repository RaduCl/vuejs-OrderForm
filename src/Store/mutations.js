export const STORAGE_KEY = 'CleverPack-state';

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear();
}

const ConsumableItems = [
  {
    id: 1,
    name: 'Consumable item #1',
    price: 12,
    qty: 0,
    margin: 0.5,
    totalPrice: 0,
  },
  {
    id: 2,
    name: 'Consumable item #2',
    price: 23,
    qty: 0,
    margin: 0.5,
    totalPrice: 0,
  },
  {
    id: 3,
    name: 'Consumable item #3',
    price: 14,
    qty: 0,
    margin: 0.5,
    totalPrice: 0,
  },
  {
    id: 4,
    name: 'Consumable item #4',
    price: 2,
    qty: 0,
    margin: 0.5,
    totalPrice: 0,
  },
  {
    id: 5,
    name: 'Consumable item #5',
    price: 5,
    qty: 0,
    margin: 0.5,
    totalPrice: 0,
  },
];

const AssemblyItems = [
  {
    id: 1,
    name: 'Assembly item #1',
    time: 12,
    qty: 0,
    margin: 0.5,
    totalPrice: 0,
  },
  {
    id: 2,
    name: 'Assembly item #2',
    time: 23,
    qty: 0,
    margin: 0.5,
    totalPrice: 0,
  },
  {
    id: 3,
    name: 'Assembly item #3',
    time: 14,
    qty: 0,
    margin: 0.5,
    totalPrice: 0,
  },
];

export const state = {
  // unit: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]'),
  // unit: Unit,
  quote: {
    config: {
      workerHourlyCost: 28,
      discountFactor: 0.05, // applied to assembly, setup cost & overtime factor
      underFiveCost: 62,
      overFiveCost: 145,
      defaultMarginMultiplier: 2.31,
      overTimeFactor: 1, // applied to assembly & setup cost
    },
    description: '',
    unit: {
      consumableItems: ConsumableItems,
      assemblyItems: AssemblyItems,
      totalCost: 0,
      totalExecutionTime: 0,
    },
    notes: '',
    internalNotes: '',
  },
};

export const mutations = {

  ADD_LINE_ITEM(state, { lineItemType, newLineItem }) {
    state.quote.unit[lineItemType].push(newLineItem);
  },

  EDIT_LINE_ITEM_QTY(state, { lineItem, qty }) {
    lineItem.qty = qty;
    // lineItem.totalPrice = qty * lineItem.price;
    // lineItem.totalExecutionTime = qty * lineItem.executionTime;
  },

  EDIT_LINE_ITEM_NAME(state, { lineItem, name }) {
    lineItem.name = name;
  },

  EDIT_LINE_ITEM_PRICE(state, { lineItem, price }) {
    lineItem.price = price;
  },

  EDIT_LINE_ITEM_MARGIN(state, { lineItem, margin }) {
    lineItem.margin = margin;
  },

  EDIT_LINE_ITEM_EXECUTION_TIME(state, { lineItem, time }) {
    lineItem.executionTime = time;
  },

  DELETE_LINE_ITEM(state, lineItemType, index) {
    state.quote.unit[lineItemType].splice(index, 1);
  },

  UPDATE_QUOTE_DESCRIPTION(state, { text }) {
    state.quote.description = text;
  },

  UPDATE_QUOTE_NOTES(state, { text }) {
    state.quote.notes = text;
  },

  UPDATE_QUOTE_INTERNAL_NOTES(state, { text }) {
    state.quote.internalNotes = text;
  },
  // UPDATE_UNIT_TOTAL_VALUES(state) {
  //   state.quote.unit.totalCost = state.quote.unit.components
  //     .map(x => x.totalPrice)
  //     .reduce((acc, x) => acc + x, 0);
  //   state.quote.unit.totalExecutionTime = state.quote.unit.components
  //     .map(x => x.totalExecutionTime)
  //     .reduce((acc, x) => acc + x, 0);
  // },

};
