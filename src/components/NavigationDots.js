import React from 'react';

const NavigationDots = (props) => {

    const navItems = ["home", "about", "work", "skills", "contact"];

    return (
        <div className='app__navigation'>
            {
                navItems.map((item, index) => (
                    <a
                        className="app__navigation-dot"
                        href={`#${item}`}
                        key={item + index}
                        style={props.active === item ? { backgroundColor: '#313bac' } : {}}
                    > </a>


                ))
            }
        </div>
    );
}

export default NavigationDots;