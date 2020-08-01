const state = {
    triggerServices: ['Google Sheets', 'Slack', 'Stripe', 'Shopify'],
    triggers: {
        'Google Sheets': [
            'New Worksheet',
            'New Spreadsheet',
            'New Spreadsheet Row',
            'New or Updated Spreadsheet Row',
        ],
        Slack: [
            'New Channel',
            'New Message Posted to Channel',
            'New Mention',
            'New User',
        ],
        Stripe: ['New Charge', 'New Coupon', 'New Customer', 'New Invoice'],
        Shopify: [
            'New Order',
            'new Product',
            'New Paid Order',
            'New Blog Entry',
        ],
    },
    dataSet: {
        'Google Sheets': [
            'Worksheet 1',
            'Worksheet 2',
            'Spreadsheet 1',
            'Spreadsheet 2',
        ],
        Slack: ['#frontend', '#feedback', '#competitors', '#checkins'],
        Stripe: ['Company A', 'Company B', 'Company C', 'Company D'],
        Shopify: ['Product W', 'product X', 'product Y', 'Product Z'],
    },
};

const getters = {
    allTriggerServices: state => state.triggerServices,
    getTrigger: state => service => state.triggers[service],
    getTriggerDataset: state => service => state.dataSet[service],
};

const actions = {
    saveNewTriggerServices({ commit }, services) {
        commit('setTriggerServices', services);
    },
    saveNewTriggers({ commit }, { triggers, triggerService }) {
        commit('setTriggers', { triggers, triggerService });
    },
    saveNewTriggerDataSet({ commit }, { dataSet, triggerService }) {
        commit('setTriggerDataSet', { dataSet, triggerService });
    },
    createNewTriggerService({ commit }, { triggerService, triggers, dataSet }) {
        let newServices = [...state.triggerServices, triggerService];
        commit('setTriggerServices', newServices);
        commit('setTriggers', { triggers, triggerService });
        commit('setTriggerDataSet', { dataSet, triggerService });
    },
};

const mutations = {
    setTriggerServices: (state, services) => (state.triggerServices = services),
    setTriggers: (state, { triggers, triggerService }) =>
        (state.triggers[triggerService] = triggers),
    setTriggerDataSet: (state, { dataSet, triggerService }) =>
        (state.dataSet[triggerService] = dataSet),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
