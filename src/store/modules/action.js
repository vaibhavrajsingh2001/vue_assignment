const state = {
    actionServices: ['Trello', 'twitter', 'Stripe', 'Shopify'],
    actions: {
        Trello: [
            'Create or Update Contact',
            'Add Tag to Contact',
            'Create Board',
            'Create card',
        ],
        twitter: [
            'Create  Tweet',
            'Add User to List',
            'Update Profile Image',
            'Search users',
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
        Trello: ['Board 1', 'Board 2', 'Board 3', 'Board 4'],
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
