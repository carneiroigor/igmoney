import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Model, createServer } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          tittle: 'Freelance Website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00'),
        },

        {
          id: 2,
          tittle: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-14 11:00'),
        }
      ]
    })
  },
    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
          return this.schema.all('transaction')
        })

        this.post('/transactions', (schema, request) => {
          const data = JSON.parse(request.requestBody)

          return schema.create('transaction', data)
        })
    },
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);