import React from 'react';
import {Navbar} from '@components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Menu} from '@components/Menu';
import {Home} from '@pages/Home';
import {Catalog} from '@pages/Catalog';
import {Service} from '@pages/Service';
import {Contacts} from '@pages/Contacts';
import {Request} from '@pages/Request';
import {Footer} from '@components/Footer';
import {SiteMap} from '@pages/SiteMap';
import {Items} from '@pages/Items';

function App() {
    return(
        <BrowserRouter>
            <Navbar />
            <Menu />
            <div className="content_outer outerContainer blocksMargin contentBackground">
                <div className="content_inner innerContainer max-width">
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/catalog' component={Catalog} />
                        <Route path='/service' component={Service} />
                        <Route path='/contacts' component={Contacts} />
                        <Route path='/request' component={Request} />
                        <Route path='/sitemap' component={SiteMap} />                        
                        <Route path='/item' component={Items} />
                    </Switch>
                </div>
            </div>
            <Footer />
        </BrowserRouter>
    )
};

export default App;