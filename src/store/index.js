import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
var items = [{
    action: '1',
    title: 'Facebook',
    subtitle: "MEXICO",
    stockvalue: "5.20 USD",
    percent: ' + 0.020 (1.31%)',
    close: '6:00PM EST',
    sectors: "SIC-7311 Services-Advertising Agencies Technology Services",
    series: [{
      name: 'Network',
      data: [{
          x: '',
          y: 1.52
        },
        {
          x: '',
          y: 1.55
        },
        {
          x: '',
          y: 1.46
        },

        {
          x: '',
          y: 1.48
        },
        {
          x: '10 AM',
          y: 1.52
        },
        {
          x: '',
          y: 1.38
        },
        {
          x: '',
          y: 1.50
        },

        {
          x: '',
          y: 1.54
        },
        {
          x: '',
          y: 1.43
        },

        {
          x: '',
          y: 1.41
        },
        {
          x: '12 PM',
          y: 1.52
        },
        {
          x: '',
          y: 1.47
        },
        {
          x: '',
          y: 1.40
        },
        {
          x: '',
          y: 1.45
        },
        {
          x: '',
          y: 1.41
        }, {
          x: '',
          y: 1.53
        },
        {
          x: '02 PM',
          y: 1.30
        },



      ],
    }],
  },
  {
    action: '2',
    title: 'AT&T',
    subtitle: "RUSSIA",
    stockvalue: "3.15 USD",
    percent: ' +0.020 (1.31%)',
    close: '4:00PM EST',
    sectors: "SIC-7311 Services-Advertising Agencies Technology Services",
    series: [{
      name: 'Network',
      data: [{
          x: '',
          y: 1.52
        },
        {
          x: '',
          y: 1.57
        },
        {
          x: '',
          y: 1.44
        },

        {
          x: '',
          y: 1.48
        },
        {
          x: '10 AM',
          y: 1.52
        },
        {
          x: '',
          y: 1.38
        },
        {
          x: '',
          y: 1.50
        },

        {
          x: '',
          y: 1.54
        },
        {
          x: '',
          y: 1.43
        },

        {
          x: '',
          y: 1.41
        },
        {
          x: '12 PM',
          y: 1.52
        },
        {
          x: '',
          y: 1.47
        },
        {
          x: '',
          y: 1.40
        },
        {
          x: '',
          y: 1.45
        },
        {
          x: '',
          y: 1.41
        }, {
          x: '',
          y: 1.53
        },
        {
          x: '02 PM',
          y: 1.30
        },



      ],
    }],
  },
  {
    action: '3',
    title: 'Microsoft',
    subtitle: 'JAPAN',
    stockvalue: "19.55 USD",
    percent: ' +0.020 (1.31%)',
    close: '6:00PM EST',
    sectors: "SIC-7311 Services-Advertising Agencies Technology Services",
    series: [{
      name: 'Network',
      data: [{
          x: '',
          y: 1.52
        },
        {
          x: '',
          y: 1.57
        },
        {
          x: '',
          y: 1.46
        },

        {
          x: '',
          y: 1.48
        },
        {
          x: '10 AM',
          y: 1.52
        },
        {
          x: '',
          y: 1.41
        },
        {
          x: '',
          y: 1.50
        },

        {
          x: '',
          y: 1.54
        },
        {
          x: '',
          y: 1.43
        },

        {
          x: '',
          y: 1.41
        },
        {
          x: '12 PM',
          y: 1.52
        },
        {
          x: '',
          y: 1.47
        },
        {
          x: '',
          y: 1.40
        },
        {
          x: '',
          y: 1.45
        },
        {
          x: '',
          y: 1.41
        }, {
          x: '',
          y: 1.53
        },
        {
          x: '02 PM',
          y: 1.30
        },



      ],
    }],
  },
  {
    action: '4',
    title: 'NiSource Inc.',
    subtitle: 'GERMANY',
    stockvalue: "13.55 USD",
    percent: ' +0.020 (1.31%)',
    close: '5:00PM EST',
    sectors: "SIC-7311 Services-Advertising Agencies Technology Services",
    series: [{
      name: 'Network',
      data: [{
          x: '',
          y: 1.52
        },
        {
          x: '',
          y: 1.55
        },
        {
          x: '',
          y: 1.46
        },

        {
          x: '',
          y: 1.46
        },
        {
          x: '10 AM',
          y: 1.52
        },
        {
          x: '',
          y: 1.41
        },
        {
          x: '',
          y: 1.50
        },

        {
          x: '',
          y: 1.54
        },
        {
          x: '',
          y: 1.43
        },

        {
          x: '',
          y: 1.41
        },
        {
          x: '12 PM',
          y: 1.52
        },
        {
          x: '',
          y: 1.47
        },
        {
          x: '',
          y: 1.40
        },
        {
          x: '',
          y: 1.45
        },
        {
          x: '',
          y: 1.41
        }, {
          x: '',
          y: 1.53
        },
        {
          x: '02 PM',
          y: 1.30
        },



      ],
    }],
  },
  {
    action: '5',
    title: 'Animation',
    subtitle: 'CHINA',
    stockvalue: "12.55 USD",
    percent: ' + 0.020 (1.31%)',
    close: '4:00PM EST',
    sectors: "SIC-7311 Services-Advertising Agencies Technology Services",
    series: [{
      name: 'Network',
      data: [{
          x: '',
          y: 1.52
        },
        {
          x: '',
          y: 1.57
        },
        {
          x: '',
          y: 1.46
        },

        {
          x: '',
          y: 1.48
        },
        {
          x: '10 AM',
          y: 1.52
        },
        {
          x: '',
          y: 1.41
        },
        {
          x: '',
          y: 1.50
        },

        {
          x: '',
          y: 1.54
        },
        {
          x: '',
          y: 1.43
        },

        {
          x: '',
          y: 1.41
        },
        {
          x: '12 PM',
          y: 1.52
        },
        {
          x: '',
          y: 1.47
        },
        {
          x: '',
          y: 1.40
        },
        {
          x: '',
          y: 1.68
        },
        {
          x: '',
          y: 1.41
        }, {
          x: '',
          y: 1.53
        },
        {
          x: '02 PM',
          y: 1.30
        },



      ],
    }],
  },
  {
    action: '6',
    title: 'Chemicals',
    subtitle: 'MEXICO',
    stockvalue: "10.10 USD",
    percent: ' +0.020 (1.31%)',
    close: '3:00PM EST',
    sectors: "SIC-7311 Services-Advertising Agencies Technology Services",
    series: [{
      name: 'Network',
      data: [{
          x: '',
          y: 1.50
        },
        {
          x: '',
          y: 1.57
        },
        {
          x: '',
          y: 1.46
        },

        {
          x: '',
          y: 1.48
        },
        {
          x: '10 AM',
          y: 1.52
        },
        {
          x: '',
          y: 1.41
        },
        {
          x: '',
          y: 1.50
        },

        {
          x: '',
          y: 1.54
        },
        {
          x: '',
          y: 1.43
        },

        {
          x: '',
          y: 1.41
        },
        {
          x: '12 PM',
          y: 1.45
        },
        {
          x: '',
          y: 1.47
        },
        {
          x: '',
          y: 1.40
        },
        {
          x: '',
          y: 1.45
        },
        {
          x: '',
          y: 1.41
        }, {
          x: '',
          y: 1.51
        },
        {
          x: '02 PM',
          y: 1.30
        },



      ],
    }],
  },
  {
    action: '7',
    title: 'Hospitality',
    subtitle: 'MIAMI',
    stockvalue: "9.12 USD",
    percent: ' +0.020 (1.31%)',
    close: '5:00PM EST',
    sectors: "SIC-7311 Services-Advertising Agencies Technology Services",
    series: [{
      name: 'Network',
      data: [{
          x: '',
          y: 1.52
        },
        {
          x: '',
          y: 1.56
        },
        {
          x: '',
          y: 1.46
        },

        {
          x: '',
          y: 1.48
        },
        {
          x: '10 AM',
          y: 1.52
        },
        {
          x: '',
          y: 1.41
        },
        {
          x: '',
          y: 1.50
        },

        {
          x: '',
          y: 1.54
        },
        {
          x: '',
          y: 1.43
        },

        {
          x: '',
          y: 1.38
        },
        {
          x: '12 PM',
          y: 1.52
        },
        {
          x: '',
          y: 1.47
        },
        {
          x: '',
          y: 1.40
        },
        {
          x: '',
          y: 1.41
        },
        {
          x: '',
          y: 1.41
        }, {
          x: '',
          y: 1.53
        },
        {
          x: '02 PM',
          y: 1.30
        },



      ],
    }],
  },
  {
    action: '8',
    title: 'Performing Arts',
    subtitle: 'BRAZIL',
    stockvalue: "13.25 USD",
    percent: ' +0.020 (1.31%)',
    close: '7:00PM EST',
    sectors: "SIC-7311 Services-Advertising Agencies Technology Services",
    series: [{
      name: 'Network',
      data: [{
          x: '',
          y: 1.52
        },
        {
          x: '',
          y: 1.57
        },
        {
          x: '',
          y: 1.46
        },

        {
          x: '',
          y: 1.48
        },
        {
          x: '10 AM',
          y: 1.52
        },
        {
          x: '',
          y: 1.41
        },
        {
          x: '',
          y: 1.50
        },

        {
          x: '',
          y: 1.54
        },
        {
          x: '',
          y: 1.54
        },

        {
          x: '',
          y: 1.41
        },
        {
          x: '12 PM',
          y: 1.52
        },
        {
          x: '',
          y: 1.47
        },
        {
          x: '',
          y: 1.52
        },
        {
          x: '',
          y: 1.45
        },
        {
          x: '',
          y: 1.41
        }, {
          x: '',
          y: 1.53
        },
        {
          x: '02 PM',
          y: 1.30
        },



      ],
    }],
  },
  {
    action: '9',
    title: 'Textiles',
    subtitle: 'MEXICO',
    stockvalue: "5.20 USD",
    percent: ' +0.020 (1.31%)',
    close: '6:00PM EST',
    sectors: "SIC-7311 Services-Advertising Agencies Technology Services",
    series: [{
      name: 'Network',
      data: [{
          x: '',
          y: 1.52
        },
        {
          x: '',
          y: 1.57
        },
        {
          x: '',
          y: 1.46
        },

        {
          x: '',
          y: 1.35
        },
        {
          x: '10 AM',
          y: 1.52
        },
        {
          x: '',
          y: 1.41
        },
        {
          x: '',
          y: 1.50
        },

        {
          x: '',
          y: 1.54
        },
        {
          x: '',
          y: 1.43
        },

        {
          x: '',
          y: 1.41
        },
        {
          x: '12 PM',
          y: 1.52
        },
        {
          x: '',
          y: 1.47
        },
        {
          x: '',
          y: 1.40
        },
        {
          x: '',
          y: 1.45
        },
        {
          x: '',
          y: 1.35
        }, {
          x: '',
          y: 1.53
        },
        {
          x: '02 PM',
          y: 1.30
        },



      ],
    }],
  }
];
export default new Vuex.Store({
  state: {
    search: '',
    isSelected:true,
    search_item: items,
    items: items,
    selected_items: ''
  },
  getters:{
    g_search: (state) => {
      return state.selected_items;
    }    
  },
  mutations: {
    SET_SEARCHVALUE: (state, value) => {
      state.search = value;
      //filter list      
    },
    SET_SEARCHITEMS: (state, value) => {
      state.search_item = value;
    },
    SET_SELECTED_ITEM: (state, value) => {
      state.selected_items = value;
    },
    SET_ISSELECTED:(state,value) =>{
      state.isSelected = value;
    }
  },
  actions: {
    ACTION_SEARCH({
      commit
    }, value) {
      commit('SET_SEARCHITEMS', value);
    },
    ACTION_SELECTED_ITEM({
      commit
    }, value) {
      commit('SET_SELECTED_ITEM', value);
    },
    ACTION_SET_ISSELECTED({
      commit
    },value){
      commit('SET_ISSELECTED',value);
      }   

  },
  modules: {}
});