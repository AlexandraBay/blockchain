import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Container from './components/Container'
import Error from './components/Error'
import Menu from './components/Menu'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store/configureStore'
import Block from './components/Block'
import Transaction from "./components/Transaction"
import Blocks from './components/Blocks'

const store = configureStore({})

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div className='container'>
                <Menu/>

                <Switch>
                    <Route exact path='/' component={Container} />
                    <Route path='/blocks' component={Blocks} />
                    <Route path='/block/:handle' component={Block} />
                    <Route path='/transaction/:hashTransaction' component={Transaction} />
                    <Route component={Error} />
                </Switch>

            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();