import React from 'react';
import { HomeDemo } from './homeDemo';

import homeImage from '../img/home_main.jpeg';

export function HomeMain(props)
{
    const demoList = props.demoList;

    return (
        <div className="home-main container">
            <div className="container-fluid mt-1">
                <div className='word-block'>
                    <p className='main-word'>
                        FIND your most suitable COACH in the easiest way!
                    </p>
                </div>
                <div className="input-group my-3">
                    <span className="input-group-text" id="search-icon">🔍</span>
                    <input type="text" className="form-control" placeholder="Search for what you need here..." aria-label="Search" aria-describedby="search-icon" />
                </div>
                <div>
                    <img className='home-img' src={ homeImage } alt="Picture of the Home Page" />
                </div>
                <div>
                    <div className="text-center">
                        <h2>
                            See some of our coaches
                        </h2>
                    </div>
                    <div className="row">
                        { demoList.map(demo => (
                            <HomeDemo demoData={demo} key={demo.id} />
                        ))}

                        <p className='demo'>
                            <a href="fake_login.html">
                                Need More Demo? Please login!
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}