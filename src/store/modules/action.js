const state = {
    services: ['Google Sheets', 'Slack', 'Stripe', 'Shopify'],
    actions: {
        'Google Sheets': [
            'Create Worksheet',
            'Create Spreadsheet',
            'Create Spreadsheet Row',
            'Update Spreadsheet Row',
        ],
        Slack: [
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
    allActionServices: state => state.services,
    getActions: state => service => state.actions[service],
    getActionDataset: state => service => state.dataSet[service],
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations,
};
