import React from 'react';

function Category(props){
    return(
        <React.Fragment>
            <div className="col-lg-4 mb-4">
                <div className="card text-white bg  shadow">
                    <div className="card-body">
                        {props.category}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Category;