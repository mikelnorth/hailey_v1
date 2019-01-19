import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.scss';
import asyncComponent from './components/AsyncComponent'
const AsyncAbout = asyncComponent(() => import("./components/about/About"));
const AsyncContact = asyncComponent(() => import("./components/contact/Contact"));
const AsyncBlog = asyncComponent(() => import("./components/blog/Blog"));
const AsyncTrainings = asyncComponent(() => import("./components/trainings/Trainings.js"));
const AsyncNotFound = asyncComponent(() => import("./NotFound"));


export default ({childProps}) =>
    <Switch>
        <Route
            path="/"
            exact
            component={AsyncAbout}
            props={childProps}
        />
        <Route
            path="/blog"
            exact
            component={AsyncBlog}
            props={childProps}
        />
        <Route
            path="/contact"
            exact
            component={AsyncContact}
            props={childProps}
        />
        <Route
            path="/trainings"
            exact
            component={AsyncTrainings}
            props={childProps}
        />
        {/* Finally, catch all unmatched routes */}
        <Route component={AsyncNotFound} />
    </Switch>
;