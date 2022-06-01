import React from 'react';

const Expert = ({ expert }) => {

    const { id, name, img, } = expert;
    return (
        <div class="card gx-5" style={{ width: "18rem" }}>
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    );
};

export default Expert;