import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      session:[],
      contacts:[],
      user:null,
      userProperty:null,
      receiver:null,
      token:null,
      contact:null,
    },
    mutations: {
      setContacts(state,contacts){
        state.contacts = contacts;
      },
      setContact(state,contact){
        state.contact = contact;
      },
      setSession (state,session) {
        state.session = session;
      },
      addMessage(state,session) {
        state.session.push(session);
      },
      setUser(state,user){
        state.user = user;
      },
      setReceiver(state,receiver){
        state.receiver = receiver;
      },
      setUserProperty(state,userProperty){
        state.userProperty = userProperty;
      },
      setToken(state,token){
        state.token = token;
      },
    },
    getters: {
      getContacts: state => {
        return state.contacts;
      },
      getContact: state => {
        return state.contact;
      },
      getToken: state => {
        return state.token;
      },
      getSession: state => {
        return state.session;
      },
      getUser: state => {
        return state.user;
      },
      getUserPropery: state => {
        return state.userProperty;
      },
      getReceivert: state => {
        return state.receiver;
      }
    }
  })