import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Route, BrowserRouter } from 'react-router-dom';
import routes from './../../../routes/routes';


const Index = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <div className="content">
                    {routes.map((route, idx) => {
                                return route.component ? (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={props => (
                                    <route.component {...props} />
                                    )} />
                                ) : (null);
                            })}

                </div>
                <Footer />
            </BrowserRouter>

        </div>
    );
};
export default Index;
