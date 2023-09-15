import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { memo } from 'react';

function ConfigRoute({ routes }) {
    return (
        <Router>
            <Routes>
                {routes.map((item, index) => {
                    const Comp = item.component;
                    return <Route key={index} path={item.path} element={<Comp />} />;
                })}
            </Routes>
        </Router>
    );
}

ConfigRoute.propTypes = {
    routes: PropTypes.array.isRequired,
};

export default memo(ConfigRoute);
