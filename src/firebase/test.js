import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('YRmVYmWEUmaH7yHeoey7').collection('cartItems').doc('mv5XHR72qo9wyNLZ6mw2')
firestore.doc('/users/YRmVYmWEUmaH7yHeoey7/cartItems/mv5XHR72qo9wyNLZ6mw2');
firestore.collection('/users/YRmVYmWEUmaH7yHeoey7/cartItems/mv5XHR72qo9wyNLZ6mw2');