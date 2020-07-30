import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Menu} from '@/components/Menu';
import {Home} from '@pages/Home';
import {Catalog} from '@pages/Catalog';
import {Service} from '@pages/Service';
import {Contacts} from '@pages/Contacts';
import {Request} from '@pages/Request';


function App() {
    return(
        <BrowserRouter>
            <Menu />
            <div className="content_outer outerContainer blocksMargin contentBackground">
                <div className="content_inner innerContainer max-width">
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/fcatalog' component={Catalog} />
                        <Route path='/service' component={Service} />
                        <Route path='/fcontacts' component={Contacts} />
                        <Route path='/request' component={Request} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;