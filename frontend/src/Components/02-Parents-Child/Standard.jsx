'use strict';

import MyAwesomeFooter from "./MyAwesomeFooter";
import MyAwesomeHeader from "./MyAwesomeHeader";
import Navigation from "./Navigation";

const Standard = () => {

    return(
        <>
            <MyAwesomeHeader/>
            <Navigation/>
            <main>
                <section>
                    <p> Something important</p>
                </section>
            </main>
            <MyAwesomeFooter/>
        </>
    )
}

export default Standard; 