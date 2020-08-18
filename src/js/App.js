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
import {Item} from '@pages/Item';
import ItemContext from '@/context/item/itemContext';

//временная мапа для товаров
import itemsMap from '@/maps/itemPage/itemsMap';
import searchMethodsModule from '@js/searchMethods';
const searchMethods = searchMethodsModule();

function App() {
    const [item, setItem] = React.useState([itemsMap[0]]);
    //setItem([itemsMap[1]]);

    function findItem(str) {
        setItem(searchMethods.findByNum(str, itemsMap));
        //setItem(searchMethods.findByType(str, itemsMap));
    };

    return(
        <ItemContext.Provider value={{ findItem }}>
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
                            <Route path='/item' render={() => <Item item={item} />} />
                        </Switch>
                    </div>
                </div>
                <Footer />
            </BrowserRouter>
        </ItemContext.Provider>
    )
};

export default App;