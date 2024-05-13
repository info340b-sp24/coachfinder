import React from 'react';
import { homeDemo } from './homeDemo';

// example demo data objects
// [
//     { src: "", alt: "", name: "", specialty: "", price: ""}
// ]

export function homeMain(props)
{
    const demoList = props.demoList;

    return (
        <div id="home-main" className="container">
            <div className="container-fluid mt-1">
                <div id="word-block">
                    <p id="main-word">
                        FIND your most suitable COACH in the easiest way!
                    </p>
                </div>
                <div className="input-group my-3">
                    <span className="input-group-text" id="search-icon">🔍</span>
                    <input type="text" className="form-control" placeholder="Search for what you need here..." aria-label="Search" aria-describedby="search-icon" />
                </div>
                <div>
                    <img id="home-img" src="img/home_main.jpeg" alt="Picture of the Home Page" />
                </div>
                <div>
                    <div className="text-center">
                        <h2>
                            See some of our coaches
                        </h2>
                    </div>
                    <div className="row">
                        { demoList.map(demo => {
                            <homeDemo demoData={demo} key={demo.id} />
                        })}
                        <p id="demo">
                            <a style="text-decoration:none" href="../project-group03/login.html">
                                Need More Demo? Please login!
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}