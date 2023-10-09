import React from 'react';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
import { StateProvider } from '../../context/MemeContext';
import AppWrapper from '../layout/AppWrapper';
import Container from '../layout/Container';
import MainContent from '../layout/MainContent';
import Title from '../global/Title';
import Icon from '../global/Icon';
import logo from '../../assets/app-icon.svg';
import UploadImage from './UploadImage';
import TextImage from './TextImage';
import GenerateImage from './GenerateImage';
import Register from '../layout/Register';
import Login from "../layout/Login";
import AboutUs from "../layout/AboutUs";
import Feedback from "../layout/FeedbackForm";
import NavigationBar from "../layout/NavigationBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    Redirect,
} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/meme">
                        <AppWrapper>
                        <NavigationBar />
                            <Container>
                                <Title primary fsize="2" margin="0 0 2rem">
                                    <Icon src={logo} alt="The MEME Generator" />
                                    The MEME Generator
                                </Title>

                                {/* Shared global state from here on */}
                                <StateProvider>
                                    <MainContent>
                                        <UploadImage />

                                        <TextImage />
                                    </MainContent>

                                    <GenerateImage />
                                </StateProvider>
                            </Container>
                        </AppWrapper>
                    </Route>

                    <Route exact path="/">
                        <Login />
                    </Route>

                    <Route exact path="/register">
                        <Register />
                    </Route>

                    <Route exact path="/feedback">
                        <NavigationBar />
                        <Feedback />
                    </Route>

                    <Route exact path="/about">
                        <NavigationBar />
                        <AboutUs />
                    </Route>

                </Switch>
            </div>
        </Router>

    );
};

export default App;
