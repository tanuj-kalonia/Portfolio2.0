import React from 'react';
import NavigationDots from "../components/NavigationDots"
import SocialMedia from "../components/SocialMedia"

const AppWrapper = (ComponentRender, idName, classNames) =>
    function HOC() {
        const year = new Date().getFullYear();
        console.log(year);
        return (
            <div id={idName} className={`app__container ${classNames}`}>
                <SocialMedia />

                <div className='app__wrapper app__flex'>
                    <ComponentRender />

                    <div className='copyright'>
                        <p className='p-text'>{`@${year} Tanuj Kalonia`}</p>
                        <p className='p-text'>All rights reserved</p>
                    </div>
                </div>
                <NavigationDots active={idName} />
            </div>
        )
    }


export default AppWrapper;