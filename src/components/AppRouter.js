import React from 'react'
import {BrowserRouter} from "react-router-dom";
import {Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import NowPlaying from "./NowPlaying";
import SearchPage from "./SearchPage";
import SinglePageWrapper from "./SinglePageWrapper";
import MyList from "./MyList"
import NotFound from "./NotFoundPage"
import Header from "./Header"
import Footer from "./Footer"

export default () => (
    <BrowserRouter>
        <div className="page-wrapper">
            <Header/>
            <Switch>
                <Route path="/" component={NowPlaying} exact={true}/>
                <Route path="/search" component={SearchPage}/>
                <Route path="/movie/:id" component={SinglePageWrapper}/>
                <Route path="/list" component={MyList}/>
                <Route component={NotFound}/>
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
);