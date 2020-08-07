import React from 'react';
import {Navbar} from '@components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Menu} from '@components/MenuList';
import {Home} from '@pages/Home';
import {Catalog} from '@pages/Catalog';
import {Service} from '@pages/Service';
import {Contacts} from '@pages/Contacts';
import {Request} from '@pages/Request';
import {Footer} from '@components/Footer';
import {SiteMap} from '@pages/SiteMap';


function App() {
    return(
        <BrowserRouter>
            <Navbar />
            <Menu />
            <div className="content_outer outerContainer blocksMargin contentBackground">
                <div className="content_inner innerContainer max-width">
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/fcatalog' component={Catalog} />
                        <Route path='/service' component={Service} />
                        <Route path='/fcontacts' component={Contacts} />
                        <Route path='/request' component={Request} />
                        <Route path='/sitemap' component={SiteMap} />
                    </Switch>
                </div>
            </div>
            <Footer />
        </BrowserRouter>
    )
};

export default App;