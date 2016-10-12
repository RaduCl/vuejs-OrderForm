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
    qty: 10,
    margin: 1.5,
    totalPrice: 180,
  },
  {
    id: 2,
    name: 'Consumable item #2',
    price: 23,
    qty: 10,
    margin: 1.5,
    totalPrice: 345,
  },
  {
    id: 3,
    name: 'Consumable item #3',
    price: 14,
    qty: 10,
    margin: 1.5,
    totalPrice: 210,
  },
  {
    id: 4,
    name: 'Consumable item #4',
    price: 2,
    qty: 10,
    margin: 1.5,
    totalPrice: 30,
  },
  {
    id: 5,
    name: 'Consumable item #5',
    price: 5,
    qty: 10,
    margin: 1.5,
    totalPrice: 75,
  },
];

const AssemblyItems = [
  {
    id: 1,
    name: 'Assembly item #1',
    time: 12,
    qty: 10,
    margin: 1.5,
    totalPrice: 1.8,
  },
  {
    id: 2,
    name: 'Assembly item #2',
    time: 23,
    qty: 10,
    margin: 1.5,
    totalPrice: 3.45,
  },
  {
    id: 3,
    name: 'Assembly item #3',
    time: 14,
    qty: 10,
    margin: 1.5,
    totalPrice: 2.10,
  },
];

const Quantities = [
  {
    id: 1,
    units: 5,
  },
  {
    id: 2,
    units: 3,
  },
];

export const state = {
  // unit: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]'),
  // unit: Unit,
  quote: {
    config: {
      workerRates: 28,
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
      quantities: Quantities,
      totalConsumablesCost: 0,
      totalAssembliesCost: 0,
      workerCost: 0,
      totalCost: 0,
      totalPrice: 0,
      totalAssembliesExecutionTime: 0,
    },
    notes: '',
    internalNotes: '',
  },
};

export const mutations = {

  /**
   * UNIT RELATED MUTATIONS
   */
  ADD_LINE_ITEM(state, { lineItemType, newLineItem }) {
    state.quote.unit[lineItemType].push(newLineItem);
  },

  EDIT_LINE_ITEM_QTY(state, { lineItem, qty }) {
    lineItem.qty = qty;
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
    lineItem.time = time;
  },

  DELETE_LINE_ITEM(state, { lineItemType, index }) {
    state.quote.unit[lineItemType].splice(index, 1);
  },

  UPDATE_CONSUMABLE_ITEM_TOTAL(state, lineItem) {
    lineItem.totalPrice = lineItem.price * lineItem.qty * lineItem.margin;
  },

  UPDATE_ASSEMBLY_ITEM_TOTAL(state, lineItem) {
    const timeRelatedCost =
      lineItem.time *
      (state.quote.config.workerHourlyCost / 3600).toFixed(2);
    lineItem.totalPrice = (timeRelatedCost * lineItem.qty * lineItem.margin).toFixed(2);
  },

  /**
   * QUOTE RELATED MUTATIONS
   */
  UPDATE_QUOTE_DESCRIPTION(state, { text }) {
    state.quote.description = text;
  },

  UPDATE_QUOTE_NOTES(state, { text }) {
    state.quote.notes = text;
  },

  UPDATE_QUOTE_INTERNAL_NOTES(state, { text }) {
    state.quote.internalNotes = text;
  },

  /**
   * QUANTITIES RELATED MUTATIONS
   */
  ADD_QUANTITY(state, { newQuantity }) {
    state.quote.unit.quantities.push(newQuantity);
  },

  EDIT_QUANTITY_UNITS(state, { quantityItem, qty }) {
    quantityItem.units = qty;
  },

  DELETE_QUANTITY(state, { index }) {
    state.quote.unit.quantities.splice(index, 1);
  },

  /**
   * CONFIG RELATED MUTATIONS
   */
  EDIT_CONFIG_OVERTIME(state, { value }) {
    state.quote.config.overTimeFactor = value;
  },

  EDIT_CONFIG_DISCOUNT(state, { value }) {
    state.quote.config.discountFactor = value;
  },

  EDIT_CONFIG_OVER_FIVE_COST(state, { value }) {
    state.quote.config.overFiveCost = value;
  },

  EDIT_CONFIG_UNDER_FIVE_COST(state, { value }) {
    state.quote.config.underFiveCost = value;
  },

  EDIT_CONFIG_WORKER_RATES(state, { value }) {
    state.quote.config.workerRates = value;
  },

  EDIT_CONFIG_MARGIN(state, { value }) {
    state.quote.config.defaultMarginMultiplier = value;
  },

};
