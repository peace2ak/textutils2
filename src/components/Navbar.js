import React from 'react';

function Navbar(props) {
    
    return (
        <>
            <nav className={`container navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-${props.mode==='light'?'dark':'light'} rounded`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.heading}</a>
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Dark':'Light'} Mode</label>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
