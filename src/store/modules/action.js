const state = {
    actionServices: ['Trello', 'twitter', 'Stripe', 'Shopify'],
    actions: {
        Trello: [
            'Create Worksheet',
            'Create Spreadsheet',
            'Create Spreadsheet Row',
            'Update Spreadsheet Row',
        ],
        twitter: [
            'Send Channel Message',
            'Create Channel',
            'Add Reminder',
            'Invite User to Channel',
        ],
        Stripe: [
            'Find Charge',
            'Create Customer',
            'Create Subscription',
            'Add tag to Contact',
        ],
        Shopify: [
            'Create Blog Entry',
            'Create Product',
            'Create Order',
            'Update Inventory Quantity',
        ],
    },
    dataSet: {
        Trello: [
            'Worksheet 1',
            'Worksheet 2',
            'Spreadsheet 1',
            'Spreadsheet 2',
        ],
        twitter: ['#frontend', '#feedback', '#competitors', '#checkins'],
        Stripe: ['Company A', 'Company B', 'Company C', 'Company D'],
        Shopify: ['Product W', 'product X', 'product Y', 'Product Z'],
    },
};

const getters = {
    allActionServices: state => state.actionServices,
    getActions: state => service => state.actions[service],
    getActionDataset: state => service => state.dataSet[service],
};

const actions = {
    saveNewActionServices({ commit }, services) {
        commit('setActionServices', services);
    },
    saveNewActions({ commit }, { actions, actionService }) {
        commit('setActions', { actions, actionService });
    },
    saveNewActionDataSet({ commit }, { dataSet, dataSetService }) {
        commit('setActionDataSet', { dataSet, dataSetService });
    },
};

const mutations = {
    setActionServices: (state, services) => (state.actionServices = services),
    setActions: (state, { actions, actionService }) =>
        (state.actions[actionService] = actions),
    setActionDataSet: (state, { dataSet, dataSetService }) =>
        (state.dataSet[dataSetService] = dataSet),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
